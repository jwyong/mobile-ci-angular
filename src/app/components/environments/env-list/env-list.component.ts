import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data-service';
import { HttpService } from 'src/app/services/http-service';
import { GlobalConstants } from 'src/app/utils/global-constants';
import { StringsEng } from 'src/app/utils/strings-eng';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EnvDetailsComponent } from 'src/app/components/environments/env-details/env-details.component';
import { EnvConfigsIosGet, SchemeGet } from 'src/app/models/ios-env-configs';

@Component({
  selector: 'app-env-list',
  templateUrl: './env-list.component.html',
  styleUrls: ['./env-list.component.css'],
})
export class EnvListComponent implements OnInit, OnDestroy {
  currentProjectId: string;
  currentProjectPlatform: string;

  // observables (destroy onDestroy)
  private currentProjSub: Subscription;

  envConfigsIos: EnvConfigsIosGet;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private httpService: HttpService,
    private _snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // subscribe to current proj
    this.currentProjSub = this.dataService.currentProjectObs.subscribe(
      (project: Project) => {
        if (project != null) {
          this.currentProjectId = project.project_id;
          this.currentProjectPlatform = project.platform;

          // get env list
          this.getEnvConfigs();
        }
      }
    );
  }

  async getEnvConfigs() {
    // choose url based on project platform
    var getEnvConfigsURL: string;
    if (this.currentProjectPlatform == 'ios')
      getEnvConfigsURL = GlobalConstants.HTTP_GET_IOS_ENV_CONFIG_URL(
        this.currentProjectId
      );
    else return; // no android yet

    let resp = await this.httpService.httpGetWithHeader(getEnvConfigsURL, true);

    if (resp.success) {
      // insert data to form
      if (this.currentProjectPlatform == 'ios') {
        this.envConfigsIos = resp.data as EnvConfigsIosGet;
      } else return;
    }
  }

  openEnvDetailsDialog(scheme: SchemeGet) {
    this.dialog.open(EnvDetailsComponent, {
      data: {
        project_id: this.currentProjectId,
        project_platform: this.currentProjectPlatform,
        scheme: scheme,
      },
    });
  }

  createNewScheme() {
    this.dialog.open(EnvDetailsComponent, {
      data: {
        project_id: this.currentProjectId,
        project_platform: this.currentProjectPlatform,
      },
    });
  }

  ngOnDestroy(): void {
    this.currentProjSub.unsubscribe();
  }
}
