import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data-service';
import { HttpService } from 'src/app/services/http-service';
import { GlobalConstants } from 'src/app/utils/global-constants';
import { StringsEng } from 'src/app/utils/strings-eng';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GitConfigs } from 'src/app/models/git-configs';
import { Project } from 'src/app/models/project';
import { Clipboard } from '@angular/cdk/clipboard';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-git-configs',
  templateUrl: './git-configs.component.html',
  styleUrls: ['./git-configs.component.css'],
})
export class GitConfigsComponent implements OnInit, OnDestroy {
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private httpService: HttpService,
    private _snackbar: MatSnackBar,
    private clipboard: Clipboard
  ) {}
  currentProjectId: string

  // observables (destroy onDestroy)
  private currentProjSub: Subscription

  // for form
  gitSSHKey: string;
  gitConfigForm = this.formBuilder.group({
    git_url: '',
    git_login_type: 'ssh',
    git_password: '',
  });

  ngOnInit(): void {    
    // subscribe to current proj
    this.currentProjSub = this.dataService.currentProjectObs.subscribe((project: Project) => {
      if (project != null) {
        this.currentProjectId = project.project_id        

        // get git config
        this.getGitConfigs();

        // get ssh key
        this.getSSHKey()
      }
    });
  };

  //=== ui
  getGitUrlPlaceHolder(): string {
    if (this.gitConfigForm.value.git_login_type == 'ssh')
    return "git@bitbucket.org:userA/projectABC.git"
    else
    return "https://userLoginA@bitbucket.org/userA/projectABC.git"
  }

  //=== http
  async getGitConfigs() {
    let resp = await this.httpService.httpGetWithHeader(
      GlobalConstants.HTTP_GET_GIT_CONFIG_URL(this.currentProjectId),
      true
    );

    if (resp.success) {
      // insert data to form
      let gitConfigs = resp.data as GitConfigs;

      this.gitConfigForm = this.formBuilder.group({
        project_id: this.currentProjectId,
        git_url: gitConfigs.git_url,
        git_login_type: gitConfigs.git_login_type,
        git_password: gitConfigs.git_password,
      });
    } else {
      // error means no configs yet - clear form
      this.gitConfigForm = this.formBuilder.group({
        project_id: this.currentProjectId,
        git_url: '',
        git_login_type: 'ssh',
        git_password: '',
      });
    }
  }

  async getSSHKey() {
    let resp = await this.httpService.httpGetWithHeader(
      GlobalConstants.HTTP_GET_SSH_KEY_URL(this.currentProjectId),
      true
    );

    if (resp.success) {
      this.gitSSHKey = resp.data.public_key
    } else {
      this.gitSSHKey = null
    }
  }

  generateBtnDisabled = false;
  generateBtnOnClick() {
    // show confirmation only if already got ssh key
    if (this.gitSSHKey != null) {
      if (confirm(StringsEng.GENERATE_SSH_CONFIRM)) this.generateSSHKey();
    } else this.generateSSHKey();
  }

  async generateSSHKey() {
    this.generateBtnDisabled = true;

    let resp = await this.httpService.httpPostWithHeader(
      GlobalConstants.HTTP_GENERATE_SSH_KEY_URL,
      { project_id: this.currentProjectId }
    );

    this.generateBtnDisabled = false;

    if (resp.success) {
      this.gitSSHKey = resp.data.public_key;
    }
  }

  // copy ssh key if got
  textAreaOnClick() {
    if (this.gitSSHKey != null) {
      this.clipboard.copy(this.gitSSHKey);

      this._snackbar.open(StringsEng.SSH_KEY_COPIED, null, {
        duration: GlobalConstants.SNACKBAR_DURATION_MID,
      });
    }
  }

  async submitGitConfigForm(formBody) {
    // check if ssh key already generated for ssh
    if (formBody.git_login_type == 'ssh' && this.gitSSHKey == null) {
      alert(StringsEng.SSH_KEY_EMPTY);
      return;
    }

    this.dataService.setIsLoading(true);

    // update project Id to formBody
    formBody.project_id = this.currentProjectId

    // remove password from body if got ssh
    if (formBody.git_login_type == 'ssh') formBody.git_password = ''

    let resp = await this.httpService.httpPostWithHeader(
      GlobalConstants.HTTP_SET_GIT_CONFIG_URL,
      formBody
    );

    this.dataService.setIsLoading(false);

    if (resp.success) {
      this._snackbar.open(StringsEng.SET_GIT_CONFIG_SUCCESS, null, {
        duration: GlobalConstants.SNACKBAR_DURATION_MID,
      });
    }
  }

  ngOnDestroy(): void {
    this.currentProjSub.unsubscribe();
  }
}
