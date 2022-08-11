(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_registration_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/registration/login/login.component */ "./src/app/components/registration/login/login.component.ts");
/* harmony import */ var _components_configs_git_configs_git_configs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/configs/git-configs/git-configs.component */ "./src/app/components/configs/git-configs/git-configs.component.ts");
/* harmony import */ var _components_configs_static_configs_static_configs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/configs/static-configs/static-configs.component */ "./src/app/components/configs/static-configs/static-configs.component.ts");
/* harmony import */ var _components_environments_env_list_env_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/environments/env-list/env-list.component */ "./src/app/components/environments/env-list/env-list.component.ts");
/* harmony import */ var _components_build_build_history_build_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/build/build-history/build-history.component */ "./src/app/components/build/build-history/build-history.component.ts");
/* harmony import */ var _components_build_build_detail_build_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/build/build-detail/build-detail.component */ "./src/app/components/build/build-detail/build-detail.component.ts");
/* harmony import */ var _components_build_build_build_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/build/build/build.component */ "./src/app/components/build/build/build.component.ts");


// import pages for routing









const routes = [
    {
        path: 'login',
        component: _components_registration_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        data: { title: 'Login or Sign up' },
    },
    {
        path: '',
        component: _components_build_build_history_build_history_component__WEBPACK_IMPORTED_MODULE_6__["BuildHistoryComponent"],
        data: { title: 'Simplifying CI' },
    },
    {
        path: 'git-configs',
        component: _components_configs_git_configs_git_configs_component__WEBPACK_IMPORTED_MODULE_3__["GitConfigsComponent"],
        data: { title: 'Git Configs' },
    },
    {
        path: 'static-configs',
        component: _components_configs_static_configs_static_configs_component__WEBPACK_IMPORTED_MODULE_4__["StaticConfigsComponent"],
        data: { title: 'Project Static Configs' },
    },
    {
        path: 'environments',
        component: _components_environments_env_list_env_list_component__WEBPACK_IMPORTED_MODULE_5__["EnvListComponent"],
        data: { title: 'Project Environments' },
    },
    {
        path: 'build-template',
        component: _components_build_build_build_component__WEBPACK_IMPORTED_MODULE_8__["BuildComponent"],
        data: { title: 'Build Template' },
    },
    {
        path: 'build-history',
        component: _components_build_build_history_build_history_component__WEBPACK_IMPORTED_MODULE_6__["BuildHistoryComponent"],
        data: { title: 'Build History' },
    },
    {
        path: 'build-detail/:build_id',
        component: _components_build_build_detail_build_detail_component__WEBPACK_IMPORTED_MODULE_7__["BuildDetailComponent"],
        data: { title: 'Build Details' },
    },
    { path: '**', redirectTo: '/' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/global-constants */ "./src/app/utils/global-constants.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/local-storage-service */ "./src/app/services/local-storage-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/data-service */ "./src/app/services/data-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _components_registration_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/registration/login/login.component */ "./src/app/components/registration/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");










function AppComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 3);
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
} }
function AppComponent_app_login_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login");
} }
function AppComponent_app_home_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
} }
class AppComponent {
    constructor(localStorageService, router, dataService) {
        this.localStorageService = localStorageService;
        this.router = router;
        this.dataService = dataService;
        // global vars
        this.accessToken = this.localStorageService.getValueFromLocalStorage(_utils_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].LS_KEY_ACCESS_TOKEN);
        this.isLoading = false; // for loading bar + overlay
        this.title = 'mobile-ci';
    }
    ngOnInit() {
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
        this.dataService.isLoadingObs.subscribe((isLoading) => (this.isLoading = isLoading));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 4, consts: [["class", "loading-bar", "mode", "indeterminate", 4, "ngIf"], ["class", "overlay", 4, "ngIf"], [4, "ngIf"], ["mode", "indeterminate", 1, "loading-bar"], [1, "overlay"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_login_2_Template, 1, 0, "app-login", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_home_3_Template, 1, 0, "app-home", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accessToken == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accessToken != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"], _components_registration_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/__ivy_ngcc__/fesm2015/ngx-webstorage-service.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/local-storage-service */ "./src/app/services/local-storage-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/data-service */ "./src/app/services/data-service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_registration_login_login_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/registration/login/login.component */ "./src/app/components/registration/login/login.component.ts");
/* harmony import */ var _components_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/create-project/create-project.component */ "./src/app/components/create-project/create-project.component.ts");
/* harmony import */ var _components_configs_static_configs_static_configs_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/configs/static-configs/static-configs.component */ "./src/app/components/configs/static-configs/static-configs.component.ts");
/* harmony import */ var _components_configs_git_configs_git_configs_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/configs/git-configs/git-configs.component */ "./src/app/components/configs/git-configs/git-configs.component.ts");
/* harmony import */ var _components_environments_env_list_env_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/environments/env-list/env-list.component */ "./src/app/components/environments/env-list/env-list.component.ts");
/* harmony import */ var _components_environments_env_details_env_details_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/environments/env-details/env-details.component */ "./src/app/components/environments/env-details/env-details.component.ts");
/* harmony import */ var _components_build_build_history_build_history_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/build/build-history/build-history.component */ "./src/app/components/build/build-history/build-history.component.ts");
/* harmony import */ var _components_build_build_template_build_template_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/build/build-template/build-template.component */ "./src/app/components/build/build-template/build-template.component.ts");
/* harmony import */ var _components_build_build_build_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/build/build/build.component */ "./src/app/components/build/build/build.component.ts");
/* harmony import */ var _components_build_build_detail_build_detail_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/build/build-detail/build-detail.component */ "./src/app/components/build/build-detail/build-detail.component.ts");





// UI


















// services






// main landing page - route to respective pages based on session in localStorage

