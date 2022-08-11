import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalConstants } from '../utils/global-constants';
import { StringsEng } from '../utils/strings-eng';
import { LocalStorageService } from '../services/local-storage-service';

@Injectable()
export class HttpService {
  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient,
    private router: Router,
    private _snackbar: MatSnackBar
  ) {}

  //=== NO ACCESS TOKEN
  public async httpPostNoHeader(
    endpoint: string,
    body: any,
    shouldHideErrors?: boolean
  ): Promise<HttpResp> {
    var fullURL = GlobalConstants.HTTP_BASE_URL + endpoint;

    let json = JSON.stringify(body);

    console.log('$endpoint: json', json);

    var resp;

    // do sync http post
    await this.http
      .post<any>(fullURL, json)
      .toPromise()
      .then((data) => {
        resp = {
          success: true,
          data: data,
          error: null,
        };
      })
      .catch((error) => {
        resp = {
          success: false,
          data: null,
          error: error,
        };
      });

    console.log('resp', resp);

    this.handleHttpErrorResp(resp, shouldHideErrors);

    return resp;
  }

  //=== WITH ACCESS TOKEN
  public async httpGetWithHeader(
    endpoint: string,
    shouldHideErrors?: boolean,
    baseUrl?: string,
    isPlainText?: boolean
  ): Promise<HttpResp> {
    var fullURL =
      (baseUrl ? baseUrl : GlobalConstants.HTTP_BASE_URL) + endpoint;
    var resp;

    var httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + this.getAccessToken(),
    });

    // append plain text header if needed
    // if (isPlainText == true)
    //   httpHeaders.append('Content-Type', 'text/plain; charset=utf-8');

    // do sync http post
    await this.http
      .get(fullURL, {
        headers: httpHeaders,
        responseType: isPlainText == true ? 'text' : null,
      })
      .toPromise()
      .then((data) => {
        resp = {
          success: true,
          data: data,
          error: null,
        };
      })
      .catch((error) => {
        resp = {
          success: false,
          data: null,
          error: error,
        };
      });

    console.log(`httpGetWithHeader ${endpoint} resp`, resp);

    this.handleHttpErrorResp(resp, shouldHideErrors);

    return resp;
  }

  public async httpPostWithHeader(
    endpoint: string,
    body: any,
    shouldHideErrors?: boolean
  ): Promise<HttpResp> {
    var fullURL = GlobalConstants.HTTP_BASE_URL + endpoint;

    let json = JSON.stringify(body);

    console.log('json', json);

    var resp;

    var httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + this.getAccessToken(),
    });

    // do sync http post
    await this.http
      .post<any>(fullURL, json, { headers: httpHeaders })
      .toPromise()
      .then((data) => {
        resp = {
          success: true,
          data: data,
          error: null,
        };
      })
      .catch((error) => {
        resp = {
          success: false,
          data: null,
          error: error,
        };
      });

    console.log('resp', resp);

    this.handleHttpErrorResp(resp, shouldHideErrors);

    return resp;
  }

  public async httpPostFormDataWithHeader(
    endpoint: string,
    formData: FormData,
    shouldHideErrors?: boolean
  ): Promise<HttpResp> {
    var fullURL = GlobalConstants.HTTP_BASE_URL + endpoint;

    // log form data for chrome and firefox dev
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    var resp;

    var httpHeaders = new HttpHeaders({
      // 'Content-Type': undefined,
      Authorization: 'Bearer ' + this.getAccessToken(),
    });

    // do sync http post
    await this.http
      .post<any>(fullURL, formData, { headers: httpHeaders })
      .toPromise()
      .then((data) => {
        resp = {
          success: true,
          data: data,
          error: null,
        };
      })
      .catch((error) => {
        resp = {
          success: false,
          data: null,
          error: error,
        };
      });

    console.log('resp', resp);

    this.handleHttpErrorResp(resp, shouldHideErrors);

    return resp;
  }

  getAccessToken(): string {
    // add access token to header
    var accessToken = this.localStorageService.getValueFromLocalStorage(
      GlobalConstants.LS_KEY_ACCESS_TOKEN
    );
    if (accessToken == null) {
      this.router.navigate(['/login']);
    }

    return accessToken;
  }

  handleHttpErrorResp(resp, shouldHideErrors: boolean) {
    // handle errors
    if (resp.success != true) {
      let errorStatusCode = resp.error.status;

      // show error snackbar first
      if (errorStatusCode == 400) {
        // 400 - common errors, use error msg
        if (shouldHideErrors != true)
          this.showHttpSnackbar(StringsEng.getString(resp.error.error.message));
      } else {
        // others - generic errors, use error status code
        if (shouldHideErrors != true)
          this.showHttpSnackbar(
            StringsEng.getString('E_HTTP_' + resp.error.status)
          );
      }

      // handle any operations other than snackbar
      switch (resp.error.status) {
        case 401: // unauthorized (redirect to login page)
          // clear local storage (simulate logout)
          this.localStorageService.clearLocalStorage();

          window.location.href = '/';
          break;

        // case 404: // API not found
        //   break;

        // case 400: // common errors
        //   break;

        // case 500: // internal server error
        //   break;
      }
    }
  }

  showHttpSnackbar(message: string) {
    this._snackbar.open(message, null, {
      duration: GlobalConstants.SNACKBAR_DURATION_MID,
    });
  }
}

// data model for response
export interface HttpResp {
  success: boolean;
  data: any;
  error: HttpErrorResponse;
}
