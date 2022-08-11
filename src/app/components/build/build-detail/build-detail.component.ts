import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data-service';
import { HttpService } from 'src/app/services/http-service';
import { GlobalConstants } from 'src/app/utils/global-constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Project } from 'src/app/models/project';
import { BuildDetail } from 'src/app/models/build-detail';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval, BehaviorSubject } from 'rxjs';
import { StringsEng } from 'src/app/utils/strings-eng';

@Component({
  selector: 'app-build-detail',
  templateUrl: './build-detail.component.html',
  styleUrls: ['./build-detail.component.css'],
})
export class BuildDetailComponent implements OnInit, OnDestroy {
  constructor(
    private dataService: DataService,
    private httpService: HttpService,
    private _snackbar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  buildId: string;
  currentProject: Project;

  // observables (destroy onDestroy)
  private currentProjSub: Subscription;
  private routeSub: Subscription;

  // observable status (for stopping intervals)
  private buildStatusSub: Subscription;
  private buildStatusBS = new BehaviorSubject('');
  private buildStatusObs = this.buildStatusBS.asObservable();
  setBuildStatus(buildStatus: string) {
    this.buildStatusBS.next(buildStatus);
  }

  // polling interval
  pollingIntervalMillis: number = 5000;

  // build details
  buildDetails: BuildDetail;
  buildDetailsTimer: Subscription;

  // for jenkins polling
  jenkinsBuildNo: number;
  jenkinsBuildNoTimer: Subscription;

  // jenkinsConsole
  consoleOutputTimer: Subscription;
  consoleOutput: string;

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      this.buildId = params.get('build_id');

      // setup observer for build status
      this.buildStatusSub = this.buildStatusObs.subscribe(
        (buildStatus: string) => {
          // only check if build status has value
          if (buildStatus == null || buildStatus == '') return;

          // cancel all intervals if status changed to fail/success
          if (!this.shouldPollBasedOnStatus()) {
            this.stopAllPolling();
          }
        }
      );

      // start polling for build details first
      this.startBuildDetailsPolling();
    });

    this.currentProjSub = this.dataService.currentProjectObs.subscribe(
      (project: Project) => {
        if (project != null) {
          this.currentProject = project;
        }
      }
    );
  }

  //=== UI funcs
  getStatusText(item: BuildDetail): string {
    switch (item.status) {
      case 'building': // primary blue
        return 'Building...';

      case 'pending': // orange
        return 'Build pending';

      case 'success': // green
        return 'Build succeeded!';

      case 'failed': // red
        return 'Build failed';
    }
  }

  getStatusColour(item: BuildDetail): string {
    switch (item.status.toLowerCase()) {
      case 'building': // primary blue
        return 'primary';

      case 'pending': // orange
        return 'warning';

      case 'success': // green
        return 'success';

      case 'failed': // red
        return 'danger';
    }
  }

  getStatusIcon(item: BuildDetail): string {
    switch (item.status.toLowerCase()) {
      case 'building': // primary blue
        return 'cached';

      case 'pending': // orange
        return 'history';

      case 'success': // green
        return 'check_circle_outline';

      case 'failed': // red
        return 'cancel';
    }
  }

  isStatusPendingBuilding(item: BuildDetail): boolean {
    switch (item.status.toLowerCase()) {
      case 'pending':
      case 'building':
        return true;

      default:
        return false;
    }
  }

  getBuildDuration(item: BuildDetail): string {
    let minutes = item.build_minutes;

    var hrStr = '00';
    var minStr = '00';
    if (minutes == null || minutes == 0) {
    } else {
      let hr = Math.floor(minutes / 60);
      let min = minutes - hr * 60;

      hrStr = hr.toString();
      minStr = min.toString();

      if (hrStr.length < 2) hrStr = `0${hrStr}`;
      if (minStr.length < 2) minStr = `0${minStr}`;
    }

    return `${hrStr} hr : ${minStr} min`;
  }

  shouldShowConsoleLoading(): boolean {
    return (
      this.consoleOutput == null ||
      this.buildDetails.status == 'pending' ||
      this.buildDetails.status == 'building'
    );
  }

  //=== http for cancel/rebuild
  async rebuildOnClick() {
    this.dataService.setIsLoading(true);

    // build form body json
    let formBody = {
      project_id: this.currentProject.project_id,
      build_id: this.buildDetails.build_id,
    };

    var resp;
    if (this.currentProject.platform == 'ios') {
      resp = await this.httpService.httpPostWithHeader(
        GlobalConstants.HTTP_REBUILD_URL,
        formBody
      );
    } else {
      // android
    }

    this.dataService.setIsLoading(false);

    if (resp.success) {
      // go to build detail page if resp success
      window.location.href = `/build-detail/${resp.data.build_id}`;
    }
  }

  async cancelBuildOnClick() {
    if (confirm(StringsEng.CANCEL_BUILD_CONFIRM(this.buildDetails.build_no))) {
      this.dataService.setIsLoading(true);

    // build form body json
    let formBody = {
      platform: this.currentProject.platform,
      build_id: this.buildDetails.build_id,
    };

    var resp;
    if (this.currentProject.platform == 'ios') {
      resp = await this.httpService.httpPostWithHeader(
        GlobalConstants.HTTP_STOP_BUILD_URL,
        formBody
      );
    } else {
      // android
    }

    this.dataService.setIsLoading(false);

    if (resp.success) {
      this._snackbar.open(
        StringsEng.CANCEL_BUILD_SUCCESS(this.buildDetails.build_no),
        null,
        {
          duration: GlobalConstants.SNACKBAR_DURATION_LONG,
        }
      );

      // refresh details
      this.getBuildDetails();
    }
    }
  }

  //=== http funcs for get/polling
  async getBuildDetails() {
    var getBuildDetailsURL = GlobalConstants.HTTP_GET_BUILD_DETAILS_URL(
      this.buildId
    );

    let resp = await this.httpService.httpGetWithHeader(
      getBuildDetailsURL,
      true
    );

    if (resp.success) {
      this.buildDetails = resp.data;

      // update build status obs
      this.setBuildStatus(this.buildDetails.status);

      // start polling for jenkins build number when successfully get build details
      this.startJenkinsBuildNoPolling();
    } else {
      // stop polling on failure (TODO: improve based on error codes)
      // this.stopBuildDetailsInterval();
    }
  }

  // when jenkins build begins, build number will be 0. must keep polling till non-zero,
  // then only start to get build console
  async getJenkinsBuildNumber() {
    var getJenkinsBuildNumberURL = GlobalConstants.HTTP_GET_JENKINS_BUILD_NUMBER_URL(
      this.buildId
    );

    let resp = await this.httpService.httpGetWithHeader(
      getJenkinsBuildNumberURL,
      true
    );

    if (resp.success) {
      this.jenkinsBuildNo = resp.data.build_no;

      // start polling for console only if build number is non-zero
      if (this.jenkinsBuildNo != 0) this.startConsoleOutpuPolling();
    } else {
      // this.stopJenkinsBuildNoInterval();
    }
  }

  async getConsoleOutput() {
    var getConsoleOutputURL = GlobalConstants.HTTP_GET_CONSOLE_OUTPUT_URL(
      this.buildId,
      'ios',
      this.jenkinsBuildNo.toString()
    );

    // get console using jenkins base url
    let resp = await this.httpService.httpGetWithHeader(
      getConsoleOutputURL,
      true,
      GlobalConstants.HTTP_BASE_URL,
      true
    );

    if (resp.success) {
      this.consoleOutput = resp.data;
    } else {
      // this.stopJenkinsBuildNoInterval();
    }
  }

  //=== polling funcs
  // should ONLY poll if status is building OR pending
  private shouldPollBasedOnStatus(): boolean {
    return (
      this.buildDetails.status == 'building' ||
      this.buildDetails.status == 'pending'
    );
  }

  //=== interval funcs
  // poll build details for status and duration
  private startBuildDetailsPolling() {
    // create timer only once
    if (this.buildDetailsTimer != undefined) return;

    // get details first time
    this.getBuildDetails();

    console.log('startBuildDetailsInterval');

    this.buildDetailsTimer = interval(this.pollingIntervalMillis).subscribe(
      (val) => {
        console.log('startBuildDetailsInterval polling');

        // don't continue polling if status changes to success/failure
        if (this.shouldPollBasedOnStatus) this.getBuildDetails();
        else this.stopBuildDetailsPolling();
      }
    );
  }

  private stopBuildDetailsPolling() {
    if (this.buildDetailsTimer != undefined)
      this.buildDetailsTimer.unsubscribe();
  }

  // poll jenkins build no until non-zero
  private startJenkinsBuildNoPolling() {
    // create timer only once
    if (this.jenkinsBuildNoTimer != undefined) return;

    // get first time
    this.getJenkinsBuildNumber();

    // don't proceed if status changed
    if (!this.shouldPollBasedOnStatus()) return;

    console.log(
      'startJenkinsBuildNoInterval, jenkins buildno = ',
      this.jenkinsBuildNo
    );

    this.jenkinsBuildNoTimer = interval(this.pollingIntervalMillis).subscribe(
      (val) => {
        console.log(
          'startJenkinsBuildNoInterval polling, jenkinsNo = ',
          this.jenkinsBuildNo
        );

        // only poll if should
        if (this.shouldPollBasedOnStatus())
          if (this.jenkinsBuildNo == 0)
            // only continue polling if build number is zero (stop when non-zero)
            this.getJenkinsBuildNumber();
          else {
            // if jenkins build no is non-zero, stop jenkins inverval and start polling console output
            this.stopJenkinsBuildNoPolling();
          }
        // else stop polling
        else this.stopJenkinsBuildNoPolling();
      }
    );
  }

  private stopJenkinsBuildNoPolling() {
    if (this.jenkinsBuildNoTimer != undefined)
      this.jenkinsBuildNoTimer.unsubscribe();
  }

  private startConsoleOutpuPolling() {
    // create timer only once
    if (this.consoleOutputTimer != undefined) return;

    // get first time
    this.getConsoleOutput();

    // don't proceed if status xxx
    if (!this.shouldPollBasedOnStatus()) return;

    console.log('startConsoleOutpuPolling');

    this.consoleOutputTimer = interval(this.pollingIntervalMillis).subscribe(
      (val) => {
        console.log('startConsoleOutpuPolling polling');

        if (this.shouldPollBasedOnStatus()) this.getConsoleOutput();
        else this.stopConsoleOutputPolling();
      }
    );
  }

  private stopConsoleOutputPolling() {
    if (this.consoleOutputTimer != undefined)
      this.consoleOutputTimer.unsubscribe();
  }

  private stopAllPolling() {
    this.stopBuildDetailsPolling();
    this.stopJenkinsBuildNoPolling();
    this.stopConsoleOutputPolling();
  }

  ngOnDestroy(): void {
    this.currentProjSub.unsubscribe();
    this.routeSub.unsubscribe();
    this.buildStatusSub.unsubscribe();

    this.stopAllPolling();
  }
}