// pages












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_29__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_25__["LocalStorageService"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_27__["DataService"],
        _services_http_service__WEBPACK_IMPORTED_MODULE_28__["HttpService"]
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_24__["StorageServiceModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__["ClipboardModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_29__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_30__["HomeComponent"],
        _components_registration_login_login_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponent"],
        _components_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_32__["CreateProjectComponent"],
        _components_configs_static_configs_static_configs_component__WEBPACK_IMPORTED_MODULE_33__["StaticConfigsComponent"],
        _components_configs_git_configs_git_configs_component__WEBPACK_IMPORTED_MODULE_34__["GitConfigsComponent"],
        _components_environments_env_list_env_list_component__WEBPACK_IMPORTED_MODULE_35__["EnvListComponent"],
        _components_environments_env_details_env_details_component__WEBPACK_IMPORTED_MODULE_36__["EnvDetailsComponent"],
        _components_build_build_history_build_history_component__WEBPACK_IMPORTED_MODULE_37__["BuildHistoryComponent"],
        _components_build_build_template_build_template_component__WEBPACK_IMPORTED_MODULE_38__["BuildTemplateComponent"],
        _components_build_build_build_component__WEBPACK_IMPORTED_MODULE_39__["BuildComponent"],
        _components_build_build_detail_build_detail_component__WEBPACK_IMPORTED_MODULE_40__["BuildDetailComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_24__["StorageServiceModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__["ClipboardModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_29__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_30__["HomeComponent"],
                    _components_registration_login_login_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponent"],
                    _components_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_32__["CreateProjectComponent"],
                    _components_configs_static_configs_static_configs_component__WEBPACK_IMPORTED_MODULE_33__["StaticConfigsComponent"],
                    _components_configs_git_configs_git_configs_component__WEBPACK_IMPORTED_MODULE_34__["GitConfigsComponent"],
                    _components_environments_env_list_env_list_component__WEBPACK_IMPORTED_MODULE_35__["EnvListComponent"],
                    _components_environments_env_details_env_details_component__WEBPACK_IMPORTED_MODULE_36__["EnvDetailsComponent"],
                    _components_build_build_history_build_history_component__WEBPACK_IMPORTED_MODULE_37__["BuildHistoryComponent"],
                    _components_build_build_template_build_template_component__WEBPACK_IMPORTED_MODULE_38__["BuildTemplateComponent"],
                    _components_build_build_build_component__WEBPACK_IMPORTED_MODULE_39__["BuildComponent"],
                    _components_build_build_detail_build_detail_component__WEBPACK_IMPORTED_MODULE_40__["BuildDetailComponent"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_24__["StorageServiceModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__["ClipboardModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"]
                ],
                providers: [
                    _services_local_storage_service__WEBPACK_IMPORTED_MODULE_25__["LocalStorageService"],
                    _services_data_service__WEBPACK_IMPORTED_MODULE_27__["DataService"],
                    _services_http_service__WEBPACK_IMPORTED_MODULE_28__["HttpService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_29__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/build/build-detail/build-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/build/build-detail/build-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: BuildDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildDetailComponent", function() { return BuildDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/global-constants */ "./src/app/utils/global-constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/strings-eng */ "./src/app/utils/strings-eng.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-service */ "./src/app/services/data-service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");















function BuildDetailComponent_div_0_tr_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Firebase Distribution Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.buildDetails.firebase_distribution_group);
} }
function BuildDetailComponent_div_0_span_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.consoleOutput);
} }
function BuildDetailComponent_div_0_label_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Loading Console... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BuildDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Build Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuildDetailComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.rebuildOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Rebuild ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuildDetailComponent_div_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.cancelBuildOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Cancel Build ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Build Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Project Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Environment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Testflight Enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "mat-slide-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Unit Test Enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "mat-slide-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Enterprise Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "mat-slide-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Git Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Firebase Adhoc Deployment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "mat-slide-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, BuildDetailComponent_div_0_tr_75_Template, 5, 1, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Release Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "If \"Firebase Adhoc Deployment\" option was enabled for this build, the .ipa file will be distributed to the specified Firebase distribution group via Firebase App Distribution, with release notes as shown above.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Build Console Output");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, BuildDetailComponent_div_0_span_87_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, BuildDetailComponent_div_0_label_88_Template, 3, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Details of this build (#", ctx_r0.buildDetails.build_no, "), including build console output which is updated in real-time. The build status will be updated to \"Success\" once done.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.isStatusPendingBuilding(ctx_r0.buildDetails));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.isStatusPendingBuilding(ctx_r0.buildDetails));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" #", ctx_r0.buildDetails.build_no, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getBuildDuration(ctx_r0.buildDetails));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ml-4 text-", ctx_r0.getStatusColour(ctx_r0.buildDetails), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getStatusIcon(ctx_r0.buildDetails), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ml-1 text-", ctx_r0.getStatusColour(ctx_r0.buildDetails), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getStatusText(ctx_r0.buildDetails), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currentProject.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.buildDetails.scheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.buildDetails.environment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.buildDetails.testflight_option == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.buildDetails.test_option == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.buildDetails.enterprise_option == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.buildDetails.branch);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.buildDetails.adhoc_option == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.buildDetails.adhoc_option == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.buildDetails.release_note);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.consoleOutput != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.shouldShowConsoleLoading());
} }
class BuildDetailComponent {
    constructor(dataService, httpService, _snackbar, route) {
        this.dataService = dataService;
        this.httpService = httpService;
        this._snackbar = _snackbar;
        this.route = route;
        this.buildStatusBS = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.buildStatusObs = this.buildStatusBS.asObservable();
        // polling interval
        this.pollingIntervalMillis = 5000;
    }
    setBuildStatus(buildStatus) {
        this.buildStatusBS.next(buildStatus);
    }
    ngOnInit() {
        this.routeSub = this.route.paramMap.subscribe((params) => {
            this.buildId = params.get('build_id');
            // setup observer for build status
            this.buildStatusSub = this.buildStatusObs.subscribe((buildStatus) => {
                // only check if build status has value
                if (buildStatus == null || buildStatus == '')
                    return;
                // cancel all intervals if status changed to fail/success
                if (!this.shouldPollBasedOnStatus()) {
                    this.stopAllPolling();
                }
            });
            // start polling for build details first
            this.startBuildDetailsPolling();
        });
        this.currentProjSub = this.dataService.currentProjectObs.subscribe((project) => {
            if (project != null) {
                this.currentProject = project;
            }
        });
    }
    //=== UI funcs
    getStatusText(item) {
        switch (item.status) {
            case 'building': // primary blue
                return 'Building...';
            case 'pending': // orange
                return 'Build pending';
            case 'success': // green
                return 'Build succeeded!';
            case 'failed': // red
                return 'Build failed';
        }
    }
    getStatusColour(item) {
        switch (item.status.toLowerCase()) {
            case 'building': // primary blue
                return 'primary';
            case 'pending': // orange
                return 'warning';
            case 'success': // green
                return 'success';
            case 'failed': // red
                return 'danger';
        }
    }
    getStatusIcon(item) {
        switch (item.status.toLowerCase()) {
            case 'building': // primary blue
                return 'cached';
            case 'pending': // orange
                return 'history';
            case 'success': // green
                return 'check_circle_outline';
            case 'failed': // red
                return 'cancel';
        }
    }
    isStatusPendingBuilding(item) {
        switch (item.status.toLowerCase()) {
            case 'pending':
            case 'building':
                return true;
            default:
                return false;
        }
    }
    getBuildDuration(item) {
        let minutes = item.build_minutes;
        var hrStr = '00';
        var minStr = '00';
        if (minutes == null || minutes == 0) {
        }
        else {
            let hr = Math.floor(minutes / 60);
            let min = minutes - hr * 60;
            hrStr = hr.toString();
            minStr = min.toString();
            if (hrStr.length < 2)
                hrStr = `0${hrStr}`;
            if (minStr.length < 2)
                minStr = `0${minStr}`;
        }
        return `${hrStr} hr : ${minStr} min`;
    }
    shouldShowConsoleLoading() {
        return (this.consoleOutput == null ||
            this.buildDetails.status == 'pending' ||
            this.buildDetails.status == 'building');
    }
    //=== http for cancel/rebuild
    rebuildOnClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataService.setIsLoading(true);
            // build form body json
            let formBody = {
                project_id: this.currentProject.project_id,
                build_id: this.buildDetails.build_id,
            };
            var resp;
            if (this.currentProject.platform == 'ios') {
                resp = yield this.httpService.httpPostWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_REBUILD_URL, formBody);
            }
            else {
                // android
            }
            this.dataService.setIsLoading(false);
            if (resp.success) {
                // go to build detail page if resp success
                window.location.href = `/build-detail/${resp.data.build_id}`;
            }
        });
    }
    cancelBuildOnClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (confirm(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_4__["StringsEng"].CANCEL_BUILD_CONFIRM(this.buildDetails.build_no))) {
                this.dataService.setIsLoading(true);
                // build form body json
                let formBody = {
                    platform: this.currentProject.platform,
                    build_id: this.buildDetails.build_id,
                };
                var resp;
                if (this.currentProject.platform == 'ios') {
                    resp = yield this.httpService.httpPostWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_STOP_BUILD_URL, formBody);
                }
                else {
                    // android
                }
                this.dataService.setIsLoading(false);
                if (resp.success) {
                    this._snackbar.open(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_4__["StringsEng"].CANCEL_BUILD_SUCCESS(this.buildDetails.build_no), null, {
                        duration: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].SNACKBAR_DURATION_LONG,
                    });
                    // refresh details
                    this.getBuildDetails();
                }
            }
        });
    }
    //=== http funcs for get/polling
    getBuildDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var getBuildDetailsURL = src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_GET_BUILD_DETAILS_URL(this.buildId);
            let resp = yield this.httpService.httpGetWithHeader(getBuildDetailsURL, true);
            if (resp.success) {
                this.buildDetails = resp.data;
                // update build status obs
                this.setBuildStatus(this.buildDetails.status);
                // start polling for jenkins build number when successfully get build details
                this.startJenkinsBuildNoPolling();
            }
            else {
                // stop polling on failure (TODO: improve based on error codes)
                // this.stopBuildDetailsInterval();
            }
        });
    }
    // when jenkins build begins, build number will be 0. must keep polling till non-zero,
    // then only start to get build console
    getJenkinsBuildNumber() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var getJenkinsBuildNumberURL = src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_GET_JENKINS_BUILD_NUMBER_URL(this.buildId);
            let resp = yield this.httpService.httpGetWithHeader(getJenkinsBuildNumberURL, true);
            if (resp.success) {
                this.jenkinsBuildNo = resp.data.build_no;
                // start polling for console only if build number is non-zero
                if (this.jenkinsBuildNo != 0)
                    this.startConsoleOutpuPolling();
            }
            else {
                // this.stopJenkinsBuildNoInterval();
            }
        });
    }
    getConsoleOutput() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var getConsoleOutputURL = src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_GET_CONSOLE_OUTPUT_URL(this.buildId, 'ios', this.jenkinsBuildNo.toString());
            // get console using jenkins base url
            let resp = yield this.httpService.httpGetWithHeader(getConsoleOutputURL, true, src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_BASE_URL, true);
            if (resp.success) {
                this.consoleOutput = resp.data;
            }
            else {
                // this.stopJenkinsBuildNoInterval();
            }
        });
    }
    //=== polling funcs
    // should ONLY poll if status is building OR pending
    shouldPollBasedOnStatus() {
        return (this.buildDetails.status == 'building' ||
            this.buildDetails.status == 'pending');
    }
    //=== interval funcs
    // poll build details for status and duration
    startBuildDetailsPolling() {
        // create timer only once
        if (this.buildDetailsTimer != undefined)
            return;
        // get details first time
        this.getBuildDetails();
        console.log('startBuildDetailsInterval');
        this.buildDetailsTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.pollingIntervalMillis).subscribe((val) => {
            console.log('startBuildDetailsInterval polling');
            // don't continue polling if status changes to success/failure
            if (this.shouldPollBasedOnStatus)
                this.getBuildDetails();
            else
                this.stopBuildDetailsPolling();
        });
    }
    stopBuildDetailsPolling() {
        if (this.buildDetailsTimer != undefined)
            this.buildDetailsTimer.unsubscribe();
    }
    // poll jenkins build no until non-zero
    startJenkinsBuildNoPolling() {
        // create timer only once
        if (this.jenkinsBuildNoTimer != undefined)
            return;
        // get first time
        this.getJenkinsBuildNumber();
        // don't proceed if status changed
        if (!this.shouldPollBasedOnStatus())
            return;
        console.log('startJenkinsBuildNoInterval, jenkins buildno = ', this.jenkinsBuildNo);
        this.jenkinsBuildNoTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.pollingIntervalMillis).subscribe((val) => {
            console.log('startJenkinsBuildNoInterval polling, jenkinsNo = ', this.jenkinsBuildNo);
            // only poll if should
            if (this.shouldPollBasedOnStatus())
                if (this.jenkinsBuildNo == 0)
                    // only continue polling if build number is zero (stop when non-zero)
                    this.getJenkinsBuildNumber();
                else {
                    // if jenkins build no is non-zero, stop jenkins inverval and start polling console output
                    this.stopJenkinsBuildNoPolling();
                }
            // else stop polling
            else
                this.stopJenkinsBuildNoPolling();
        });
    }
    stopJenkinsBuildNoPolling() {
        if (this.jenkinsBuildNoTimer != undefined)
            this.jenkinsBuildNoTimer.unsubscribe();
    }
    startConsoleOutpuPolling() {
        // create timer only once
        if (this.consoleOutputTimer != undefined)
            return;
        // get first time
        this.getConsoleOutput();
        // don't proceed if status xxx
        if (!this.shouldPollBasedOnStatus())
            return;
        console.log('startConsoleOutpuPolling');
        this.consoleOutputTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.pollingIntervalMillis).subscribe((val) => {
            console.log('startConsoleOutpuPolling polling');
            if (this.shouldPollBasedOnStatus())
                this.getConsoleOutput();
            else
                this.stopConsoleOutputPolling();
        });
    }
    stopConsoleOutputPolling() {
        if (this.consoleOutputTimer != undefined)
            this.consoleOutputTimer.unsubscribe();
    }
    stopAllPolling() {
        this.stopBuildDetailsPolling();
        this.stopJenkinsBuildNoPolling();
        this.stopConsoleOutputPolling();
    }
    ngOnDestroy() {
        this.currentProjSub.unsubscribe();
        this.routeSub.unsubscribe();
        this.buildStatusSub.unsubscribe();
        this.stopAllPolling();
    }
}
BuildDetailComponent.ɵfac = function BuildDetailComponent_Factory(t) { return new (t || BuildDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
BuildDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BuildDetailComponent, selectors: [["app-build-detail"]], decls: 1, vars: 1, consts: [["class", "row p-3", 4, "ngIf"], [1, "row", "p-3"], [1, "col", "pb-3"], [1, "d-flex"], ["type", "button", "aria-label", "Rebuild", 1, "btn", "btn-success", "ml-auto", 3, "disabled", "click"], ["type", "button", "aria-label", "Cancel Build", 1, "btn", "btn-danger", "ml-2", 3, "disabled", "click"], [1, "mt-4"], [1, "p-4", "mb-4"], [1, "table", "table-fit-th", "table-borderless"], ["scope", "row", 1, "no-wrap", "align-middle"], [1, "align-middle"], [1, "d-flex", "align-items-center"], [1, "ml-auto"], [1, "ml-1"], ["scope", "row", 1, "no-wrap"], [1, "table", "table-fit", "table-borderless"], ["disabled", "", 1, "ml-2", 3, "checked"], [4, "ngIf"], ["type", "text", "aria-describedby", "releaseNotesNote", "readonly", "", 1, "form-control"], ["id", "releaseNotesNote", 1, "form-text", "text-muted"], [1, "p-4", "my-4", "bg-dark", "text-light"], ["class", "px-4", "style", "white-space: pre-line", 4, "ngIf"], ["class", "my-2 ml-auto d-flex align-items-center text-light", 4, "ngIf"], [1, "px-4", 2, "white-space", "pre-line"], [1, "my-2", "ml-auto", "d-flex", "align-items-center", "text-light"], ["diameter", "18", 1, "mr-1"]], template: function BuildDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BuildDetailComponent_div_0_Template, 89, 25, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentProject != null && ctx.buildDetails != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]], styles: ["table.table-fit[_ngcontent-%COMP%] {\n    width: auto !important;\n    table-layout: auto !important;\n}\ntable.table-fit[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table-fit[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    width: auto !important;\n}\ntable.table-fit[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.table-fit[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    width: auto !important;\n}\ntable.table-fit-th[_ngcontent-%COMP%] {\n    width: auto !important;\n    table-layout: auto !important;\n}\ntable.table-fit-th[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table-fit-th[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    width: auto !important;\n}\ntable.table-fit-th[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.table-fit-th[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n.no-wrap[_ngcontent-%COMP%] {\n    white-space: nowrap !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idWlsZC9idWlsZC1kZXRhaWwvYnVpbGQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7QUFDRDtJQUNJLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idWlsZC9idWlsZC1kZXRhaWwvYnVpbGQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgICBmaXQgdGFibGUgY29sdW1ucyB0byBjb250ZW50IHdpZHRoIChpbnN0ZWFkIG9mIGZpbGwgcGFyZW50IHdpZHRoKVxuKi9cbnRhYmxlLnRhYmxlLWZpdCB7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbnRhYmxlLnRhYmxlLWZpdCB0aGVhZCB0aCwgdGFibGUudGFibGUtZml0IHRmb290IHRoIHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxudGFibGUudGFibGUtZml0IHRib2R5IHRkLCB0YWJsZS50YWJsZS1maXQgdGZvb3QgdGQge1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlLnRhYmxlLWZpdC10aCB7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbnRhYmxlLnRhYmxlLWZpdC10aCB0aGVhZCB0aCwgdGFibGUudGFibGUtZml0LXRoIHRmb290IHRoIHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxudGFibGUudGFibGUtZml0LXRoIHRib2R5IHRkLCB0YWJsZS50YWJsZS1maXQtdGggdGZvb3QgdGQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5uby13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BuildDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-build-detail',
                templateUrl: './build-detail.component.html',
                styleUrls: ['./build-detail.component.css'],
            }]
    }], function () { return [{ type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/build/build-history/build-history.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/build/build-history/build-history.component.ts ***!
  \***************************************************************************/
/*! exports provided: BuildHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildHistoryComponent", function() { return BuildHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/global-constants */ "./src/app/utils/global-constants.ts");
/* harmony import */ var src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/strings-eng */ "./src/app/utils/strings-eng.ts");
/* harmony import */ var src_app_components_build_build_build_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/build/build/build.component */ "./src/app/components/build/build/build.component.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-service */ "./src/app/services/data-service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
















function BuildHistoryComponent_div_0_div_9_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuildHistoryComponent_div_0_div_9_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const buildHistory_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.rebuildOnClick(buildHistory_r2.build_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rebuild");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BuildHistoryComponent_div_0_div_9_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuildHistoryComponent_div_0_div_9_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const buildHistory_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.cancelBuildOnClick(buildHistory_r2.build_id, buildHistory_r2.build_no); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancel Build");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/build-detail", a1]; };
function BuildHistoryComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuildHistoryComponent_div_0_div_9_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); $event.stopPropagation(); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-menu", null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BuildHistoryComponent_div_0_div_9_a_14_Template, 2, 0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, BuildHistoryComponent_div_0_div_9_a_15_Template, 2, 0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const buildHistory_r2 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("callout callout-", ctx_r1.getStatusColour(buildHistory_r2), " cursor-pointer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, buildHistory_r2.build_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", buildHistory_r2.build_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getBuildDuration(buildHistory_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isStatusPendingBuilding(buildHistory_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isStatusPendingBuilding(buildHistory_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", buildHistory_r2.scheme, " (", buildHistory_r2.environment, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.currentProject.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](buildHistory_r2.branch);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getStatusIcon(buildHistory_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getStatusText(buildHistory_r2));
} }
const _c1 = function () { return [15]; };
function BuildHistoryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Build History");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuildHistoryComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.createNewBuildOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Create New Build ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Check your build history so far, click for more info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BuildHistoryComponent_div_0_div_9_Template, 27, 17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-paginator", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function BuildHistoryComponent_div_0_Template_mat_paginator_page_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.onPageEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.buildHistoryList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx_r0.totalCount ? ctx_r0.totalCount : 0)("pageSize", 15)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
} }
class BuildHistoryComponent {
    constructor(dataService, httpService, dialog, _snackbar, router) {
        this.dataService = dataService;
        this.httpService = httpService;
        this.dialog = dialog;
        this._snackbar = _snackbar;
        this.router = router;
        // for pagination
        this.totalCount = 0;
        this.offset = 0;
        this.buildHistoryList = [];
    }
    ngOnInit() {
        this.currentProjSub = this.dataService.currentProjectObs.subscribe((project) => {
            if (project != null) {
                this.currentProject = project;
                // get build history list
                this.getBuildHistory();
            }
        });
    }
    // onResume
    onFocus(event) {
        this.getBuildHistory();
    }
    //=== UI funcs
    getStatusText(item) {
        switch (item.status) {
            case 'building': // primary blue
                return 'Building...';
            case 'pending': // orange
                return 'Build pending';
            case 'success': // green
                return 'Build succeeded!';
            case 'failed': // red
                return 'Build failed';
            case 'stop':
                return 'Build cancelled';
        }
    }
    getStatusColour(item) {
        switch (item.status.toLowerCase()) {
            case 'building': // primary blue
                return 'primary';
            case 'pending': // orange
                return 'warning';
            case 'success': // green
                return 'success';
            case 'failed': // red
                return 'danger';
            case 'stop': // grey
                return 'muted';
        }
    }
    getStatusIcon(item) {
        switch (item.status.toLowerCase()) {
            case 'building': // primary blue
                return 'cached';
            case 'pending': // orange
                return 'history';
            case 'success': // green
                return 'check_circle_outline';
            case 'failed': // red
                return 'cancel';
        }
    }
    isStatusPendingBuilding(item) {
        switch (item.status.toLowerCase()) {
            case 'pending':
            case 'building':
                return true;
            default:
                return false;
        }
    }
    getBuildDuration(item) {
        let minutes = item.build_minutes;
        var hrStr = '00';
        var minStr = '00';
        if (minutes == null || minutes == 0) {
        }
        else {
            let hr = Math.floor(minutes / 60);
            let min = minutes - hr * 60;
            hrStr = hr.toString();
            minStr = min.toString();
            if (hrStr.length < 2)
                hrStr = `0${hrStr}`;
            if (minStr.length < 2)
                minStr = `0${minStr}`;
        }
        return `${hrStr} hr : ${minStr} min`;
    }
    //=== onclick funcs
    goToBuildDetails(event, buildId) {
        event.preventDefault();
        event.stopPropagation();
        this.router.navigate([`/build-detail/${buildId}`]);
    }
    //=== paginator funcs
    onPageEvent(event) {
        this.dataService.setIsLoading(true);
        // update vars for paginator
        this.offset = event.pageIndex * 15;
        // get history list
        this.getBuildHistory();
    }
    //=== http funcs
    getBuildHistory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var getBuildHistoryURL = src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_GET_BUILD_HISTORY_URL(this.currentProject.project_id, this.offset);
            let resp = yield this.httpService.httpGetWithHeader(getBuildHistoryURL, true);
            this.dataService.setIsLoading(false);
            if (resp.success) {
                // update total count on get list
                this.totalCount = resp.data['total_count'];
                this.buildHistoryList = resp.data['build_list'];
            }
            else {
            }
        });
    }
    createNewBuildOnClick() {
        this.dialog.open(src_app_components_build_build_build_component__WEBPACK_IMPORTED_MODULE_4__["BuildComponent"], {
            data: {
                buildType: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].BUILD_TYPE_NEW_BUILD,
            },
        });
    }
    rebuildOnClick(buildId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataService.setIsLoading(true);
            // build form body json
            let formBody = {
                project_id: this.currentProject.project_id,
                build_id: buildId,
            };
            var resp;
            if (this.currentProject.platform == 'ios') {
                resp = yield this.httpService.httpPostWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_REBUILD_URL, formBody);
            }
            else {
                // android
            }
            this.dataService.setIsLoading(false);
            if (resp.success) {
                // go to build detail page if resp success
                window.location.href = `/build-detail/${resp.data.build_id}`;
            }
        });
    }
    cancelBuildOnClick(buildId, buildNumber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataService.setIsLoading(true);
            // build form body json
            let formBody = {
                platform: this.currentProject.platform,
                build_id: buildId,
            };
            var resp;
            if (this.currentProject.platform == 'ios') {
                resp = yield this.httpService.httpPostWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_STOP_BUILD_URL, formBody);
            }
            else {
                // android
            }
            this.dataService.setIsLoading(false);
            if (resp.success) {
                this._snackbar.open(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].CANCEL_BUILD_SUCCESS(buildNumber), null, {
                    duration: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].SNACKBAR_DURATION_LONG,
                });
                // refresh history list
                this.getBuildHistory();
            }
        });
    }
    //=== interval funcs
    // private startBuildHistoryPolling() {
    //   // create timer only once
    //   if (this.buildDetailsTimer != undefined) return;
    //   // get details first time
    //   this.getBuildDetails();
    //   console.log('startBuildDetailsInterval');
    //   this.buildDetailsTimer = interval(this.pollingIntervalMillis).subscribe(
    //     (val) => {
    //       console.log('startBuildDetailsInterval polling');
    //       // don't continue polling if status changes to success/failure
    //       if (this.shouldPollBasedOnStatus) this.getBuildDetails();
    //       else this.stopBuildDetailsPolling();
    //     }
    //   );
    // }
    ngOnDestroy() {
        this.currentProjSub.unsubscribe();
    }
}
BuildHistoryComponent.ɵfac = function BuildHistoryComponent_Factory(t) { return new (t || BuildHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
BuildHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BuildHistoryComponent, selectors: [["app-build-history"]], hostBindings: function BuildHistoryComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function BuildHistoryComponent_focus_HostBindingHandler($event) { return ctx.onFocus($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 1, vars: 1, consts: [["class", "row p-3", 4, "ngIf"], [1, "row", "p-3"], [1, "col", "pb-3"], [1, "d-flex"], ["type", "button", "aria-label", "Create project", 1, "btn", "btn-primary", "ml-auto", 3, "click"], [3, "class", 4, "ngFor", "ngForOf"], [1, "mb-4", 3, "length", "pageSize", "pageSizeOptions", "page"], [1, "flex-column", 3, "routerLink"], [1, "d-flex", "align-items-center"], [1, "ml-auto"], [1, "ml-1"], ["mat-icon-button", "", "aria-label", "Example icon button with a vertical three dot icon", 1, "ml-2", 3, "matMenuTriggerFor", "click"], ["menuBuildMoreBtn", "matMenu"], ["class", "dropdown-item cursor-pointer", 3, "click", 4, "ngIf"], [1, "mt-2"], [1, "callout-status-icon", "ml-auto"], [1, "dropdown-item", "cursor-pointer", 3, "click"]], template: function BuildHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BuildHistoryComponent_div_0_Template, 11, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentProject != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["_MatMenu"]], styles: [".callout[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin: 20px 0;\n  border: 1px solid #eee;\n  border-left-width: 5px;\n  border-radius: 3px;\n  background-color: white;\n}\n.callout[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.callout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.callout[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n.callout[_ngcontent-%COMP%]    + .bs-callout[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n.callout-default[_ngcontent-%COMP%] {\n  border-left-color: #777;\n}\n.callout-default[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .callout-default[_ngcontent-%COMP%]   .callout-status-icon[_ngcontent-%COMP%] {\n  color: #777;\n}\n.callout-primary[_ngcontent-%COMP%] {\n  border-left-color: #428bca;\n}\n.callout-primary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .callout-primary[_ngcontent-%COMP%]   .callout-status-icon[_ngcontent-%COMP%] {\n  color: #428bca;\n}\n.callout-success[_ngcontent-%COMP%] {\n  border-left-color: #5cb85c;\n}\n.callout-success[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .callout-success[_ngcontent-%COMP%]   .callout-status-icon[_ngcontent-%COMP%] {\n  color: #5cb85c;\n}\n.callout-danger[_ngcontent-%COMP%] {\n  border-left-color: #d9534f;\n}\n.callout-danger[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .callout-danger[_ngcontent-%COMP%]   .callout-status-icon[_ngcontent-%COMP%] {\n  color: #d9534f;\n}\n.callout-warning[_ngcontent-%COMP%] {\n  border-left-color: #f0ad4e;\n}\n.callout-warning[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .callout-warning[_ngcontent-%COMP%]   .callout-status-icon[_ngcontent-%COMP%] {\n  color: #f0ad4e;\n}\n.callout-info[_ngcontent-%COMP%] {\n  border-left-color: #5bc0de;\n}\n.callout-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .callout-info[_ngcontent-%COMP%]   .callout-status-icon[_ngcontent-%COMP%] {\n  color: #5bc0de;\n}\n.callout-bdc[_ngcontent-%COMP%] {\n  border-left-color: #29527a;\n}\n.callout-bdc[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .callout-bdc[_ngcontent-%COMP%]   .callout-status-icon[_ngcontent-%COMP%] {\n  color: #29527a;\n}\n.callout-muted[_ngcontent-%COMP%] {\n  border-left-color: #a1a1a1;\n}\n.callout-muted[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .callout-muted[_ngcontent-%COMP%]   .callout-status-icon[_ngcontent-%COMP%] {\n  color: #a1a1a1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idWlsZC9idWlsZC1oaXN0b3J5L2J1aWxkLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFFO0VBQ0UsZ0JBQUE7QUFFSjtBQUFFO0VBQ0Usa0JBQUE7QUFFSjtBQUFFO0VBQ0UsZ0JBQUE7QUFFSjtBQUtFO0VBQ0UsdUJBSm1CO0FBRXZCO0FBR0k7O0VBRUUsV0FQaUI7QUFNdkI7QUFIRTtFQUNFLDBCQUptQjtBQVV2QjtBQUxJOztFQUVFLGNBUGlCO0FBY3ZCO0FBWEU7RUFDRSwwQkFKbUI7QUFrQnZCO0FBYkk7O0VBRUUsY0FQaUI7QUFzQnZCO0FBbkJFO0VBQ0UsMEJBSm1CO0FBMEJ2QjtBQXJCSTs7RUFFRSxjQVBpQjtBQThCdkI7QUEzQkU7RUFDRSwwQkFKbUI7QUFrQ3ZCO0FBN0JJOztFQUVFLGNBUGlCO0FBc0N2QjtBQW5DRTtFQUNFLDBCQUptQjtBQTBDdkI7QUFyQ0k7O0VBRUUsY0FQaUI7QUE4Q3ZCO0FBM0NFO0VBQ0UsMEJBSm1CO0FBa0R2QjtBQTdDSTs7RUFFRSxjQVBpQjtBQXNEdkI7QUFuREU7RUFDRSwwQkFKbUI7QUEwRHZCO0FBckRJOztFQUVFLGNBUGlCO0FBOER2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVpbGQvYnVpbGQtaGlzdG9yeS9idWlsZC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY2FsbG91dCAqL1xuLmNhbGxvdXQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaDQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIHA6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBjb2RlIHtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cbiAgJiArIC5icy1jYWxsb3V0IHtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICB9XG59XG5cbkBlYWNoICRuYW1lLCAkY29sb3IgaW4gKGRlZmF1bHQsICM3NzcpLCAocHJpbWFyeSwgIzQyOGJjYSksIChzdWNjZXNzLCAjNWNiODVjKSxcbiAgKGRhbmdlciwgI2Q5NTM0ZiksICh3YXJuaW5nLCAjZjBhZDRlKSwgKGluZm8sICM1YmMwZGUpLCAoYmRjLCAjMjk1MjdhKSwgKG11dGVkLCByZ2IoMTYxLCAxNjEsIDE2MSkpXG57XG4gIC5jYWxsb3V0LSN7JG5hbWV9IHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJGNvbG9yO1xuICAgIGg0LFxuICAgIC5jYWxsb3V0LXN0YXR1cy1pY29uIHtcbiAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BuildHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-build-history',
                templateUrl: './build-history.component.html',
                styleUrls: ['./build-history.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, { onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:focus', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/build/build-template/build-template.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/build/build-template/build-template.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BuildTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildTemplateComponent", function() { return BuildTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/global-constants */ "./src/app/utils/global-constants.ts");
/* harmony import */ var src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/strings-eng */ "./src/app/utils/strings-eng.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-service */ "./src/app/services/data-service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");















function BuildTemplateComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Build Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Configure your build template here that will be used as the default template for any new builds, so that you won't have to re-configure everything everytime you create a new build. These options are configurable when creating a build.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BuildTemplateComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create New Build");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Submit a new build with configurations based on your build template. You can change details here for this build only without affecting the build template.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BuildTemplateComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "New Build Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuildTemplateComponent_div_0_div_6_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.updateBuildNumber(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "This will be the build number for this new build. This is required for the first time of building the project only, but you can also choose to update it manually for this new build.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BuildTemplateComponent_div_0_div_7_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", option_r11.scheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r11.scheme, " ");
} }
function BuildTemplateComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BuildTemplateComponent_div_0_div_7_Template_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.onSchemeChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BuildTemplateComponent_div_0_div_7_option_4_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "The default scheme in your project that you want to build. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.iosBuildTemplateOptions.build_options);
} }
function BuildTemplateComponent_div_0_div_8_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const environment_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", environment_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", environment_r15, " ");
} }
function BuildTemplateComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Environment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BuildTemplateComponent_div_0_div_8_option_4_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "small", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "The default environment for the selected scheme which you want to build. Switching schemes will result in different environments to choose from, according to your Project Static Configs. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.environments);
} }
function BuildTemplateComponent_div_0_mat_card_15_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Compiling... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BuildTemplateComponent_div_0_mat_card_15_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "check_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Done! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BuildTemplateComponent_div_0_mat_card_15_label_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Failed! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BuildTemplateComponent_div_0_mat_card_15_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Carthage File");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BuildTemplateComponent_div_0_mat_card_15_label_5_Template, 3, 0, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BuildTemplateComponent_div_0_mat_card_15_label_6_Template, 4, 0, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BuildTemplateComponent_div_0_mat_card_15_label_7_Template, 4, 0, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BuildTemplateComponent_div_0_mat_card_15_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.cartfileOnChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Specify the cartfile to be used for compiling this build. Compilation will begin as soon as cartfile is chosen, and you can navigate away from this website as it compiles on our server.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.cartFileStatus == "building");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.cartFileStatus == "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.cartFileStatus == "failure");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.cartFileName ? ctx_r6.cartFileName : "Choose file");
} }
function BuildTemplateComponent_div_0_mat_card_16_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Firebase Distribution Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Specify the default firebase group to deploy your build to.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BuildTemplateComponent_div_0_mat_card_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Firebase Adhoc Deployment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-slide-toggle", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Enabled if you have this option enabled in Project Static Configs. The static configs are not affected even if your disable this here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BuildTemplateComponent_div_0_mat_card_16_div_7_Template, 6, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r7.buildTemplateFormIos.value.adhoc_option);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.buildTemplateFormIos.value.adhoc_option == true);
} }
function BuildTemplateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BuildTemplateComponent_div_0_div_2_Template, 5, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BuildTemplateComponent_div_0_div_3_Template, 5, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function BuildTemplateComponent_div_0_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.formOnSubmit(ctx_r23.buildTemplateFormIos.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BuildTemplateComponent_div_0_div_6_Template, 10, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BuildTemplateComponent_div_0_div_7_Template, 7, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BuildTemplateComponent_div_0_div_8_Template, 7, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Git Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "The name of the branch in your Git repository that you want to build.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, BuildTemplateComponent_div_0_mat_card_15_Template, 16, 4, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BuildTemplateComponent_div_0_mat_card_16_Template, 8, 2, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "TestFlight Enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "mat-slide-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Check this if you want to deploy your Beta app via Apple's TestFlight.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Test Enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mat-slide-toggle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Enable this if you have implemented unit tests in your codes and would like to run them when building.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Push-To-Branch Enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "mat-slide-toggle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Enable this if you want this build to be committed and pushed to the Git branch you selected after build completes. Typical updates include auto-increment of version codes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Enterprise Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "mat-slide-toggle", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Enable this if your Apple Developer account is an Enterprise Account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Release Notes (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Optional: Type your default release notes to be used for future builds.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.dialogData == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.dialogData != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.buildTemplateFormIos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.dialogData != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.iosBuildTemplateOptions != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.iosBuildTemplateOptions != null && ctx_r0.environments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.iosBuildTemplateOptions ? ctx_r0.iosBuildTemplateOptions.carthage_option == "1" : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.iosBuildTemplateOptions ? ctx_r0.iosBuildTemplateOptions.firebase_adhoc_option == "1" : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.buildTemplateFormIos.value.testflight_option);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.buildTemplateFormIos.value.test_option);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.buildTemplateFormIos.value.push_to_branch_option);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.buildTemplateFormIos.value.enterprise_option);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getSubmitBtnText());
} }
class BuildTemplateComponent {
    constructor(formBuilder, dataService, httpService, _snackbar, router) {
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.httpService = httpService;
        this._snackbar = _snackbar;
        this.router = router;
        // dynamic dropdown for env (based on scheme)
        this.environments = [];
        // built template form
        this.buildTemplateFormIos = this.getInitialFormBuilder();
        // cartfile form
        this.cartFileFormIos = this.getCartfileFormBuilder();
        // check if already got build number on cloud
        this.hasBuildNumberOnCloud = false;
    }
    getSubmitBtnText() {
        if (this.dialogData == null)
            return 'Submit';
        else if (this.dialogData.buildType == src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].BUILD_TYPE_NEW_BUILD)
            return 'Create Build';
        else
            return 'Rebuild';
    }
    getInitialFormBuilder() {
        return this.formBuilder.group({
            project_id: '',
            branch: '',
            environment: '',
            scheme: '',
            testflight_option: false,
            test_option: false,
            push_to_branch_option: false,
            s3_carthage_folder: 'Production',
            firebase_distribution_group: '',
            release_note: '',
            adhoc_option: false,
            enterprise_option: false,
            build_number: null,
        });
    }
    getCartfileFormBuilder() {
        return this.formBuilder.group({
            project_id: '',
            folder_name: 'Production',
            cartfile: [''],
        });
    }
    ngOnInit() {
        this.currentProjSub = this.dataService.currentProjectObs.subscribe((project) => {
            if (project != null) {
                this.currentProjectId = project.project_id;
                this.currentProjectPlatform = project.platform;
                // get template first, then get list of options
                this.getBuildTemplateOptions();
            }
        });
    }
    //=== for cartfile upload
    // when file selected
    cartfileOnChange(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    // upload file via http
    uploadCartFileHttp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
            var resp = yield this.httpService.httpPostFormDataWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_SET_IOS_CARTFILE_URL, formData);
            this.dataService.setIsLoading(false);
            if (resp.success) {
                this._snackbar.open(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].SET_CARTFILE_SUCCESS, null, {
                    duration: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].SNACKBAR_DURATION_LONG,
                });
                // get cartfile status
                this.getCartfileStatus();
            }
            else {
                // show retry upload ux
            }
        });
    }
    getCartfileStatus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var getStaticURL = src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_GET_IOS_CARTFILE_URL(this.currentProjectId, this.cartFileFormIos.value.folder_name);
            let resp = yield this.httpService.httpGetWithHeader(getStaticURL, true);
            if (resp.success) {
                this.cartFileName = 'Cartfile';
                this.cartFileStatus = resp.data.status;
            }
            else {
                this.cartFileStatus = null;
            }
        });
    }
    //=== for build template
    // get template options to initiate form
    getBuildTemplateOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // choose url based on project platform
            var getStaticURL;
            if (this.currentProjectPlatform == 'ios')
                getStaticURL = src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_GET_IOS_BUILD_TEMPLATE_OPTIONS_URL(this.currentProjectId);
            else
                return; // no android yet
            let resp = yield this.httpService.httpGetWithHeader(getStaticURL, true);
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
                }
                else
                    return;
            }
            else {
                // clear form if error (400)
                if (resp.error.error.message == 'Not found') {
                    // clear form AND dropdown lists
                    this.buildTemplateFormIos = this.getInitialFormBuilder();
                    this.cartFileFormIos = this.getCartfileFormBuilder();
                    this.iosBuildTemplateOptions = null;
                    this.environments = [];
                }
            }
        });
    }
    // update env dropdown on scheme change
    onSchemeChanged() {
        this.updateEnvDropdown();
    }
    updateEnvDropdown() {
        let envs = this.iosBuildTemplateOptions.build_options.find((option) => option.scheme === this.buildTemplateFormIos.value.scheme);
        if (envs != null)
            this.environments = envs.environment;
        // update form to first in env array
        this.buildTemplateFormIos.patchValue({
            environment: this.environments[0],
        });
    }
    // get build template
    getBuildTemplate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // choose url based on project platform
            var getStaticURL;
            if (this.currentProjectPlatform == 'ios')
                getStaticURL = src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_GET_IOS_BUILD_TEMPLATE_URL(this.currentProjectId);
            else
                return; // no android yet
            let resp = yield this.httpService.httpGetWithHeader(getStaticURL, true);
            if (resp.success) {
                // insert data to form
                if (this.currentProjectPlatform == 'ios') {
                    let iosBuildTemplate = resp.data;
                    this.buildTemplateFormIos = this.formBuilder.group({
                        project_id: this.currentProjectId,
                        branch: iosBuildTemplate.branch,
                        environment: iosBuildTemplate.environment,
                        scheme: iosBuildTemplate.scheme,
                        testflight_option: iosBuildTemplate.testflight_option,
                        test_option: iosBuildTemplate.test_option,
                        push_to_branch_option: iosBuildTemplate.push_to_branch_option,
                        s3_carthage_folder: iosBuildTemplate.s3_carthage_folder,
                        firebase_distribution_group: iosBuildTemplate.firebase_distribution_group,
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
                }
                else
                    return; // android
            }
            else {
            }
        });
    }
    //=== for build number
    updateBuildNumber() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var resp, formBody;
            if (this.currentProjectPlatform == 'ios') {
                formBody = {
                    project_id: this.currentProjectId,
                    build_number: this.buildTemplateFormIos.value.build_number,
                };
                console.log('buildNumber = ', this.buildTemplateFormIos.value.build_number);
                resp = yield this.httpService.httpPostWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_SET_BUILD_NUMBER_URL, formBody);
            }
            else {
            }
            return resp;
        });
    }
    //=== for form submission (build template, create new build, rebuild)
    // form on submit - differentiate by dialogData
    formOnSubmit(formBody) {
        if (this.dialogData == null) {
            // build template
            this.submitBuildTemplate(formBody);
        }
        else {
            switch (this.dialogData.buildType) {
                case src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].BUILD_TYPE_NEW_BUILD:
                    this.submitNewBuild(formBody);
                    break;
                case src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].BUILD_TYPE_REBUILD:
                    break;
            }
        }
    }
    // for build template form
    submitBuildTemplate(formBody) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // alert user if cartfile is null
            if (this.iosBuildTemplateOptions.carthage_option == '1' &&
                this.cartFileName == null) {
                alert(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].CARTFILE_NULL);
                return;
            }
            this.dataService.setIsLoading(true);
            // add proj id to form
            formBody.project_id = this.currentProjectId;
            var resp;
            if (this.currentProjectPlatform == 'ios') {
                resp = yield this.httpService.httpPostWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_SET_IOS_BUILD_TEMPLATE_URL, formBody);
            }
            else {
            }
            this.dataService.setIsLoading(false);
            if (resp.success) {
                this._snackbar.open(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].SET_BUILD_TEMPLATE_SUCCESS, null, {
                    duration: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].SNACKBAR_DURATION_MID,
                });
            }
        });
    }
    // for create new build
    submitNewBuild(formBody) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataService.setIsLoading(true);
            // add new build data to form
            formBody.project_id = this.currentProjectId;
            var resp;
            if (this.currentProjectPlatform == 'ios') {
                // if hvn't updated build number to server, do so
                var shouldProceed = false;
                if (!this.hasBuildNumberOnCloud) {
                    shouldProceed = (yield this.updateBuildNumber()).success;
                }
                else {
                    shouldProceed = true;
                }
                // don't proceed if update build number failed
                if (!shouldProceed)
                    return;
                // add in iosOnly details
                formBody.platform = 'ios';
                // remove build number from formBody
                delete formBody.build_number;
                resp = yield this.httpService.httpPostWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_CREATE_BUILD_URL, formBody);
            }
            else {
                // android
            }
            this.dataService.setIsLoading(false);
            if (resp.success) {
                // go to build detail page if resp success
                let buildId = resp.data.build_id;
                window.location.href = `/build-detail/${buildId}`;
            }
        });
    }
    ngOnDestroy() {
        this.currentProjSub.unsubscribe();
    }
}
BuildTemplateComponent.ɵfac = function BuildTemplateComponent_Factory(t) { return new (t || BuildTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
BuildTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BuildTemplateComponent, selectors: [["app-build-template"]], inputs: { dialogData: "dialogData" }, decls: 1, vars: 1, consts: [["class", "row p-3", 4, "ngIf"], [1, "row", "p-3"], [1, "col", "pb-3"], [4, "ngIf"], [1, "px-2", "py-4"], ["ngNativeValidate", "", 3, "formGroup", "ngSubmit"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], ["for", "gitBranch"], ["type", "text", "id", "gitBranch", "formControlName", "branch", "aria-describedby", "gitBranchNote", "placeholder", "e.g. master", "required", "", 1, "form-control"], ["id", "gitBranchNote", 1, "form-text", "text-muted"], ["class", "mb-3", 4, "ngIf"], [1, "mb-3"], ["for", "testFlightOptions"], ["id", "testFlightOptions", "aria-describedby", "testFlightOptionsNote", "formControlName", "testflight_option", 1, "ml-2", 3, "checked"], ["id", "testFlightOptionsNote", 1, "form-text", "text-muted"], ["for", "testOptions"], ["id", "testOptions", "aria-describedby", "testOptionsNote", "formControlName", "test_option", 1, "ml-2", 3, "checked"], ["id", "testOptionsNote", 1, "form-text", "text-muted"], ["for", "pushToBranchOptions"], ["id", "pushToBranchOptions", "aria-describedby", "pushToBranchOptionsNote", "formControlName", "push_to_branch_option", 1, "ml-2", 3, "checked"], ["id", "pushToBranchOptionsNote", 1, "form-text", "text-muted"], ["for", "enterpriseOptions"], ["id", "enterpriseOptions", "aria-describedby", "enterpriseOptionsNote", "formControlName", "enterprise_option", 1, "ml-2", 3, "checked"], ["id", "enterpriseOptionsNote", 1, "form-text", "text-muted"], ["for", "releaseNotes"], ["type", "text", "id", "releaseNotes", "formControlName", "release_note", "aria-describedby", "releaseNotesNote", "rows", "4", 1, "form-control"], ["id", "releaseNotesNote", 1, "form-text", "text-muted"], [1, "d-flex", "mb-4"], ["type", "submit", 1, "btn", "btn-primary"], ["for", "buildNumber"], [1, "input-group"], ["type", "number", "id", "buildNumber", "aria-describedby", "buildNumberNote", "formControlName", "build_number", "required", "", 1, "form-control"], [1, "input-group-append"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-outline-success", 3, "click"], ["id", "buildNumberNote", 1, "form-text", "text-muted"], ["for", "schemeDropdown"], ["id", "schemeDropdown", "aria-describedby", "schemeDropdownNote", "formControlName", "scheme", "aria-label", "Schemes dropdown", "required", "", 1, "custom-select", "cursor-pointer", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "schemeDropdownNote", 1, "form-text", "text-muted"], [3, "value"], ["for", "envDropdown"], ["id", "envDropdown", "aria-describedby", "envDropdownNote", "formControlName", "environment", "aria-label", "Environments dropdown", "required", "", 1, "custom-select", "cursor-pointer"], ["id", "envDropdownNote", 1, "form-text", "text-muted"], [1, "d-flex", "align-items-center"], ["for", "cartFile"], ["class", "ml-auto d-flex align-items-center text-secondary", 4, "ngIf"], ["class", "ml-auto d-flex align-items-center text-success", 4, "ngIf"], ["class", "ml-auto d-flex align-items-center text-danger", 4, "ngIf"], [1, "custom-file"], ["type", "file", "id", "cartFile", "aria-describedby", "cartFileNote", 1, "custom-file-input", "cursor-pointer", 3, "change"], ["inputFile", ""], ["for", "cartFile", 1, "custom-file-label"], ["id", "cartFileNote", 1, "form-text", "text-muted"], [1, "ml-auto", "d-flex", "align-items-center", "text-secondary"], ["diameter", "18", 1, "mr-1"], [1, "ml-auto", "d-flex", "align-items-center", "text-success"], [1, "mr-1"], [1, "ml-auto", "d-flex", "align-items-center", "text-danger"], ["for", "firebaseOptions"], ["id", "firebaseOptions", "aria-describedby", "firebaseOptionsNote", "formControlName", "adhoc_option", 1, "ml-2", 3, "checked"], ["id", "firebaseOptionsNote", 1, "form-text", "text-muted"], ["for", "firebaseDistGrp"], ["type", "text", "id", "firebaseDistGrp", "placeholder", "e.g. PRODUCT_TEAM", "formControlName", "firebase_distribution_group", "aria-describedby", "firebaseDistGrpNote", "required", "", 1, "form-control"], ["id", "firebaseDistGrpNote", 1, "form-text", "text-muted"]], template: function BuildTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BuildTemplateComponent_div_0_Template, 51, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentProjectId != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"]], styles: [".build-status-icon[_ngcontent-%COMP%] {\n    display: inline-flex;\n    vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idWlsZC9idWlsZC10ZW1wbGF0ZS9idWlsZC10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVpbGQvYnVpbGQtdGVtcGxhdGUvYnVpbGQtdGVtcGxhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idWlsZC1zdGF0dXMtaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BuildTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-build-template',
                templateUrl: './build-template.component.html',
                styleUrls: ['./build-template.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { dialogData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/build/build/build.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/build/build/build.component.ts ***!
  \***********************************************************/
/*! exports provided: BuildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildComponent", function() { return BuildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-service */ "./src/app/services/data-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _build_template_build_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../build-template/build-template.component */ "./src/app/components/build/build-template/build-template.component.ts");








function BuildComponent_mat_card_content_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-build-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BuildComponent_mat_dialog_content_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-build-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogData", ctx_r1.dialogData);
} }
class BuildComponent {
    constructor(injector, dataService) {
        this.injector = injector;
        this.dataService = dataService;
        this.dialogData = this.injector.get(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], null);
    }
    ngOnInit() {
        this.currentProjSub = this.dataService.currentProjectObs.subscribe((project) => {
            if (project != null) {
                this.currentProjectId = project.project_id;
                this.currentProjectPlatform = project.platform;
            }
        });
    }
    ngOnDestroy() {
        this.currentProjSub.unsubscribe();
    }
}
BuildComponent.ɵfac = function BuildComponent_Factory(t) { return new (t || BuildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
BuildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuildComponent, selectors: [["app-build"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "dialogData"]], template: function BuildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BuildComponent_mat_card_content_0_Template, 2, 0, "mat-card-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BuildComponent_mat_dialog_content_1_Template, 2, 1, "mat-dialog-content", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dialogData == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dialogData != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _build_template_build_template_component__WEBPACK_IMPORTED_MODULE_5__["BuildTemplateComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVpbGQvYnVpbGQvYnVpbGQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-build',
                templateUrl: './build.component.html',
                styleUrls: ['./build.component.css'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/configs/git-configs/git-configs.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/configs/git-configs/git-configs.component.ts ***!
  \*************************************************************************/
/*! exports provided: GitConfigsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitConfigsComponent", function() { return GitConfigsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/global-constants */ "./src/app/utils/global-constants.ts");
/* harmony import */ var src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/strings-eng */ "./src/app/utils/strings-eng.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-service */ "./src/app/services/data-service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");












function GitConfigsComponent_div_0_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Git SSH Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GitConfigsComponent_div_0_div_24_Template_textarea_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.textAreaOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GitConfigsComponent_div_0_div_24_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.generateBtnOnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Generate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Generate a new SSH key and copy/paste it to your Git Repository. You only need to generate this key once.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.gitSSHKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.generateBtnDisabled);
} }
function GitConfigsComponent_div_0_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Git Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "The password you use for logging into your Git repository, or App Password which gives access to your repository.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("required", ctx_r2.gitConfigForm.value.git_login_type == "credential");
} }
function GitConfigsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Git Configs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This is where the git configurations for your project go. Login to your gitlab repository to get the required information.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function GitConfigsComponent_div_0_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.submitGitConfigForm(ctx_r6.gitConfigForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Git Login Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "SSH (recommended)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Credential (HTTPS)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "The preferred login type to your git repository. SSH is recommended for security purposes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Git Repository Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "This is the link to your git repository, depending on which login type is chosen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, GitConfigsComponent_div_0_div_24_Template, 11, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, GitConfigsComponent_div_0_div_25_Template, 6, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.gitConfigForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", "e.g. ", ctx_r0.getGitUrlPlaceHolder(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.gitConfigForm.value.git_login_type == "ssh");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.gitConfigForm.value.git_login_type == "credential");
} }
class GitConfigsComponent {
    constructor(formBuilder, dataService, httpService, _snackbar, clipboard) {
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.httpService = httpService;
        this._snackbar = _snackbar;
        this.clipboard = clipboard;
        this.gitConfigForm = this.formBuilder.group({
            git_url: '',
            git_login_type: 'ssh',
            git_password: '',
        });
        this.generateBtnDisabled = false;
    }
    ngOnInit() {
        // subscribe to current proj
        this.currentProjSub = this.dataService.currentProjectObs.subscribe((project) => {
            if (project != null) {
                this.currentProjectId = project.project_id;
                // get git config
                this.getGitConfigs();
                // get ssh key
                this.getSSHKey();
            }
        });
    }
    ;
    //=== ui
    getGitUrlPlaceHolder() {
        if (this.gitConfigForm.value.git_login_type == 'ssh')
            return "git@bitbucket.org:userA/projectABC.git";
        else
            return "https://userLoginA@bitbucket.org/userA/projectABC.git";
    }
    //=== http
    getGitConfigs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resp = yield this.httpService.httpGetWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_GET_GIT_CONFIG_URL(this.currentProjectId), true);
            if (resp.success) {
                // insert data to form
                let gitConfigs = resp.data;
                this.gitConfigForm = this.formBuilder.group({
                    project_id: this.currentProjectId,
                    git_url: gitConfigs.git_url,
                    git_login_type: gitConfigs.git_login_type,
                    git_password: gitConfigs.git_password,
                });
            }
            else {
                // error means no configs yet - clear form
                this.gitConfigForm = this.formBuilder.group({
                    project_id: this.currentProjectId,
                    git_url: '',
                    git_login_type: 'ssh',
                    git_password: '',
                });
            }
        });
    }
    getSSHKey() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resp = yield this.httpService.httpGetWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_GET_SSH_KEY_URL(this.currentProjectId), true);
            if (resp.success) {
                this.gitSSHKey = resp.data.public_key;
            }
            else {
                this.gitSSHKey = null;
            }
        });
    }
    generateBtnOnClick() {
        // show confirmation only if already got ssh key
        if (this.gitSSHKey != null) {
            if (confirm(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].GENERATE_SSH_CONFIRM))
                this.generateSSHKey();
        }
        else
            this.generateSSHKey();
    }
    generateSSHKey() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.generateBtnDisabled = true;
            let resp = yield this.httpService.httpPostWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_GENERATE_SSH_KEY_URL, { project_id: this.currentProjectId });
            this.generateBtnDisabled = false;
            if (resp.success) {
                this.gitSSHKey = resp.data.public_key;
            }
        });
    }
    // copy ssh key if got
    textAreaOnClick() {
        if (this.gitSSHKey != null) {
            this.clipboard.copy(this.gitSSHKey);
            this._snackbar.open(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].SSH_KEY_COPIED, null, {
                duration: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].SNACKBAR_DURATION_MID,
            });
        }
    }
    submitGitConfigForm(formBody) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // check if ssh key already generated for ssh
            if (formBody.git_login_type == 'ssh' && this.gitSSHKey == null) {
                alert(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].SSH_KEY_EMPTY);
                return;
            }
            this.dataService.setIsLoading(true);
            // update project Id to formBody
            formBody.project_id = this.currentProjectId;
            // remove password from body if got ssh
            if (formBody.git_login_type == 'ssh')
                formBody.git_password = '';
            let resp = yield this.httpService.httpPostWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_SET_GIT_CONFIG_URL, formBody);
            this.dataService.setIsLoading(false);
            if (resp.success) {
                this._snackbar.open(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].SET_GIT_CONFIG_SUCCESS, null, {
                    duration: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].SNACKBAR_DURATION_MID,
                });
            }
        });
    }
    ngOnDestroy() {
        this.currentProjSub.unsubscribe();
    }
}
GitConfigsComponent.ɵfac = function GitConfigsComponent_Factory(t) { return new (t || GitConfigsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["Clipboard"])); };
GitConfigsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GitConfigsComponent, selectors: [["app-git-configs"]], decls: 1, vars: 1, consts: [["class", "row p-3", 4, "ngIf"], [1, "row", "p-3"], [1, "col", "pb-3"], [1, "px-2", "py-4"], ["ngNativeValidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "gitLoginTypeSelect"], ["id", "gitLoginTypeSelect", "aria-describedby", "gitRepoURL", "formControlName", "git_login_type", "aria-label", "Example select with button addon", "required", "", 1, "custom-select", "cursor-pointer"], ["value", "ssh"], ["value", "credential"], ["id", "gitLoginType", 1, "form-text", "text-muted"], ["for", "gitUrlInput"], ["type", "text", "id", "gitUrlInput", "formControlName", "git_url", "aria-describedby", "gitRepoURL", "required", "", 1, "form-control", 3, "placeholder"], ["id", "gitRepoURL", 1, "form-text", "text-muted"], ["class", "form-group", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "mb-4"], ["for", "gitSSHKeyInput"], [1, "input-group"], ["type", "text", "id", "gitSSHKeyInput", "aria-describedby", "gitSSHKey", "rows", "5", "readonly", "", 1, "form-control", 3, "click"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-info", 3, "disabled", "click"], ["id", "gitSSHKey", 1, "form-text", "text-muted"], ["type", "password", "id", "gitUrlInput", "formControlName", "git_url", "aria-describedby", "gitRepoURL", "formControlName", "git_password", 1, "form-control", 3, "required"]], template: function GitConfigsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GitConfigsComponent_div_0_Template, 28, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentProjectId != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlncy9naXQtY29uZmlncy9naXQtY29uZmlncy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GitConfigsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-git-configs',
                templateUrl: './git-configs.component.html',
                styleUrls: ['./git-configs.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["Clipboard"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/configs/static-configs/static-configs.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/configs/static-configs/static-configs.component.ts ***!
  \*******************************************************************************/
/*! exports provided: StaticConfigsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticConfigsComponent", function() { return StaticConfigsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/global-constants */ "./src/app/utils/global-constants.ts");
/* harmony import */ var src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/strings-eng */ "./src/app/utils/strings-eng.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-service */ "./src/app/services/data-service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");












