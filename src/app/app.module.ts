import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// UI
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';

// services
import { AppRoutingModule } from './app-routing.module';
import { StorageServiceModule } from  'ngx-webstorage-service';
import { LocalStorageService } from  './services/local-storage-service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataService } from './services/data-service';
import {HttpService} from './services/http-service';

// main landing page - route to respective pages based on session in localStorage
import { AppComponent } from './app.component';

// pages
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/registration/login/login.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { StaticConfigsComponent } from './components/configs/static-configs/static-configs.component';
import { GitConfigsComponent } from './components/configs/git-configs/git-configs.component';
import { EnvListComponent } from './components/environments/env-list/env-list.component';
import { EnvDetailsComponent } from './components/environments/env-details/env-details.component';
import { BuildHistoryComponent } from './components/build/build-history/build-history.component';
import { BuildTemplateComponent } from './components/build/build-template/build-template.component';
import { BuildComponent } from './components/build/build/build.component';
import { BuildDetailComponent } from './components/build/build-detail/build-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateProjectComponent,
    StaticConfigsComponent,
    GitConfigsComponent,
    EnvListComponent,
    EnvDetailsComponent,
    BuildHistoryComponent,
    BuildTemplateComponent,
    BuildComponent,
    BuildDetailComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatListModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    ClipboardModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  providers: [
    LocalStorageService,
    DataService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
