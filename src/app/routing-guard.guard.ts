import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from './services/local-storage-service';
import { GlobalConstants } from './utils/global-constants';

@Injectable({
  providedIn: 'root'
})
export class RoutingGuardGuard implements CanActivate {

  constructor(public localStorageService: LocalStorageService) {}
  accessToken: string

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.accessToken = this.localStorageService.getValueFromLocalStorage(
        GlobalConstants.LS_KEY_ACCESS_TOKEN
      );

    return this.accessToken != null;
  }
  
}
