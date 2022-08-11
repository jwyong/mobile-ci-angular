import { Component, OnInit, OnDestroy, Inject, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data-service';
import { HttpResp, HttpService } from 'src/app/services/http-service';
import { GlobalConstants } from 'src/app/utils/global-constants';
import { StringsEng } from 'src/app/utils/strings-eng';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { Router } from '@angular/router';

import {
  IosBuildTemplateOptions,
  IosBuildTemplate,
} from 'src/app/models/ios-build-template';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-build-template',
  templateUrl: './build-template.component.html',
  styleUrls: ['./build-template.component.css'],
})
export class BuildTemplateComponent implements OnInit, OnDestroy {
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private httpService: HttpService,
    private _snackbar: MatSnackBar,
    private router: Router
  ) {}

  currentProjectId: string;
  currentProjectPlatform: string;

  // observables (destroy onDestroy)
  private currentProjSub: Subscription;

  // dialog input (for build type)
  @Input()
  private dialogData;
  getSubmitBtnText(): string {
    if (this.dialogData == null) return 'Submit';
    else if (this.dialogData.buildType == GlobalConstants.BUILD_TYPE_NEW_BUILD)
      return 'Create Build';
    else return 'Rebuild';
  }

  // models for dropdown lists
  iosBuildTemplateOptions: IosBuildTemplateOptions;

  // dynamic dropdown for env (based on scheme)
  environments: string[] = [];

  // built template form
  buildTemplateFormIos = this.getInitialFormBuilder();
  private getInitialFormBuilder() {
    return this.formBuilder.group({
      project_id: '',
      branch: '',
      environment: '',
      scheme: '',
      testflight_option: false,
      test_option: false,
      push_to_branch_option: false,
      s3_carthage_folder: 'Production', // hardcoded for mvp
      firebase_distribution_group: '',
      release_note: '',
      adhoc_option: false,
      enterprise_option: false,

      build_number: null, // used to store build number temp, only for update build number func
    });
  }

  // cartfile form
  cartFileFormIos = this.getCartfileFormBuilder();
  private getCartfileFormBuilder() {
    return this.formBuilder.group({
      project_id: '',
      folder_name: 'Production', // hardcoded for mvp
      cartfile: [''],
    });
  }
  cartFileStatus: string;
  cartFileName: string;

  // check if already got build number on cloud
  hasBuildNumberOnCloud = false;

  ngOnInit(): void {
    this.currentProjSub = this.dataService.currentProjectObs.subscribe(
      (project: Project) => {
        if (project != null) {
          this.currentProjectId = project.project_id;
          this.currentProjectPlatform = project.platform;

          // get template first, then get list of options
          this.getBuildTemplateOptions();
        }
      }
    );
  }

  //=== for cartfile upload
  // when file selected
  async cartfileOnChange(event) {
    if (event.target.files.length > 0) {
      // set file name first
      this.cartFileName = event.target.files[0].name;

      // add file to form
      const file = event.target.files[0];
      this.cartFileFormIos.patchValue({
        cartfile: file,
      });

      this.uploadCartFileHttp();
    }
  }

  // upload file via http
  async uploadCartFileHttp() {
    this.dataService.setIsLoading(true);

    // add projectId to form
    this.cartFileFormIos.patchValue({
      project_id: this.currentProjectId,
    });

    // transfer vars from form to formData
    var formData = new FormData();
    Object.keys(this.cartFileFormIos.controls).forEach((key) => {
      formData.append(key, this.cartFileFormIos.value[key]);
    });

    var resp = await this.httpService.httpPostFormDataWithHeader(
      GlobalConstants.HTTP_SET_IOS_CARTFILE_URL,
      formData
    );

    this.dataService.setIsLoading(false);

    if (resp.success) {
      this._snackbar.open(StringsEng.SET_CARTFILE_SUCCESS, null, {
        duration: GlobalConstants.SNACKBAR_DURATION_LONG,
      });

      // get cartfile status
      this.getCartfileStatus();
    } else {
      // show retry upload ux
    }
  }

  async getCartfileStatus() {
    var getStaticURL = GlobalConstants.HTTP_GET_IOS_CARTFILE_URL(
      this.currentProjectId,
      this.cartFileFormIos.value.folder_name
    );

    let resp = await this.httpService.httpGetWithHeader(getStaticURL, true);

    if (resp.success) {
      this.cartFileName = 'Cartfile';
      this.cartFileStatus = resp.data.status;
    } else {
      this.cartFileStatus = null;
    }
  }

  //=== for build template
  // get template options to initiate form
  async getBuildTemplateOptions() {
    // choose url based on project platform
    var getStaticURL: string;
    if (this.currentProjectPlatform == 'ios')
      getStaticURL = GlobalConstants.HTTP_GET_IOS_BUILD_TEMPLATE_OPTIONS_URL(
        this.currentProjectId
      );
    else return; // no android yet

    let resp = await this.httpService.httpGetWithHeader(getStaticURL, true);

    if (resp.success) {
      // insert data to model for dropdowns
      if (this.currentProjectPlatform == 'ios') {
        this.iosBuildTemplateOptions = resp.data;

        // update build number to buildTemplate form for liveData
        this.buildTemplateFormIos.patchValue({
          build_number: resp.data.build_number,
        });

        // update build number bool if already got from server
        if (this.iosBuildTemplateOptions.build_number != null)
          this.hasBuildNumberOnCloud = true;

        this.getBuildTemplate();
      } else return;
    } else {
      // clear form if error (400)
      if (resp.error.error.message == 'Not found') {
        // clear form AND dropdown lists
        this.buildTemplateFormIos = this.getInitialFormBuilder();
        this.cartFileFormIos = this.getCartfileFormBuilder();

        this.iosBuildTemplateOptions = null;
        this.environments = [];
      }
    }
  }

  // update env dropdown on scheme change
  onSchemeChanged() {
    this.updateEnvDropdown();
  }

  updateEnvDropdown() {
    let envs = this.iosBuildTemplateOptions.build_options.find(
      (option) => option.scheme === this.buildTemplateFormIos.value.scheme
    );

    if (envs != null) this.environments = envs.environment;

    // update form to first in env array
    this.buildTemplateFormIos.patchValue({
      environment: this.environments[0],
    });
  }

  // get build template
  async getBuildTemplate() {
    // choose url based on project platform
    var getStaticURL: string;
    if (this.currentProjectPlatform == 'ios')
      getStaticURL = GlobalConstants.HTTP_GET_IOS_BUILD_TEMPLATE_URL(
        this.currentProjectId
      );
    else return; // no android yet

    let resp = await this.httpService.httpGetWithHeader(getStaticURL, true);

    if (resp.success) {
      // insert data to form
      if (this.currentProjectPlatform == 'ios') {
        let iosBuildTemplate = resp.data as IosBuildTemplate;

        this.buildTemplateFormIos = this.formBuilder.group({
          project_id: this.currentProjectId,
          branch: iosBuildTemplate.branch,
          environment: iosBuildTemplate.environment,
          scheme: iosBuildTemplate.scheme,
          testflight_option: iosBuildTemplate.testflight_option,
          test_option: iosBuildTemplate.test_option,
          push_to_branch_option: iosBuildTemplate.push_to_branch_option,
          s3_carthage_folder: iosBuildTemplate.s3_carthage_folder,
          firebase_distribution_group:
            iosBuildTemplate.firebase_distribution_group,
          release_note: iosBuildTemplate.release_note,
          adhoc_option: this.iosBuildTemplateOptions
            ? this.iosBuildTemplateOptions.firebase_adhoc_option == '1'
            : false,
          enterprise_option: iosBuildTemplate.enterprise_option,
          build_number: this.iosBuildTemplateOptions.build_number,
        });

        // setup env dropdown based on scheme
        this.updateEnvDropdown();

        // get cartfile status if cart option is true
        if (this.iosBuildTemplateOptions.carthage_option == '1')
          this.getCartfileStatus();
      } else return; // android
    } else {
    }
  }

  //=== for build number
  async updateBuildNumber(): Promise<HttpResp> {
    var resp, formBody;
    if (this.currentProjectPlatform == 'ios') {
      formBody = {
        project_id: this.currentProjectId,
        build_number: this.buildTemplateFormIos.value.build_number,
      };

      console.log(
        'buildNumber = ',
        this.buildTemplateFormIos.value.build_number
      );

      resp = await this.httpService.httpPostWithHeader(
        GlobalConstants.HTTP_SET_BUILD_NUMBER_URL,
        formBody
      );
    } else {
    }

    return resp;
  }

  //=== for form submission (build template, create new build, rebuild)
  // form on submit - differentiate by dialogData
  formOnSubmit(formBody) {
    if (this.dialogData == null) {
      // build template
      this.submitBuildTemplate(formBody);
    } else {
      switch (this.dialogData.buildType) {
        case GlobalConstants.BUILD_TYPE_NEW_BUILD:
          this.submitNewBuild(formBody);
          break;

        case GlobalConstants.BUILD_TYPE_REBUILD:
          break;
      }
    }
  }

  // for build template form
  async submitBuildTemplate(formBody) {
    // alert user if cartfile is null
    if (
      this.iosBuildTemplateOptions.carthage_option == '1' &&
      this.cartFileName == null
    ) {
      alert(StringsEng.CARTFILE_NULL);
      return;
    }

    this.dataService.setIsLoading(true);

    // add proj id to form
    formBody.project_id = this.currentProjectId;

    var resp;
    if (this.currentProjectPlatform == 'ios') {
      resp = await this.httpService.httpPostWithHeader(
        GlobalConstants.HTTP_SET_IOS_BUILD_TEMPLATE_URL,
        formBody
      );
    } else {
    }

    this.dataService.setIsLoading(false);

    if (resp.success) {
      this._snackbar.open(StringsEng.SET_BUILD_TEMPLATE_SUCCESS, null, {
        duration: GlobalConstants.SNACKBAR_DURATION_MID,
      });
    }
  }

  // for create new build
  async submitNewBuild(formBody) {
    this.dataService.setIsLoading(true);

    // add new build data to form
    formBody.project_id = this.currentProjectId;

    var resp;
    if (this.currentProjectPlatform == 'ios') {
      // if hvn't updated build number to server, do so
      var shouldProceed = false;

      if (!this.hasBuildNumberOnCloud) {
        shouldProceed = (await this.updateBuildNumber()).success;
      } else {
        shouldProceed = true;
      }

      // don't proceed if update build number failed
      if (!shouldProceed) return;

      // add in iosOnly details
      formBody.platform = 'ios';

      // remove build number from formBody
      delete formBody.build_number;

      resp = await this.httpService.httpPostWithHeader(
        GlobalConstants.HTTP_CREATE_BUILD_URL,
        formBody
      );
    } else {
      // android
    }

    this.dataService.setIsLoading(false);

    if (resp.success) {
      // go to build detail page if resp success
      let buildId = resp.data.build_id;
      window.location.href = `/build-detail/${buildId}`;
    }
  }

  ngOnDestroy(): void {
    this.currentProjSub.unsubscribe();
  }
}
