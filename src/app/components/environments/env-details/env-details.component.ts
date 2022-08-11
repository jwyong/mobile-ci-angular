import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormArray } from '@angular/forms';
import { SchemeGet, Environment } from 'src/app/models/ios-env-configs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StringsEng } from 'src/app/utils/strings-eng';
import { GlobalConstants } from 'src/app/utils/global-constants';
import { DataService } from 'src/app/services/data-service';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-env-details',
  templateUrl: './env-details.component.html',
  styleUrls: ['./env-details.component.css'],
})
export class EnvDetailsComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private _snackbar: MatSnackBar,
    private dataService: DataService,
    private httpService: HttpService
  ) {}
  currentProjectId: string;
  currentProjectPlatform: string;

  // for form
  envConfigsFormIos = this.getInitialFormBuilder();
  private getInitialFormBuilder() {
    return this.formBuilder.group({
      scheme_name: '',
      project_id: '',
      settings: this.formBuilder.array([]),
    });
  }
  get settings() {
    return this.envConfigsFormIos.get('settings') as FormArray;
  }
  addSettings(env: Environment) {
    this.settings.push(
      this.formBuilder.group({
        scheme_id: env.scheme_id,
        environment: env.name,
        scheme: this.envConfigsFormIos.value.scheme_name,
        firebase_id: env.firebase_id,
      })
    );
  }

  removeSettings(setting) {
    this.settings.removeAt(
      this.settings.value.findIndex((stg) => stg === setting)
    );
  }

  removeSettingsBasedOnId(schemeId) {
    this.settings.removeAt(
      this.settings.value.findIndex((stg) => stg.scheme_id === schemeId)
    );
  }

  ngOnInit(): void {
    // set global vars first
    this.currentProjectId = this.data.project_id;
    this.currentProjectPlatform = this.data.project_platform;

    let scheme = this.data.scheme as SchemeGet;

    // transfer single data to form
    this.envConfigsFormIos.patchValue({
      scheme_name: scheme ? scheme.scheme : null,
      project_id: this.currentProjectId,
    });

    // only add stuff to form if got scheme
    if (scheme == null) return;

    // loop add data to form
    scheme.environment.forEach((env) => {
      this.addSettings(env);
    });

    console.log(this.settings.controls);
  }

  addNewEnvBtn() {
    this.addSettings({
      name: '',
      scheme_id: null,
      firebase_id: '',
    });
  }

  removeEnvBtn(formEnvSetting) {
    let schemeId = formEnvSetting.value.scheme_id
    // show alert first
    if (confirm(StringsEng.ENV_DELETE_CONFIRM)) {      
      // just remove ui if null
      if (schemeId == null) this.removeSettings(formEnvSetting.value);
      else this.deleteEnvConfigs(schemeId);
    }
  }

  async submitEnvConfigs(formBody) {
    // click on addNewEnvBtn if no settings
    if (this.settings.length <= 0) {
      this.addNewEnvBtn();

      // show snackbar
      this._snackbar.open(StringsEng.ENV_SETTINGS_EMPTY, null, {
        duration: GlobalConstants.SNACKBAR_DURATION_MID,
      });
      return;
    }

    // update scheme name for each settings item in formBody
    if (formBody.scheme_name != null)
      formBody.settings.forEach((setting) => {
        setting.scheme = formBody.scheme_name;
      });

    // remove "scheme_name" from formBody
    delete formBody.scheme_name;

    console.log(formBody);

    // do http post
    this.dataService.setIsLoading(true);

    // choose url based on project platform
    var postEnvConfigURL: string;
    if (this.currentProjectPlatform == 'ios')
      postEnvConfigURL = GlobalConstants.HTTP_SET_IOS_ENV_CONFIG_URL;
    else return; // no android yet

    let resp = await this.httpService.httpPostWithHeader(
      postEnvConfigURL,
      formBody
    );

    this.dataService.setIsLoading(false);

    if (resp.success) {
      this._snackbar.open(StringsEng.SET_ENV_CONFIG_SUCCESS, null, {
        duration: GlobalConstants.SNACKBAR_DURATION_MID,
      });

      window.location.reload();
    }
  }

  async deleteEnvConfigs(schemeId: string) {
    // create formBody from scheme_id
    let formBody = {
      scheme_ids: [schemeId],
    };

    // do http post
    this.dataService.setIsLoading(true);

    // choose url based on project platform
    var deleteEnvConfigURL: string;
    if (this.currentProjectPlatform == 'ios')
      deleteEnvConfigURL = GlobalConstants.HTTP_DELETE_IOS_ENV_CONFIG_URL;
    else return; // no android yet

    let resp = await this.httpService.httpPostWithHeader(
      deleteEnvConfigURL,
      formBody
    );

    this.dataService.setIsLoading(false);

    if (resp.success) {
      this._snackbar.open(StringsEng.ENV_DELETE_SUCCESS, null, {
        duration: GlobalConstants.SNACKBAR_DURATION_MID,
      });

      // delete item from main form as well
      this.removeSettingsBasedOnId(schemeId)
    }
  }
}
