import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { DataService } from 'src/app/services/data-service';
import { HttpService } from 'src/app/services/http-service';
import { GlobalConstants } from 'src/app/utils/global-constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { BuildDetail } from 'src/app/models/build-detail';
import { Router } from '@angular/router';
import { StringsEng } from 'src/app/utils/strings-eng';
import { MatDialog } from '@angular/material/dialog';
import { BuildComponent } from 'src/app/components/build/build/build.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-build-history',
  templateUrl: './build-history.component.html',
  styleUrls: ['./build-history.component.scss'],
})
export class BuildHistoryComponent implements OnInit, OnDestroy {
  constructor(
    private dataService: DataService,
    private httpService: HttpService,
    private dialog: MatDialog,
    private _snackbar: MatSnackBar,
    private router: Router
  ) {}

  currentProject: Project;

  // observables (destroy onDestroy)
  private currentProjSub: Subscription;

  // for pagination
  totalCount = 0;
  offset = 0;
  buildHistoryList: BuildDetail[] = [];

  ngOnInit(): void {
    this.currentProjSub = this.dataService.currentProjectObs.subscribe(
      (project: Project) => {
        if (project != null) {
          this.currentProject = project;

          // get build history list
          this.getBuildHistory();
        }
      }
    );
  }

  // onResume
  @HostListener('window:focus', ['$event'])
  onFocus(event) {
    this.getBuildHistory()
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

      case 'stop':
        return 'Build cancelled';
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

      case 'stop': // grey
        return 'muted';
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

  //=== onclick funcs
  goToBuildDetails(event, buildId: String) {
    event.preventDefault();
    event.stopPropagation();

    this.router.navigate([`/build-detail/${buildId}`]);
  }

  //=== paginator funcs
  onPageEvent(event: PageEvent) {
    this.dataService.setIsLoading(true);

    // update vars for paginator
    this.offset = event.pageIndex * 15;

    // get history list
    this.getBuildHistory();
  }

  //=== http funcs
  async getBuildHistory() {
    var getBuildHistoryURL = GlobalConstants.HTTP_GET_BUILD_HISTORY_URL(
      this.currentProject.project_id,
      this.offset
    );

    let resp = await this.httpService.httpGetWithHeader(
      getBuildHistoryURL,
      true
    );

    this.dataService.setIsLoading(false);

    if (resp.success) {
      // update total count on get list
      this.totalCount = resp.data['total_count'];
      this.buildHistoryList = resp.data['build_list'];
    } else {
    }
  }

  createNewBuildOnClick() {
    this.dialog.open(BuildComponent, {
      data: {
        buildType: GlobalConstants.BUILD_TYPE_NEW_BUILD,
      },
    });
  }

  async rebuildOnClick(buildId: string) {
    this.dataService.setIsLoading(true);

    // build form body json
    let formBody = {
      project_id: this.currentProject.project_id,
      build_id: buildId,
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

  async cancelBuildOnClick(buildId: string, buildNumber: string) {
    this.dataService.setIsLoading(true);

    // build form body json
    let formBody = {
      platform: this.currentProject.platform,
      build_id: buildId,
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
      this._snackbar.open(StringsEng.CANCEL_BUILD_SUCCESS(buildNumber), null, {
        duration: GlobalConstants.SNACKBAR_DURATION_LONG,
      });

      // refresh history list
      this.getBuildHistory();
    }
  }

  //=== interval funcs
  // private startBuildHistoryPolling() {
  //   // create timer only once
  //   if (this.buildDetailsTimer != undefined) return;

  //   // get details first time
  //   this.getBuildDetails();

  //   console.log('startBuildDetailsInterval');

  //   this.buildDetailsTimer = interval(this.pollingIntervalMillis).subscribe(
  //     (val) => {
  //       console.log('startBuildDetailsInterval polling');

  //       // don't continue polling if status changes to success/failure
  //       if (this.shouldPollBasedOnStatus) this.getBuildDetails();
  //       else this.stopBuildDetailsPolling();
  //     }
  //   );
  // }

  ngOnDestroy(): void {
    this.currentProjSub.unsubscribe();
  }
}
