import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './services/local-storage-service';
import { GlobalConstants } from './utils/global-constants';
import { DataService } from './services/data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private dataService: DataService
  ) {}

  // global vars
  accessToken = this.localStorageService.getValueFromLocalStorage(
    GlobalConstants.LS_KEY_ACCESS_TOKEN
  );
  isLoading = false; // for loading bar + overlay

  title = 'mobile-ci';

  ngOnInit(): void {
    // get access token from local storage

    // TEMP accessToken
    // accessToken = "test"

    // if (this.accessToken == null) {
    //   // no access token - login/register
    //   this.router.navigate(['/login']);
    // } else {
    //   // got access token - go to address
    //   this.router.navigate(['/']);
    // }

    // subscribe to global obs
    this.dataService.isLoadingObs.subscribe(
      (isLoading) => (this.isLoading = isLoading)
    );
  }
}
