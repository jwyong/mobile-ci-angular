import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css'],
})
export class BuildComponent implements OnInit {
  constructor(private injector: Injector, private dataService: DataService) {
    this.dialogData = this.injector.get(MAT_DIALOG_DATA, null);
  }

  // dialog data
  dialogData;

  // observables (destroy onDestroy)
  private currentProjSub: Subscription;

  currentProjectId: string;
  currentProjectPlatform: string;

  ngOnInit(): void {
    this.currentProjSub = this.dataService.currentProjectObs.subscribe(
      (project: Project) => {
        if (project != null) {
          this.currentProjectId = project.project_id;
          this.currentProjectPlatform = project.platform;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.currentProjSub.unsubscribe();
  }
}