function StaticConfigsComponent_div_0_form_7_form_21_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Apple Provisioning Profile Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function StaticConfigsComponent_div_0_form_7_form_21_mat_card_1_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r11.provisioningCertOnChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Upload your Apple Provisioning Profile Certificate for this project. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Learn more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Certificate Private Key File");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 56, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function StaticConfigsComponent_div_0_form_7_form_21_mat_card_1_Template_input_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r13.privateKeyOnChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Upload the private key file associated to the certificate chosen above. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Learn more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Certificate Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function StaticConfigsComponent_div_0_form_7_form_21_mat_card_1_Template_input_change_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r14.certPwordOnChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Optional: Input the password used when generating your p12 private key file, if applicable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function StaticConfigsComponent_div_0_form_7_form_21_mat_card_1_Template_input_change_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r15.toggleShowCertPword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Show password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("required", ctx_r8.provisioningCertFileName == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.provisioningCertFileName ? ctx_r8.provisioningCertFileName : "Choose file");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("required", ctx_r8.privateKeyFileName == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.privateKeyFileName ? ctx_r8.privateKeyFileName : "Choose file");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", ctx_r8.shouldShowCertPword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r8.shouldEnableUploadBtn);
} }
function StaticConfigsComponent_div_0_form_7_form_21_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function StaticConfigsComponent_div_0_form_7_form_21_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r16.uploadAppSigningAutoFiles(ctx_r16.appSigningFormIos.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StaticConfigsComponent_div_0_form_7_form_21_mat_card_1_Template, 39, 6, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.appSigningFormIos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.staticConfigFormIos.value.signing_method == "automatic");
} }
function StaticConfigsComponent_div_0_form_7_small_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*NOTE: If you have Two-factor Authentication (2FA) enabled on your App Store account, upload method will fail using App Store login credentials. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StaticConfigsComponent_div_0_form_7_mat_card_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "App Store Connect API");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Issuer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "The Issuer ID for your App Store Connect API. Obtain this from your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " App Store Connect Developer Console.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "App Store Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "textarea", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "The App Store Connect key. This can be generated and downloaded only once from your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " App Store Connect Developer Console.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Api Key ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "small", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "The key ID for the generated App Store Connect key.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StaticConfigsComponent_div_0_form_7_mat_card_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "App Store Login Credentials");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "App Store Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "The App Store username for this project.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "App Store Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "The App Store password for this project.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "App Store Bundle ID(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "textarea", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "The unique bundle identifier for this project. Separate multiple bundle IDs with a comma.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StaticConfigsComponent_div_0_form_7_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Firebase Token");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "The Firebase token required to authenticate login and distribute from that account. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Learn more.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StaticConfigsComponent_div_0_form_7_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Notification Hook URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "The name of the Apple signing certificate for this project. e.g. Apple Distribution: ABC Company Sdn. Bhd.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StaticConfigsComponent_div_0_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function StaticConfigsComponent_div_0_form_7_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.submitStaticConfigForm(ctx_r18.staticConfigFormIos.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "XCode Project Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Signing Certificate Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "The name of the Apple signing certificate for this project.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "App Signing Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Automatic (recommended)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "The preferred signing method for your app. Automatic signing is recommended for security reasons. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, StaticConfigsComponent_div_0_form_7_form_21_Template, 2, 2, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "App Upload Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "App Store Connect API (recommended)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "App Store Login Credentials");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Whether to upload the app to AppStore with your AppStore login credentials or with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "App Store Connect API");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, StaticConfigsComponent_div_0_form_7_small_35_Template, 3, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, StaticConfigsComponent_div_0_form_7_mat_card_36_Template, 25, 0, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, StaticConfigsComponent_div_0_form_7_mat_card_37_Template, 21, 0, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Bitcode Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "mat-slide-toggle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Select to enable Bitcode while compiling your ipa file for this project (recommended).");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Pod Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "mat-slide-toggle", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Select to enabled CocoaPods for this project.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Carthage Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "mat-slide-toggle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Select to enabled Carthage for this project.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Firebase Adhoc Deployment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "mat-slide-toggle", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Select this if you need to deploy the compiled ipa file via Firebase Ah Hoc Distribution.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, StaticConfigsComponent_div_0_form_7_div_63_Template, 8, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Notification Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Google Hangouts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Microsoft Teams");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Slack");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Send a notification when the job completes to your workplace communication channel. Currently supports Google Hangouts, Microsoft Teams, and Slack.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, StaticConfigsComponent_div_0_form_7_div_79_Template, 6, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.staticConfigFormIos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentProjectPlatform == "ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.staticConfigFormIos.value.upload_method == "credential");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.staticConfigFormIos.value.upload_method == "key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.staticConfigFormIos.value.upload_method == "credential");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r1.staticConfigFormIos.value.bitcode_option);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r1.staticConfigFormIos.value.pod_option);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r1.staticConfigFormIos.value.carthage_option);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r1.staticConfigFormIos.value.firebase_adhoc_option);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.staticConfigFormIos.value.firebase_adhoc_option == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.staticConfigFormIos.value.notification_channel != "none");
} }
function StaticConfigsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Project Static Configs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This is where the you set 1-time static configurations for your project. Most of these information will be releavant to your XCode configurations.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, StaticConfigsComponent_div_0_form_7_Template, 82, 11, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentProjectPlatform == "ios");
} }
class StaticConfigsComponent {
    constructor(formBuilder, dataService, httpService, _snackbar) {
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.httpService = httpService;
        this._snackbar = _snackbar;
        // for main static configs form
        this.staticConfigFormIos = this.getInitialFormBuilder();
        // app signing form
        this.appSigningFormIos = this.getAppSigningIosFormBuilder();
        // for app signing method files check - check if required files uploaded
        this.hasAutoAppSigningFiles = false;
        // only enable upload btn if got changes
        this.shouldEnableUploadBtn = false;
        // app signing cert pword
        this.shouldShowCertPword = false;
    }
    getInitialFormBuilder() {
        return this.formBuilder.group({
            project_id: '',
            // text copied from xcode
            xcodeproject: '',
            team_cert: '',
            // manual || automatic
            signing_method: 'automatic',
            // credential || key
            upload_method: 'key',
            // credential only
            appstore_username: '',
            appstore_password: '',
            bundle_ids: '',
            // key only (appstore connect api)
            appstore_api_key: '',
            appstore_api_issuer: '',
            appstore_key: '',
            // pod related
            pod_option: false,
            carthage_option: false,
            // optional field for when compiling ipa
            bitcode_option: true,
            // optional field for firebase deployment
            firebase_adhoc_option: false,
            firebase_token: '',
            // google || teams || slack || none
            notification_channel: 'none',
            // hide if none
            notification_hook_url: '',
        });
    }
    getAppSigningIosFormBuilder() {
        return this.formBuilder.group({
            project_id: '',
            certificate_password: '',
            provisioning_cert: [''],
            private_key: [''],
        });
    }
    //=== for ui
    // app upload method desc string based on user's selection
    getUploadMethodDesc(uploadMethod) {
        if (uploadMethod == 'key')
            return src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"];
    }
    checkAppSigningAndProceed() {
        if (this.staticConfigFormIos.value.signing_method == 'automatic')
            // auto - check if files uploaded
            return this.hasAutoAppSigningFiles;
        // manual signing - proceed
        else
            return true;
    }
    // getUploadBtnClass() {
    //   if (this.shouldEnableUploadBtn) return ''
    // }
    ngOnInit() {
        // subscribe to current proj
        this.currentProjSub = this.dataService.currentProjectObs.subscribe((project) => {
            if (project != null) {
                this.currentProjectId = project.project_id;
                this.currentProjectPlatform = project.platform;
                // reset everything before get new details
                this.staticConfigFormIos = this.getInitialFormBuilder();
                this.appSigningFormIos = this.getAppSigningIosFormBuilder();
                this.provisioningCertFileName = null;
                this.privateKeyFileName = null;
                this.hasAutoAppSigningFiles = false;
                this.shouldEnableUploadBtn = false;
                this.getStaticConfigs();
            }
        });
    }
    getStaticConfigs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // choose url based on project platform
            var getStaticURL;
            if (this.currentProjectPlatform == 'ios')
                getStaticURL = src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_GET_IOS_STATIC_CONFIG_URL(this.currentProjectId);
            else
                return; // no android yet
            let resp = yield this.httpService.httpGetWithHeader(getStaticURL, true);
            if (resp.success) {
                // insert data to form
                if (this.currentProjectPlatform == 'ios') {
                    let iosStaticConfigs = resp.data;
                    // update main form first
                    this.staticConfigFormIos = this.formBuilder.group({
                        project_id: this.currentProjectId,
                        xcodeproject: iosStaticConfigs.xcodeproject,
                        signing_method: iosStaticConfigs.signing_method,
                        upload_method: iosStaticConfigs.upload_method,
                        team_cert: iosStaticConfigs.team_cert,
                        appstore_username: iosStaticConfigs.appstore_username,
                        appstore_password: iosStaticConfigs.appstore_password,
                        appstore_api_key: iosStaticConfigs.appstore_api_key,
                        appstore_api_issuer: iosStaticConfigs.appstore_api_issuer,
                        appstore_key: iosStaticConfigs.appstore_key,
                        bundle_ids: iosStaticConfigs.bundle_ids,
                        pod_option: iosStaticConfigs.pod_option,
                        carthage_option: iosStaticConfigs.carthage_option,
                        bitcode_option: iosStaticConfigs.bitcode_option,
                        firebase_adhoc_option: iosStaticConfigs.firebase_adhoc_option,
                        firebase_token: iosStaticConfigs.firebase_token,
                        notification_channel: iosStaticConfigs.notification_channel,
                        notification_hook_url: iosStaticConfigs.notification_hook_url,
                    });
                    // update app signing form if auto
                    if (iosStaticConfigs.signing_method == 'automatic') {
                        this.appSigningFormIos.patchValue({
                            certificate_password: iosStaticConfigs.certificate_password,
                        });
                        this.provisioningCertFileName =
                            iosStaticConfigs.provisioning_file_name;
                        this.privateKeyFileName = iosStaticConfigs.private_key_file_name;
                        this.hasAutoAppSigningFiles = true;
                    }
                    else {
                        this.hasAutoAppSigningFiles = false;
                    }
                }
                else
                    return;
            }
        });
    }
    toggleShowCertPword() {
        this.shouldShowCertPword = !this.shouldShowCertPword;
    }
    //=== app signing files upload
    provisioningCertOnChange(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event.target.files.length > 0) {
                this.shouldEnableUploadBtn = true;
                // set file name first
                this.provisioningCertFileName = event.target.files[0].name;
                // add file to form
                const file = event.target.files[0];
                this.appSigningFormIos.patchValue({
                    provisioning_cert: file,
                });
            }
        });
    }
    privateKeyOnChange(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event.target.files.length > 0) {
                this.shouldEnableUploadBtn = true;
                // set file name first
                this.privateKeyFileName = event.target.files[0].name;
                // add file to form
                const file = event.target.files[0];
                this.appSigningFormIos.patchValue({
                    private_key: file,
                });
            }
        });
    }
    // update upload btn enabled on cert pword field changed
    certPwordOnChange() {
        this.shouldEnableUploadBtn = true;
    }
    submitStaticConfigForm(formBody) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // show dialog if no file uploaded for app signing (auto)
            if (!this.checkAppSigningAndProceed()) {
                alert(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].APP_SIGNING_FILES_NULL);
                return;
            }
            this.dataService.setIsLoading(true);
            // add project id
            formBody.project_id = this.currentProjectId;
            var resp;
            if (this.currentProjectPlatform == 'ios') {
                resp = yield this.httpService.httpPostWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_SET_IOS_STATIC_CONFIG_URL, formBody);
            }
            else {
            }
            this.dataService.setIsLoading(false);
            if (resp.success) {
                this._snackbar.open(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].SET_STATIC_CONFIG_SUCCESS, null, {
                    duration: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].SNACKBAR_DURATION_MID,
                });
            }
        });
    }
    // upload form data for app signing method (auto)
    uploadAppSigningAutoFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataService.setIsLoading(true);
            // add projectId to form
            this.appSigningFormIos.patchValue({
                project_id: this.currentProjectId,
            });
            console.log(this.appSigningFormIos.value);
            // transfer vars from form to formData
            var formData = new FormData();
            Object.keys(this.appSigningFormIos.controls).forEach((key) => {
                // only append value if NON-null/empty strings
                if (this.appSigningFormIos.value[key] != '')
                    formData.append(key, this.appSigningFormIos.value[key]);
            });
            var resp = yield this.httpService.httpPostFormDataWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_SET_IOS_APP_SIGNING_AUTO_URL, formData);
            this.dataService.setIsLoading(false);
            if (resp.success) {
                this._snackbar.open(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].SET_APP_SIGNING_FILES_SUCCESS, null, {
                    duration: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].SNACKBAR_DURATION_LONG,
                });
                // update upload boolean
                this.hasAutoAppSigningFiles = true;
            }
            else {
                // show retry upload ux
            }
        });
    }
    ngOnDestroy() {
        this.currentProjSub.unsubscribe();
    }
}
StaticConfigsComponent.ɵfac = function StaticConfigsComponent_Factory(t) { return new (t || StaticConfigsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
StaticConfigsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StaticConfigsComponent, selectors: [["app-static-configs"]], decls: 1, vars: 1, consts: [["class", "row p-3", 4, "ngIf"], [1, "row", "p-3"], [1, "col", "pb-3"], [1, "px-2", "py-4"], ["ngNativeValidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["ngNativeValidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "xcodeProjName"], ["type", "text", "id", "xcodeProjName", "formControlName", "xcodeproject", "placeholder", "e.g. abc_app_ios", "required", "", 1, "form-control"], ["for", "teamCert"], ["type", "text", "id", "teamCert", "formControlName", "team_cert", "aria-describedby", "teamCertNote", "placeholder", "e.g. Apple Distribution: ABC Company Sdn. Bhd.", "required", "", 1, "form-control"], ["id", "teamCertNote", 1, "form-text", "text-muted"], ["for", "signingMethod"], ["id", "signingMethod", "aria-describedby", "signingMethodNote", "formControlName", "signing_method", "aria-label", "App signing Method", "required", "", 1, "custom-select", "cursor-pointer"], ["value", "automatic", "selected", ""], ["value", "manual"], ["id", "signingMethodNote", 1, "form-text", "text-muted"], ["for", "uploadMethod"], ["id", "uploadMethod", "aria-describedby", "uploadMethodNote", "formControlName", "upload_method", "aria-label", "App upload Method", "required", "", 1, "custom-select", "cursor-pointer"], ["value", "key", "selected", ""], ["value", "credential"], ["id", "uploadMethodNote", 1, "form-text", "text-muted"], ["href", "https://developer.apple.com/documentation/appstoreconnectapi", "target", "_blank"], [4, "ngIf"], ["class", "mb-3", 4, "ngIf"], ["for", "bitcodeOptions"], ["id", "bitcodeOptions", "aria-describedby", "bitcodeOptionsNote", "formControlName", "bitcode_option", 1, "ml-2", 3, "checked"], ["id", "bitcodeOptionsNote", 1, "form-text", "text-muted"], ["for", "podOptions"], ["id", "podOptions", "aria-describedby", "podOptionsNote", "formControlName", "pod_option", 1, "ml-2", 3, "checked"], ["id", "podOptionsNote", 1, "form-text", "text-muted"], ["for", "carthageOptions"], ["id", "carthageOptions", "aria-describedby", "carthageOptionsNote", "formControlName", "carthage_option", 1, "ml-2", 3, "checked"], ["id", "carthageOptionsNote", 1, "form-text", "text-muted"], [1, "mb-3"], ["for", "firebaseOptions"], ["id", "firebaseOptions", "aria-describedby", "firebaseOptionsNote", "formControlName", "firebase_adhoc_option", 1, "ml-2", 3, "checked"], ["id", "firebaseOptionsNote", 1, "form-text", "text-muted"], ["class", "form-group", 4, "ngIf"], ["for", "notiChannel"], ["id", "notiChannel", "aria-describedby", "notiChannelNote", "formControlName", "notification_channel", "aria-label", "App upload Method", "required", "", 1, "custom-select", "cursor-pointer"], ["value", "none", "selected", ""], ["value", "google"], ["value", "teams"], ["value", "slack"], ["id", "notiChannelNote", 1, "form-text", "text-muted"], ["type", "submit", 1, "btn", "btn-primary", "mt-4"], ["for", "provisioningCertFile"], [1, "input-group"], [1, "custom-file"], ["type", "file", "id", "provisioningCertFile", "aria-describedby", "provisioningCertFileNote", 1, "custom-file-input", "cursor-pointer", 3, "required", "change"], ["inputFile", ""], ["for", "provisioningCertFile", 1, "custom-file-label"], ["id", "provisioningCertFileNote", 1, "form-text", "text-muted", "mb-3"], ["href", "https://developer.apple.com/support/certificates/", "target", "_blank"], ["for", "privateKeyFile"], ["type", "file", "id", "privateKeyFile", "aria-describedby", "privateKeyFileNote", 1, "custom-file-input", "cursor-pointer", 3, "required", "change"], ["for", "privateKeyFile", 1, "custom-file-label"], ["id", "privateKeyFileNote", 1, "form-text", "text-muted", "mb-3"], ["for", "certPword"], ["formControlName", "certificate_password", "id", "certPword", 1, "form-control", 3, "type", "change"], [1, "form-text", "text-muted"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "showCertPword", 1, "form-check-input", 3, "change"], ["for", "showCertPword", 1, "form-check-label"], [1, "d-flex", "align-items-baseline", "mb-2"], ["type", "submit", 1, "btn", "btn-success", "ml-auto", "border", 3, "disabled"], [1, "text-danger"], ["for", "appstoreApiIssuer"], ["type", "text", "id", "appstoreApiIssuer", "formControlName", "appstore_api_issuer", "aria-describedby", "appstoreApiIssuerNote", "required", "", 1, "form-control"], ["id", "appstoreApiIssuerNote", 1, "form-text", "text-muted"], ["href", "https://appstoreconnect.apple.com/access/api", "target", "_blank"], ["for", "appstoreKey"], ["type", "text", "id", "appstoreKey", "formControlName", "appstore_key", "aria-describedby", "appstoreKeyNote", "rows", "4", "required", "", 1, "form-control"], ["id", "appstoreKeyNote", 1, "form-text", "text-muted"], ["for", "appstoreApiKey"], ["type", "text", "id", "appstoreApiKey", "formControlName", "appstore_api_key", "aria-describedby", "appstoreApiKeyNote", "required", "", 1, "form-control"], ["id", "appstoreApiKeyNote", 1, "form-text", "text-muted"], ["for", "appstoreUsername"], ["type", "text", "id", "appstoreUsername", "formControlName", "appstore_username", "aria-describedby", "appstoreUsernameNote", "required", "", 1, "form-control"], ["id", "appstoreUsernameNote", 1, "form-text", "text-muted"], ["for", "appstorePword"], ["type", "password", "id", "appstorePword", "formControlName", "appstore_password", "aria-describedby", "appstorePwordNote", "required", "", 1, "form-control"], ["id", "appstorePwordNote", 1, "form-text", "text-muted"], ["for", "appstoreBundleId"], ["type", "text", "id", "appstoreBundleId", "formControlName", "bundle_ids", "aria-describedby", "appstoreBundleIdNote", "rows", "3", "placeholder", "e.g. com.company_abc.test_app_dev, com.company_abc.test_app_stg, com.company_abc.test_app_prod", "required", "", 1, "form-control"], ["id", "appstoreBundleIdNote", 1, "form-text", "text-muted"], ["for", "appstoreFirebaseToken"], ["type", "text", "id", "appstoreFirebaseToken", "formControlName", "firebase_token", "aria-describedby", "appstoreFirebaseTokenNote", "required", "", 1, "form-control"], ["id", "appstoreFirebaseTokenNote", 1, "form-text", "text-muted"], ["href", "https://firebase.google.com/docs/cli#cli-ci-systems", "target", "_blank"], ["for", "notiUrl"], ["type", "text", "id", "notiUrl", "formControlName", "notification_hook_url", "aria-describedby", "notiUrlNote", "required", "", 1, "form-control"], ["id", "notiUrlNote", 1, "form-text", "text-muted"]], template: function StaticConfigsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, StaticConfigsComponent_div_0_Template, 8, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentProjectId != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlncy9zdGF0aWMtY29uZmlncy9zdGF0aWMtY29uZmlncy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StaticConfigsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-static-configs',
                templateUrl: './static-configs.component.html',
                styleUrls: ['./static-configs.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/create-project/create-project.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-project/create-project.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectComponent", function() { return CreateProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/global-constants */ "./src/app/utils/global-constants.ts");
/* harmony import */ var src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/strings-eng */ "./src/app/utils/strings-eng.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-service */ "./src/app/services/data-service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");










class CreateProjectComponent {
    constructor(formBuilder, dataService, httpService, _snackbar, dialogRef) {
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.httpService = httpService;
        this._snackbar = _snackbar;
        this.dialogRef = dialogRef;
        this.createProjForm = this.formBuilder.group({
            name: '',
            platform: 'ios',
        });
    }
    ngOnInit() { }
    createProjFormSubmit(formBody) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataService.setIsLoading(true);
            let resp = yield this.httpService.httpPostWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_CREATE_PROJ_URL, formBody);
            this.dataService.setIsLoading(false);
            if (resp.success) {
                this._snackbar.open(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].CREATE_PROJECT_SUCCESS, null, {
                    duration: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].SNACKBAR_DURATION_MID,
                });
                // close dialog
                this.dialogRef.close();
                // go to git configs on project creation
                window.location.href = '/git-configs';
            }
        });
    }
}
CreateProjectComponent.ɵfac = function CreateProjectComponent_Factory(t) { return new (t || CreateProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"])); };
CreateProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateProjectComponent, selectors: [["app-create-project"]], decls: 10, vars: 1, consts: [["ngNativeValidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "createProjName"], ["type", "text", "id", "createProjName", "formControlName", "name", "aria-describedby", "createProjNameNote", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function CreateProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create New Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateProjectComponent_Template_form_ngSubmit_3_listener() { return ctx.createProjFormSubmit(ctx.createProjForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.createProjForm);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLXByb2plY3QvY3JlYXRlLXByb2plY3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create-project',
                templateUrl: './create-project.component.html',
                styleUrls: ['./create-project.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/environments/env-details/env-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/environments/env-details/env-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: EnvDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvDetailsComponent", function() { return EnvDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/strings-eng */ "./src/app/utils/strings-eng.ts");
/* harmony import */ var src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/global-constants */ "./src/app/utils/global-constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-service */ "./src/app/services/data-service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");














function EnvDetailsComponent_mat_card_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EnvDetailsComponent_mat_card_7_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const envSetting_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.removeEnvBtn(envSetting_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Environment Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Firebase App ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formArrayName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "envName-", ctx_r0.scheme_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "firebaseId-", ctx_r0.scheme_id, "");
} }
class EnvDetailsComponent {
    constructor(data, formBuilder, _snackbar, dataService, httpService) {
        this.data = data;
        this.formBuilder = formBuilder;
        this._snackbar = _snackbar;
        this.dataService = dataService;
        this.httpService = httpService;
        // for form
        this.envConfigsFormIos = this.getInitialFormBuilder();
    }
    getInitialFormBuilder() {
        return this.formBuilder.group({
            scheme_name: '',
            project_id: '',
            settings: this.formBuilder.array([]),
        });
    }
    get settings() {
        return this.envConfigsFormIos.get('settings');
    }
    addSettings(env) {
        this.settings.push(this.formBuilder.group({
            scheme_id: env.scheme_id,
            environment: env.name,
            scheme: this.envConfigsFormIos.value.scheme_name,
            firebase_id: env.firebase_id,
        }));
    }
    removeSettings(setting) {
        this.settings.removeAt(this.settings.value.findIndex((stg) => stg === setting));
    }
    removeSettingsBasedOnId(schemeId) {
        this.settings.removeAt(this.settings.value.findIndex((stg) => stg.scheme_id === schemeId));
    }
    ngOnInit() {
        // set global vars first
        this.currentProjectId = this.data.project_id;
        this.currentProjectPlatform = this.data.project_platform;
        let scheme = this.data.scheme;
        // transfer single data to form
        this.envConfigsFormIos.patchValue({
            scheme_name: scheme ? scheme.scheme : null,
            project_id: this.currentProjectId,
        });
        // only add stuff to form if got scheme
        if (scheme == null)
            return;
        // loop add data to form
        scheme.environment.forEach((env) => {
            this.addSettings(env);
        });
        console.log(this.settings.controls);
    }
    addNewEnvBtn() {
        this.addSettings({
            name: '',
            scheme_id: null,
            firebase_id: '',
        });
    }
    removeEnvBtn(formEnvSetting) {
        let schemeId = formEnvSetting.value.scheme_id;
        // show alert first
        if (confirm(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].ENV_DELETE_CONFIRM)) {
            // just remove ui if null
            if (schemeId == null)
                this.removeSettings(formEnvSetting.value);
            else
                this.deleteEnvConfigs(schemeId);
        }
    }
    submitEnvConfigs(formBody) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // click on addNewEnvBtn if no settings
            if (this.settings.length <= 0) {
                this.addNewEnvBtn();
                // show snackbar
                this._snackbar.open(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].ENV_SETTINGS_EMPTY, null, {
                    duration: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_4__["GlobalConstants"].SNACKBAR_DURATION_MID,
                });
                return;
            }
            // update scheme name for each settings item in formBody
            if (formBody.scheme_name != null)
                formBody.settings.forEach((setting) => {
                    setting.scheme = formBody.scheme_name;
                });
            // remove "scheme_name" from formBody
            delete formBody.scheme_name;
            console.log(formBody);
            // do http post
            this.dataService.setIsLoading(true);
            // choose url based on project platform
            var postEnvConfigURL;
            if (this.currentProjectPlatform == 'ios')
                postEnvConfigURL = src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_4__["GlobalConstants"].HTTP_SET_IOS_ENV_CONFIG_URL;
            else
                return; // no android yet
            let resp = yield this.httpService.httpPostWithHeader(postEnvConfigURL, formBody);
            this.dataService.setIsLoading(false);
            if (resp.success) {
                this._snackbar.open(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].SET_ENV_CONFIG_SUCCESS, null, {
                    duration: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_4__["GlobalConstants"].SNACKBAR_DURATION_MID,
                });
                window.location.reload();
            }
        });
    }
    deleteEnvConfigs(schemeId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // create formBody from scheme_id
            let formBody = {
                scheme_ids: [schemeId],
            };
            // do http post
            this.dataService.setIsLoading(true);
            // choose url based on project platform
            var deleteEnvConfigURL;
            if (this.currentProjectPlatform == 'ios')
                deleteEnvConfigURL = src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_4__["GlobalConstants"].HTTP_DELETE_IOS_ENV_CONFIG_URL;
            else
                return; // no android yet
            let resp = yield this.httpService.httpPostWithHeader(deleteEnvConfigURL, formBody);
            this.dataService.setIsLoading(false);
            if (resp.success) {
                this._snackbar.open(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].ENV_DELETE_SUCCESS, null, {
                    duration: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_4__["GlobalConstants"].SNACKBAR_DURATION_MID,
                });
                // delete item from main form as well
                this.removeSettingsBasedOnId(schemeId);
            }
        });
    }
}
EnvDetailsComponent.ɵfac = function EnvDetailsComponent_Factory(t) { return new (t || EnvDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"])); };
EnvDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EnvDetailsComponent, selectors: [["app-env-details"]], decls: 13, vars: 2, consts: [["ngNativeValidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "gitUrlInput"], ["type", "text", "id", "schemeName", "aria-describedby", "gitRepoURL", "formControlName", "scheme_name", "placeholder", "e.g. abc_app_merchant", "required", "", 1, "form-control"], ["formArrayName", "settings"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "d-flex"], ["type", "button", 1, "btn", "btn-light", "mx-auto", "border", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "mt-4"], [1, "mb-3"], [1, "mb-3", "cursor-pointer", 2, "float", "right", 3, "click"], [3, "formArrayName"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "aria-describedby", "teamCertNote", "formControlName", "environment", "placeholder", "e.g. staging", "required", "", 1, "form-control", 3, "id"], ["aria-label", "With textarea", "formControlName", "firebase_id", "required", "", 1, "form-control", 3, "id"]], template: function EnvDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EnvDetailsComponent_Template_form_ngSubmit_1_listener() { return ctx.submitEnvConfigs(ctx.envConfigsFormIos.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Scheme Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EnvDetailsComponent_mat_card_7_Template, 15, 3, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EnvDetailsComponent_Template_button_click_9_listener() { return ctx.addNewEnvBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " + Add New Environment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.envConfigsFormIos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.settings.controls);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], styles: [".fab-remove-env[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbnZpcm9ubWVudHMvZW52LWRldGFpbHMvZW52LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Vudmlyb25tZW50cy9lbnYtZGV0YWlscy9lbnYtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhYi1yZW1vdmUtZW52IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EnvDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-env-details',
                templateUrl: './env-details.component.html',
                styleUrls: ['./env-details.component.css'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/environments/env-list/env-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/environments/env-list/env-list.component.ts ***!
  \************************************************************************/
/*! exports provided: EnvListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvListComponent", function() { return EnvListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/global-constants */ "./src/app/utils/global-constants.ts");
/* harmony import */ var src_app_components_environments_env_details_env_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/environments/env-details/env-details.component */ "./src/app/components/environments/env-details/env-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-service */ "./src/app/services/data-service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");












function EnvListComponent_div_0_mat_card_content_6_mat_card_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Firebase App ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const env_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](env_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](env_r5.firebase_id);
} }
function EnvListComponent_div_0_mat_card_content_6_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EnvListComponent_div_0_mat_card_content_6_mat_card_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const scheme_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r6.openEnvDetailsDialog(scheme_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EnvListComponent_div_0_mat_card_content_6_mat_card_1_div_6_Template, 10, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const scheme_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](scheme_r3.scheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", scheme_r3.environment);
} }
function EnvListComponent_div_0_mat_card_content_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EnvListComponent_div_0_mat_card_content_6_mat_card_1_Template, 7, 2, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EnvListComponent_div_0_mat_card_content_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.createNewScheme(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Create New Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.envConfigsIos.environment_settings);
} }
function EnvListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Project Environments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Configure your project schemes and environments here. You can have multiple schemes within a single project, while each scheme can have multiple environments to deploy in. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EnvListComponent_div_0_mat_card_content_6_Template, 4, 1, "mat-card-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.envConfigsIos != null);
} }
class EnvListComponent {
    constructor(formBuilder, dataService, httpService, _snackbar, dialog) {
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.httpService = httpService;
        this._snackbar = _snackbar;
        this.dialog = dialog;
    }
    ngOnInit() {
        // subscribe to current proj
        this.currentProjSub = this.dataService.currentProjectObs.subscribe((project) => {
            if (project != null) {
                this.currentProjectId = project.project_id;
                this.currentProjectPlatform = project.platform;
                // get env list
                this.getEnvConfigs();
            }
        });
    }
    getEnvConfigs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // choose url based on project platform
            var getEnvConfigsURL;
            if (this.currentProjectPlatform == 'ios')
                getEnvConfigsURL = src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_GET_IOS_ENV_CONFIG_URL(this.currentProjectId);
            else
                return; // no android yet
            let resp = yield this.httpService.httpGetWithHeader(getEnvConfigsURL, true);
            if (resp.success) {
                // insert data to form
                if (this.currentProjectPlatform == 'ios') {
                    this.envConfigsIos = resp.data;
                }
                else
                    return;
            }
        });
    }
    openEnvDetailsDialog(scheme) {
        this.dialog.open(src_app_components_environments_env_details_env_details_component__WEBPACK_IMPORTED_MODULE_3__["EnvDetailsComponent"], {
            data: {
                project_id: this.currentProjectId,
                project_platform: this.currentProjectPlatform,
                scheme: scheme,
            },
        });
    }
    createNewScheme() {
        this.dialog.open(src_app_components_environments_env_details_env_details_component__WEBPACK_IMPORTED_MODULE_3__["EnvDetailsComponent"], {
            data: {
                project_id: this.currentProjectId,
                project_platform: this.currentProjectPlatform,
            },
        });
    }
    ngOnDestroy() {
        this.currentProjSub.unsubscribe();
    }
}
EnvListComponent.ɵfac = function EnvListComponent_Factory(t) { return new (t || EnvListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
EnvListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EnvListComponent, selectors: [["app-env-list"]], decls: 1, vars: 1, consts: [["class", "row p-3", 4, "ngIf"], [1, "row", "p-3"], [1, "col", "pb-3"], ["class", "mt-4", 4, "ngIf"], [1, "mt-4"], ["class", "p-4 mb-4", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "mb-4", 3, "click"], [1, "p-4", "mb-4"], [1, "d-flex", "align-items-center"], [1, ""], ["type", "button", 1, "btn", "btn-light", "ml-auto", "border", 3, "click"], ["class", "form-group", 4, "ngFor", "ngForOf"], [1, "form-group"], ["for", "basic-url"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["aria-label", "With textarea", "readonly", "", 1, "form-control"]], template: function EnvListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EnvListComponent_div_0_Template, 7, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentProjectId != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW52aXJvbm1lbnRzL2Vudi1saXN0L2Vudi1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EnvListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-env-list',
                templateUrl: './env-list.component.html',
                styleUrls: ['./env-list.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/global-constants */ "./src/app/utils/global-constants.ts");
/* harmony import */ var src_app_components_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/create-project/create-project.component */ "./src/app/components/create-project/create-project.component.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage-service */ "./src/app/services/local-storage-service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data-service */ "./src/app/services/data-service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");


















function HomeComponent_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_a_27_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const project_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.projectOnClick(project_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r6.name);
} }
function HomeComponent_mat_divider_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-divider");
} }
const _c0 = function () { return ["/git-configs"]; };
const _c1 = function () { return ["/static-configs"]; };
const _c2 = function () { return ["/environments"]; };
const _c3 = function () { return ["/build-template"]; };
const _c4 = function () { return ["/build-history"]; };
function HomeComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-list-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Git Configs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-list-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Project Static Configs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-list-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Project Environments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-list-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Build Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-list-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Build History");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c4));
} }
class HomeComponent {
    constructor(httpService, localStorageService, dataService, dialog, router) {
        this.httpService = httpService;
        this.localStorageService = localStorageService;
        this.dataService = dataService;
        this.dialog = dialog;
        this.router = router;
    }
    ngOnInit() {
        this.getProjectList();
        this.currentProjSub = this.dataService.currentProjectObs.subscribe((project) => (this.currentProject = project));
    }
    //=== http calls
    getProjectList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resp = yield this.httpService.httpGetWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_GET_PROJ_LIST_URL, true);
            if (resp.success) {
                this.projectList = resp.data.project_list;
                // set current project if not selected yet
                var currentProject = this.localStorageService.getCurrentProject();
                if (currentProject == null)
                    currentProject = this.projectList[0];
                this.dataService.setCurrentProject(currentProject, false);
            }
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataService.setIsLoading(true);
            let resp = yield this.httpService.httpGetWithHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_LOGOUT_URL);
            if (resp.success) {
                // clear local storage on logout
                this.localStorageService.clearLocalStorage();
                // navigate to login page
                window.location.href = '/login';
            }
            else {
                this.dataService.setIsLoading(false);
            }
        });
    }
    //=== normal funcs
    createProjectOnClick() {
        this.dialog.open(src_app_components_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_3__["CreateProjectComponent"], { disableClose: false });
    }
    projectOnClick(project) {
        // set current project
        this.dataService.setCurrentProject(project, true);
        this.localStorageService.storeCurrentProject(project);
        // go to git configs if in build details
        // console.log("router = ", this.router.url[0])
        // if (this.router.url)
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.currentProjSub.unsubscribe();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 34, vars: 6, consts: [["color", "primary"], ["mat-icon-button", "", "mat-button", "", "aria-label", "menu", 1, "btn", "text-white", 3, "click"], [1, "ml-auto", "text-small"], ["mat-icon-button", "", "aria-label", "profile", 1, "btn", "text-white", 3, "matMenuTriggerFor"], ["menuProfile", "matMenu"], [1, "dropdown-item", "cursor-pointer", 3, "click"], ["autosize", "", 1, "nav-container", "position-fixed"], ["mode", "side", "opened", "true", 1, "nav-sidenav"], ["drawer", ""], [1, "mb-2", "cursor-pointer", "border", "rounded-pill", 3, "matMenuTriggerFor"], [1, "w-100", "d-flex", "align-items-center"], [1, "ml-auto"], [1, "px-2"], ["menuProjList", "matMenu"], ["class", "dropdown-item cursor-pointer d-flex align-items-center", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "dropdown-item", "cursor-pointer", "d-flex", "align-items-center", 3, "click"], [1, "mx-2", "my-0"], [1, "cursor-pointer", 3, "routerLink"], ["routerLinkActive", "active-link"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Mobile CI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_13_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-drawer-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-drawer", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-menu", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HomeComponent_a_27_Template, 3, 1, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HomeComponent_mat_divider_28_Template, 1, 0, "mat-divider", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_29_listener() { return ctx.createProjectOnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "+ Create New Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, HomeComponent_div_32_Template, 21, 10, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentProject ? ctx.currentProject.name : "Create New Project", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projectList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.projectList ? ctx.projectList.length > 0 : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentProject != null);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["_MatMenu"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatDrawer"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"]], styles: [".nav-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.nav-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.nav-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n\n\n.fab-btm-right[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 60px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUEsUUFBUTs7QUFDUjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5hdi1zaWRlbmF2IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLm5hdi1zaWRlbmF2LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBmYWIgKi9cbi5mYWItYnRtLXJpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDYwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/registration/login/login.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/registration/login/login.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/global-constants */ "./src/app/utils/global-constants.ts");
/* harmony import */ var src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/strings-eng */ "./src/app/utils/strings-eng.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http-service */ "./src/app/services/http-service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data-service */ "./src/app/services/data-service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/local-storage-service */ "./src/app/services/local-storage-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");












class LoginComponent {
    constructor(formBuilder, httpService, dataService, localStorageService, router) {
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.dataService = dataService;
        this.localStorageService = localStorageService;
        this.router = router;
        this.shouldShowPword = false;
        this.loginForm = this.formBuilder.group({
            client_id: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].XMPP_CLIENT_ID,
            client_secret: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].XMPP_CLIENT_SECRET,
            email: '',
            password: '',
        });
        this.regForm = this.formBuilder.group({
            client_id: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].XMPP_CLIENT_ID,
            client_secret: src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].XMPP_CLIENT_SECRET,
            email: '',
            password: '',
        });
    }
    ngOnInit() {
        // redirect to homepage if got access token already
        if (this.localStorageService.getAccessToken() != null)
            this.router.navigate(['/']);
    }
    loginFormOnSubmit(formBody) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataService.setIsLoading(true);
            let resp = yield this.httpService.httpPostNoHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_LOGIN_URL, formBody);
            // save access token then navigate to home
            if (resp.success) {
                this.localStorageService.storeValueToLocalStorage(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].LS_KEY_ACCESS_TOKEN, resp.data.access_token);
                // set first project in list as project id
                let firstProject = resp.data.project_list[0];
                this.dataService.setCurrentProject(firstProject, false);
                window.location.href = '/';
            }
            else {
                this.dataService.setIsLoading(false);
            }
        });
    }
    toggleShowPword() {
        this.shouldShowPword = !this.shouldShowPword;
    }
    regFormOnSubmit(formBody) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataService.setIsLoading(true);
            let resp = yield this.httpService.httpPostNoHeader(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HTTP_REG_URL, formBody);
            this.dataService.setIsLoading(false);
            // show dialog if successful
            if (resp.success) {
                alert(src_app_utils_strings_eng__WEBPACK_IMPORTED_MODULE_3__["StringsEng"].REG_SUCCESS);
                location.reload();
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 38, vars: 3, consts: [[1, "col-10", "col-sm-6", "col-md-5", "col-lg-4", "mx-auto", "my-4"], ["label", "Login"], [1, "px-2", "py-4"], ["ngNativeValidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "loginEmail"], ["type", "email", "id", "loginEmail", "formControlName", "email", "aria-describedby", "loginEmailNote", "required", "", 1, "form-control"], ["id", "loginEmailNote", 1, "form-text", "text-muted"], ["for", "loginPword"], ["type", "password", "formControlName", "password", "id", "loginPword", "minlength", "8", "maxlength", "20", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], ["label", "Register"], ["for", "regEmail"], ["type", "email", "id", "regEmail", "formControlName", "email", "aria-describedby", "regEmailNote", "required", "", 1, "form-control"], ["id", "regEmailNote", 1, "form-text", "text-muted"], ["for", "regPword"], ["formControlName", "password", "id", "regPword", "minlength", "8", "maxlength", "20", "pattern", "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[,.#?!@$%^&*-]).{8,}$", "required", "", 1, "form-control", 3, "type"], ["id", "", 1, "form-text", "text-muted"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "regShowPword", 1, "form-check-input", 3, "change"], ["for", "regShowPword", 1, "form-check-label"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.loginFormOnSubmit(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "We'll never share your email with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-tab", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_19_listener() { return ctx.regFormOnSubmit(ctx.regForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "We'll never share your email with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Password must have at least 8 characters, contain upper case, lower case characters, numbers, and symbols (e.g.: Testing123!)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LoginComponent_Template_input_change_33_listener() { return ctx.toggleShowPword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Show password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.regForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", ctx.shouldShowPword ? "text" : "password");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }, { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/data-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data-service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class DataService {
    constructor() {
        //=== app component
        // for loading animation
        this.isLoadingSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isLoadingObs = this.isLoadingSource.asObservable();
        //=== home component
        // current selected project id
        this.currentProjectSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentProjectObs = this.currentProjectSource.asObservable();
    }
    setIsLoading(isLoading) {
        this.isLoadingSource.next(isLoading);
    }
    setCurrentProject(project, shouldOverwrite) {
        // overwrite current project if need
        if (shouldOverwrite)
            this.currentProjectSource.next(project);
        else if (this.currentProjectSource.getValue() == null)
            this.currentProjectSource.next(project);
    }
    getCurrentProject() {
        return this.currentProjectSource.getValue();
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/http-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http-service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _utils_global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/global-constants */ "./src/app/utils/global-constants.ts");
/* harmony import */ var _utils_strings_eng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/strings-eng */ "./src/app/utils/strings-eng.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/local-storage-service */ "./src/app/services/local-storage-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");










class HttpService {
    constructor(localStorageService, http, router, _snackbar) {
        this.localStorageService = localStorageService;
        this.http = http;
        this.router = router;
        this._snackbar = _snackbar;
    }
    //=== NO ACCESS TOKEN
    httpPostNoHeader(endpoint, body, shouldHideErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var fullURL = _utils_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].HTTP_BASE_URL + endpoint;
            let json = JSON.stringify(body);
            console.log('$endpoint: json', json);
            var resp;
            // do sync http post
            yield this.http
                .post(fullURL, json)
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
        });
    }
    //=== WITH ACCESS TOKEN
    httpGetWithHeader(endpoint, shouldHideErrors, baseUrl, isPlainText) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var fullURL = (baseUrl ? baseUrl : _utils_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].HTTP_BASE_URL) + endpoint;
            var resp;
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.getAccessToken(),
            });
            // append plain text header if needed
            // if (isPlainText == true)
            //   httpHeaders.append('Content-Type', 'text/plain; charset=utf-8');
            // do sync http post
            yield this.http
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
        });
    }
    httpPostWithHeader(endpoint, body, shouldHideErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var fullURL = _utils_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].HTTP_BASE_URL + endpoint;
            let json = JSON.stringify(body);
            console.log('json', json);
            var resp;
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.getAccessToken(),
            });
            // do sync http post
            yield this.http
                .post(fullURL, json, { headers: httpHeaders })
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
        });
    }
    httpPostFormDataWithHeader(endpoint, formData, shouldHideErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var fullURL = _utils_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].HTTP_BASE_URL + endpoint;
            // log form data for chrome and firefox dev
            // for (var pair of formData.entries()) {
            //   console.log(pair[0] + ', ' + pair[1]);
            // }
            var resp;
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                // 'Content-Type': undefined,
                Authorization: 'Bearer ' + this.getAccessToken(),
            });
            // do sync http post
            yield this.http
                .post(fullURL, formData, { headers: httpHeaders })
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
        });
    }
    getAccessToken() {
        // add access token to header
        var accessToken = this.localStorageService.getValueFromLocalStorage(_utils_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].LS_KEY_ACCESS_TOKEN);
        if (accessToken == null) {
            this.router.navigate(['/login']);
        }
        return accessToken;
    }
    handleHttpErrorResp(resp, shouldHideErrors) {
        // handle errors
        if (resp.success != true) {
            let errorStatusCode = resp.error.status;
            // show error snackbar first
            if (errorStatusCode == 400) {
                // 400 - common errors, use error msg
                if (shouldHideErrors != true)
                    this.showHttpSnackbar(_utils_strings_eng__WEBPACK_IMPORTED_MODULE_4__["StringsEng"].getString(resp.error.error.message));
            }
            else {
                // others - generic errors, use error status code
                if (shouldHideErrors != true)
                    this.showHttpSnackbar(_utils_strings_eng__WEBPACK_IMPORTED_MODULE_4__["StringsEng"].getString('E_HTTP_' + resp.error.status));
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
    showHttpSnackbar(message) {
        this._snackbar.open(message, null, {
            duration: _utils_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].SNACKBAR_DURATION_MID,
        });
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/local-storage-service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage-service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/__ivy_ngcc__/fesm2015/ngx-webstorage-service.js");
/* harmony import */ var src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/global-constants */ "./src/app/utils/global-constants.ts");




class LocalStorageService {
    constructor(storage) {
        this.storage = storage;
        this.anotherTodolist = [];
    }
    //=== global funcs
    getValueFromLocalStorage(localStorageKey) {
        return this.storage.get(localStorageKey);
    }
    storeValueToLocalStorage(localStorageKey, stringValue) {
        this.storage.set(localStorageKey, stringValue);
    }
    clearLocalStorage() {
        this.storage.clear();
    }
    //=== get specific keys
    getAccessToken() {
        return this.storage.get(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].LS_KEY_ACCESS_TOKEN);
    }
    getCurrentProject() {
        return this.storage.get(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].LS_KEY_CURRENT_PROJECT);
    }
    //=== set specific keys
    storeCurrentProject(currentProject) {
        this.storage.set(src_app_utils_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].LS_KEY_CURRENT_PROJECT, currentProject);
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"])); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/utils/global-constants.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/global-constants.ts ***!
  \*******************************************/
/*! exports provided: GlobalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConstants", function() { return GlobalConstants; });
class GlobalConstants {
    static HTTP_GET_GIT_CONFIG_URL(projectId) {
        return `project/git_config/${projectId}`;
    }
    static HTTP_GET_SSH_KEY_URL(projectId) {
        return `project/get_ssh_key/${projectId}`;
    }
    static HTTP_GET_IOS_STATIC_CONFIG_URL(projectId) {
        return `project/ios_main_config/${projectId}`;
    }
    static HTTP_GET_IOS_ENV_CONFIG_URL(projectId) {
        return `project/ios_environment_config/${projectId}`;
    }
    static HTTP_GET_IOS_BUILD_TEMPLATE_URL(projectId) {
        return `project/ios_build_config/${projectId}`;
    }
    static HTTP_GET_IOS_BUILD_TEMPLATE_OPTIONS_URL(projectId) {
        return `project/ios_template_option/${projectId}`;
    }
    // build history/details
    static HTTP_GET_BUILD_HISTORY_URL(projectId, offset) {
        return `cicd/build/${projectId}?offset=${offset}`;
    }
    static HTTP_GET_BUILD_DETAILS_URL(buildId) {
        return `cicd/build/id/${buildId}`;
    }
    // jenkins
    static HTTP_GET_JENKINS_BUILD_NUMBER_URL(buildId) {
        return `cicd/build/id/${buildId}?query=build_no`;
    }
    // console output
    static HTTP_GET_CONSOLE_OUTPUT_URL(buildId, platform, jenkinsBuildNumber) {
        return `cicd/build/log/${buildId}?platform=${platform}&jenkins_build_number=${jenkinsBuildNumber}`;
    }
    // build number
    static HTTP_GET_BUILD_NUMBER_URL(projectId) {
        return `project/build_number/${projectId}`;
    }
    static HTTP_GET_IOS_CARTFILE_URL(projectId, folderName) {
        return `carthage/project/${projectId}/folder/${folderName}`;
    }
}
//=== http server configs
// 8081 = cloud
// 8082 = jos local
GlobalConstants.HTTP_BASE_URL = 'http://175.41.155.248:8081/api/v1.0/';
// public static JENKINS_BASE_URL = 'http://175.41.155.248:8080';
GlobalConstants.XMPP_CLIENT_ID = 'CICD330011CICDp01';
GlobalConstants.XMPP_CLIENT_SECRET = 'Npxkillnottoomuch110022yes2';
//=== local storage
GlobalConstants.LS_KEY_ACCESS_TOKEN = 'LS_KEY_ACCESS_TOKEN';
GlobalConstants.LS_KEY_CURRENT_PROJECT = 'LS_KEY_CURRENT_PROJECT';
//=== http endpoints
// registration
GlobalConstants.HTTP_REG_URL = 'authentication/register';
GlobalConstants.HTTP_LOGIN_URL = 'authentication/login';
GlobalConstants.HTTP_LOGOUT_URL = 'authentication/logout';
// projects
GlobalConstants.HTTP_GET_PROJ_LIST_URL = 'project/list';
GlobalConstants.HTTP_CREATE_PROJ_URL = 'project/create';
// git configs
GlobalConstants.HTTP_SET_GIT_CONFIG_URL = 'project/git_config';
GlobalConstants.HTTP_GENERATE_SSH_KEY_URL = 'project/generate_ssh_key';
// static configs
GlobalConstants.HTTP_SET_IOS_STATIC_CONFIG_URL = 'project/ios_main_config';
GlobalConstants.HTTP_SET_IOS_APP_SIGNING_AUTO_URL = 'certificate/upload';
// env configs
GlobalConstants.HTTP_SET_IOS_ENV_CONFIG_URL = 'project/ios_environment_config';
GlobalConstants.HTTP_DELETE_IOS_ENV_CONFIG_URL = 'project/ios_environment_config/delete';
// build template
GlobalConstants.HTTP_SET_IOS_BUILD_TEMPLATE_URL = 'project/ios_build_config';
// create / rebuild / stop build
GlobalConstants.HTTP_CREATE_BUILD_URL = 'cicd/build';
GlobalConstants.HTTP_REBUILD_URL = 'cicd/rebuild';
GlobalConstants.HTTP_STOP_BUILD_URL = 'cicd/build/stop';
GlobalConstants.HTTP_SET_BUILD_NUMBER_URL = 'project/build_number';
// cartfile
GlobalConstants.HTTP_SET_IOS_CARTFILE_URL = 'carthage/build/upload';
//=== snackbar durations
GlobalConstants.SNACKBAR_DURATION_SHORT = 2000;
GlobalConstants.SNACKBAR_DURATION_MID = 3000;
GlobalConstants.SNACKBAR_DURATION_LONG = 4000;
//=== build type
GlobalConstants.BUILD_TYPE_NEW_BUILD = 'BUILD_TYPE_NEW_BUILD';
GlobalConstants.BUILD_TYPE_REBUILD = 'BUILD_TYPE_REBUILD';


/***/ }),

