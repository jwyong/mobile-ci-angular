import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data-service';
import { HttpService } from 'src/app/services/http-service';
import { GlobalConstants } from 'src/app/utils/global-constants';
import { StringsEng } from 'src/app/utils/strings-eng';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { IosStaticConfigs } from 'src/app/models/ios-static-configs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-static-configs',
  templateUrl: './static-configs.component.html',
  styleUrls: ['./static-configs.component.css'],
})
export class StaticConfigsComponent implements OnInit, OnDestroy {
  currentProjectId: string;
  currentProjectPlatform: string;

  // observables (destroy onDestroy)
  private currentProjSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private httpService: HttpService,
    private _snackbar: MatSnackBar
  ) {}

  // for main static configs form
  staticConfigFormIos = this.getInitialFormBuilder();
  private getInitialFormBuilder() {
    return this.formBuilder.group({
      project_id: '',

      // text copied from xcode
      xcodeproject: '',
      team_cert: '',

      // manual || automatic
      signing_method: 'automatic',

      // credential || key
      upload_method: 'key',

      // credential only
      appstore_username: '',
      appstore_password: '',
      bundle_ids: '',

      // key only (appstore connect api)
      appstore_api_key: '',
      appstore_api_issuer: '',
      appstore_key: '',

      // pod related
      pod_option: false,
      carthage_option: false,

      // optional field for when compiling ipa
      bitcode_option: true,

      // optional field for firebase deployment
      firebase_adhoc_option: false,
      firebase_token: '',

      // google || teams || slack || none
      notification_channel: 'none',

      // hide if none
      notification_hook_url: '',
    });
  }

  // app signing form
  appSigningFormIos = this.getAppSigningIosFormBuilder();
  private getAppSigningIosFormBuilder() {
    return this.formBuilder.group({
      project_id: '',
      certificate_password: '', // optional
      provisioning_cert: [''],
      private_key: [''],
    });
  }

  //=== for ui
  // app upload method desc string based on user's selection
  getUploadMethodDesc(uploadMethod: string) {
    if (uploadMethod == 'key')
    return StringsEng
  }

  // file names for uploading fields
  provisioningCertFileName: string;
  privateKeyFileName: string;

  // for app signing method files check - check if required files uploaded
  hasAutoAppSigningFiles: boolean = false;
  checkAppSigningAndProceed(): boolean {
    if (this.staticConfigFormIos.value.signing_method == 'automatic')
      // auto - check if files uploaded
      return this.hasAutoAppSigningFiles;
    // manual signing - proceed
    else return true;
  }

  // only enable upload btn if got changes
  shouldEnableUploadBtn = false;
  // getUploadBtnClass() {
  //   if (this.shouldEnableUploadBtn) return ''
  // }

  ngOnInit(): void {
    // subscribe to current proj
    this.currentProjSub = this.dataService.currentProjectObs.subscribe(
      (project: Project) => {
        if (project != null) {
          this.currentProjectId = project.project_id;
          this.currentProjectPlatform = project.platform;

          // reset everything before get new details
          this.staticConfigFormIos = this.getInitialFormBuilder();
          this.appSigningFormIos = this.getAppSigningIosFormBuilder();
    
          this.provisioningCertFileName = null;
          this.privateKeyFileName = null;
          this.hasAutoAppSigningFiles = false;
          this.shouldEnableUploadBtn = false

          this.getStaticConfigs();
        }
      }
    );
  }

  async getStaticConfigs() {
    // choose url based on project platform
    var getStaticURL: string;
    if (this.currentProjectPlatform == 'ios')
      getStaticURL = GlobalConstants.HTTP_GET_IOS_STATIC_CONFIG_URL(
        this.currentProjectId
      );
    else return; // no android yet

    let resp = await this.httpService.httpGetWithHeader(getStaticURL, true);

    if (resp.success) {
      // insert data to form
      if (this.currentProjectPlatform == 'ios') {
        let iosStaticConfigs = resp.data as IosStaticConfigs;

        // update main form first
        this.staticConfigFormIos = this.formBuilder.group({
          project_id: this.currentProjectId,
          xcodeproject: iosStaticConfigs.xcodeproject,
          signing_method: iosStaticConfigs.signing_method,
          upload_method: iosStaticConfigs.upload_method,
          team_cert: iosStaticConfigs.team_cert,
          appstore_username: iosStaticConfigs.appstore_username,
          appstore_password: iosStaticConfigs.appstore_password,
          appstore_api_key: iosStaticConfigs.appstore_api_key,
          appstore_api_issuer: iosStaticConfigs.appstore_api_issuer,
          appstore_key: iosStaticConfigs.appstore_key,
          bundle_ids: iosStaticConfigs.bundle_ids,
          pod_option: iosStaticConfigs.pod_option,
          carthage_option: iosStaticConfigs.carthage_option,
          bitcode_option: iosStaticConfigs.bitcode_option,
          firebase_adhoc_option: iosStaticConfigs.firebase_adhoc_option,
          firebase_token: iosStaticConfigs.firebase_token,
          notification_channel: iosStaticConfigs.notification_channel,
          notification_hook_url: iosStaticConfigs.notification_hook_url,
        });

        // update app signing form if auto
        if (iosStaticConfigs.signing_method == 'automatic') {
          this.appSigningFormIos.patchValue({
            certificate_password: iosStaticConfigs.certificate_password,
          });
          this.provisioningCertFileName =
            iosStaticConfigs.provisioning_file_name;
          this.privateKeyFileName = iosStaticConfigs.private_key_file_name;
          this.hasAutoAppSigningFiles = true;

        } else {
          this.hasAutoAppSigningFiles = false;
        }
      } else return;
    }
  }

  // app signing cert pword
  shouldShowCertPword = false;
  toggleShowCertPword() {
    this.shouldShowCertPword = !this.shouldShowCertPword;
  }

  //=== app signing files upload
  async provisioningCertOnChange(event) {
    if (event.target.files.length > 0) {
      this.shouldEnableUploadBtn = true;

      // set file name first
      this.provisioningCertFileName = event.target.files[0].name;

      // add file to form
      const file = event.target.files[0];
      this.appSigningFormIos.patchValue({
        provisioning_cert: file,
      });
    }
  }

  async privateKeyOnChange(event) {
    if (event.target.files.length > 0) {
      this.shouldEnableUploadBtn = true;

      // set file name first
      this.privateKeyFileName = event.target.files[0].name;

      // add file to form
      const file = event.target.files[0];
      this.appSigningFormIos.patchValue({
        private_key: file,
      });
    }
  }

  // update upload btn enabled on cert pword field changed
  certPwordOnChange() {
    this.shouldEnableUploadBtn = true;
  }

  async submitStaticConfigForm(formBody) {
    // show dialog if no file uploaded for app signing (auto)
    if (!this.checkAppSigningAndProceed()) {
      alert(StringsEng.APP_SIGNING_FILES_NULL);
      return;
    }

    this.dataService.setIsLoading(true);

    // add project id
    formBody.project_id = this.currentProjectId;

    var resp;
    if (this.currentProjectPlatform == 'ios') {
      resp = await this.httpService.httpPostWithHeader(
        GlobalConstants.HTTP_SET_IOS_STATIC_CONFIG_URL,
        formBody
      );
    } else {
    }

    this.dataService.setIsLoading(false);

    if (resp.success) {
      this._snackbar.open(StringsEng.SET_STATIC_CONFIG_SUCCESS, null, {
        duration: GlobalConstants.SNACKBAR_DURATION_MID,
      });
    }
  }

  // upload form data for app signing method (auto)
  async uploadAppSigningAutoFiles() {
    this.dataService.setIsLoading(true);

    // add projectId to form
    this.appSigningFormIos.patchValue({
      project_id: this.currentProjectId,
    });

    console.log(this.appSigningFormIos.value);

    // transfer vars from form to formData
    var formData = new FormData();
    Object.keys(this.appSigningFormIos.controls).forEach((key) => {
      // only append value if NON-null/empty strings
      if (this.appSigningFormIos.value[key] != '')
        formData.append(key, this.appSigningFormIos.value[key]);
    });

    var resp = await this.httpService.httpPostFormDataWithHeader(
      GlobalConstants.HTTP_SET_IOS_APP_SIGNING_AUTO_URL,
      formData
    );

    this.dataService.setIsLoading(false);

    if (resp.success) {
      this._snackbar.open(StringsEng.SET_APP_SIGNING_FILES_SUCCESS, null, {
        duration: GlobalConstants.SNACKBAR_DURATION_LONG,
      });

      // update upload boolean
      this.hasAutoAppSigningFiles = true;
    } else {
      // show retry upload ux
    }
  }

  ngOnDestroy(): void {
    this.currentProjSub.unsubscribe();
  }
}
