import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../models/project';

@Injectable()
export class DataService {
  constructor() {}

  //=== app component
  // for loading animation
  private isLoadingSource = new BehaviorSubject(false);
  isLoadingObs = this.isLoadingSource.asObservable();
  setIsLoading(isLoading: boolean) {
    this.isLoadingSource.next(isLoading);
  }

  //=== home component
  // current selected project id
  private currentProjectSource = new BehaviorSubject(null);
  currentProjectObs = this.currentProjectSource.asObservable();
  setCurrentProject(project: Project, shouldOverwrite: boolean) {
    // overwrite current project if need
    if (shouldOverwrite) this.currentProjectSource.next(project);
    else if (this.currentProjectSource.getValue() == null)
      this.currentProjectSource.next(project);
  }
  getCurrentProject(): Project {
    return this.currentProjectSource.getValue();
  }
}
