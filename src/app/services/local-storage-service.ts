import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { GlobalConstants } from 'src/app/utils/global-constants';
import { Project } from 'src/app/models/project';

@Injectable()
export class LocalStorageService {
  anotherTodolist = [];
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  //=== global funcs
  public getValueFromLocalStorage(localStorageKey: string): any {
    return this.storage.get(localStorageKey);
  }

  public storeValueToLocalStorage(localStorageKey: string, stringValue: any) {
    this.storage.set(localStorageKey, stringValue);
  }

  public clearLocalStorage() {
    this.storage.clear()
  }

  //=== get specific keys
  public getAccessToken(): string {
    return this.storage.get(GlobalConstants.LS_KEY_ACCESS_TOKEN);
  }

  public getCurrentProject(): Project {
    return this.storage.get(GlobalConstants.LS_KEY_CURRENT_PROJECT);
  }

  //=== set specific keys
  public storeCurrentProject(currentProject: Project) {
    this.storage.set(GlobalConstants.LS_KEY_CURRENT_PROJECT, currentProject);
  }
}
