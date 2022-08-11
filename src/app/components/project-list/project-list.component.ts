// import { Component, OnInit } from '@angular/core';
// import { HttpService } from 'src/app/services/http-service';
// import { GlobalConstants } from 'src/app/utils/global-constants';
// import { DataService } from 'src/app/services/data-service';
// import { Project } from 'src/app/models/project';
// import { LocalStorageService } from 'src/app/services/local-storage-service';

// @Component({
//   selector: 'app-project-list',
//   templateUrl: './project-list.component.html',
//   styleUrls: ['./project-list.component.css'],
// })
// export class ProjectListComponent implements OnInit {
//   constructor(
//     private httpService: HttpService,
//     private dataService: DataService,
//     private localStorageService: LocalStorageService,
//   ) {}

//   projectList: Project[];

//   ngOnInit(): void {
//     this.getProjectList();
//   }

//   //=== http calls
//   async getProjectList() {
//     let resp = await this.httpService.httpGetWithHeader(
//       GlobalConstants.HTTP_GET_PROJ_LIST_URL
//     );

//     if (resp.success) {
//       this.projectList = resp.data.project_list;

//       // set current project if not selected yet
//       this.dataService.setCurrentProject(this.projectList[0], false);
//     }
//   }

//   // project on click
//   projectOnClick(project: Project) {    
//     // set current project
//     this.dataService.setCurrentProject(project, true)
//     this.localStorageService.storeCurrentProject(project)

//     // reload
//     console.log(project);
    
//   }
// }
