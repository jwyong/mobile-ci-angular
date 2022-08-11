import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http-service';
import { GlobalConstants } from 'src/app/utils/global-constants';
import { LocalStorageService } from 'src/app/services/local-storage-service';
import { DataService } from 'src/app/services/data-service';
import { Project } from 'src/app/models/project';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectComponent } from 'src/app/components/create-project/create-project.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private httpService: HttpService,
    private localStorageService: LocalStorageService,
    private dataService: DataService,
    private dialog: MatDialog,
    private router: Router
  ) {}
  //=== projects
  currentProject: Project;
  projectList: Project[];

  // obs
  private currentProjSub: Subscription

  ngOnInit(): void {
    this.getProjectList();

    this.currentProjSub = this.dataService.currentProjectObs.subscribe(
      (project) => (this.currentProject = project)
    );
  }

  //=== http calls
  async getProjectList() {
    let resp = await this.httpService.httpGetWithHeader(
      GlobalConstants.HTTP_GET_PROJ_LIST_URL,
      true
    );

    if (resp.success) {
      this.projectList = resp.data.project_list;

      // set current project if not selected yet
      var currentProject = this.localStorageService.getCurrentProject();

      if (currentProject == null) currentProject = this.projectList[0];

      this.dataService.setCurrentProject(currentProject, false);
    }
  }

  async logout() {
    this.dataService.setIsLoading(true);

    let resp = await this.httpService.httpGetWithHeader(
      GlobalConstants.HTTP_LOGOUT_URL
    );

    if (resp.success) {
      // clear local storage on logout
      this.localStorageService.clearLocalStorage()

      // navigate to login page
      window.location.href = '/login';
    } else {
      this.dataService.setIsLoading(false);
    }
  }

  //=== normal funcs
  createProjectOnClick() {
    this.dialog.open(CreateProjectComponent, {disableClose: false});
  }

  projectOnClick(project: Project) {
    // set current project
    this.dataService.setCurrentProject(project, true);
    this.localStorageService.storeCurrentProject(project);

    // go to git configs if in build details
    // console.log("router = ", this.router.url[0])
    // if (this.router.url)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.currentProjSub.unsubscribe();
  }
}