/***/ "./src/app/utils/strings-eng.ts":
/*!**************************************!*\
  !*** ./src/app/utils/strings-eng.ts ***!
  \**************************************/
/*! exports provided: StringsEng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringsEng", function() { return StringsEng; });
class StringsEng {
    static getString(stringId) {
        if (this[stringId] == null)
            return StringsEng.E_HTTP_GENERIC + ' (' + stringId + ')';
        else
            return this[stringId];
    }
    // cancel build
    static CANCEL_BUILD_CONFIRM(buildNumber) {
        return `Are you sure you want to cancel build #${buildNumber}?`;
    }
    static CANCEL_BUILD_SUCCESS(buildNumber) {
        return `Build #${buildNumber} cancelled.`;
    }
}
//=== http generic errors
StringsEng.E_HTTP_GENERIC = 'Something went wrong, please contact support or try again later.';
StringsEng.E_HTTP_401 = 'You have been logged out due to inactivity, please login again.';
StringsEng.E_HTTP_404 = 'Error 404: Not Found. Please contact support or try again later.';
StringsEng.E_HTTP_500 = 'Error 500: Internal Server Error. Please contact support or try again later.';
//=== http error codes (statusCode 400)
StringsEng.E_INVALID_CLIENT = 'Invalid client credentials, please contact support.';
StringsEng.E_VERIFY_ACCOUNT = 'Account not verified, please wait for admin to approve or contact support.';
//=== registration/login
StringsEng.REG_SUCCESS = 'Registration successful! Please check your e-mail to verify, thank you.';
StringsEng.E_INVALID_PASSWORD = 'Invalid email or password, please try again';
//=== projects
StringsEng.CREATE_PROJECT_SUCCESS = 'Project created successfully';
//=== git configs
StringsEng.SET_GIT_CONFIG_SUCCESS = 'Git configs updated successfully';
StringsEng.GENERATE_SSH_CONFIRM = "Generate new SSH key? The previous SSH key will be invalidated, and you'll have to copy/paste it into your Git project repository again.";
StringsEng.SSH_KEY_COPIED = 'SSH Key copied to clipboard!';
StringsEng.SSH_KEY_EMPTY = 'Please make sure you have generated SSH key at least once and copied it to your Git project repository.';
//=== env configs
StringsEng.SET_ENV_CONFIG_SUCCESS = 'Project scheme and environments updated successfully.';
StringsEng.ENV_SETTINGS_EMPTY = 'Please add at least one environment to your scheme.';
StringsEng.ENV_DELETE_CONFIRM = 'Are you sure you want to delete this environment from your scheme? This action cannot be undone.';
StringsEng.ENV_DELETE_SUCCESS = 'Scheme environment deleted successfully.';
//=== static configs
StringsEng.SET_STATIC_CONFIG_SUCCESS = 'Project static configs updated successfully.';
// app signing (auto)
StringsEng.SET_APP_SIGNING_FILES_SUCCESS = 'App signing certificate files updated successfully, please submit the form if you have made changes to signing method (automatic vs. manual).';
StringsEng.APP_SIGNING_FILES_NULL = 'Required app signing files for automatic signing not uploaded yet, please choose the correct files and click on the "upload" button.';
//=== build template
StringsEng.SET_BUILD_TEMPLATE_SUCCESS = 'Build template updated successfully.';
//cartfile
StringsEng.SET_CARTFILE_SUCCESS = 'Cartfile uploaded successfully, now commencing carthage compilation. You can navigate away during this process.';
StringsEng.CARTFILE_NULL = 'Carthage option is enabled - please choose a cartfile or disable this option in the Project Static Configs.';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jayyong/Desktop/Workfolder(Jay)/Website/Codes/mobile-ci/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map