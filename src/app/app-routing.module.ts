import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import pages for routing
import { LoginComponent } from './components/registration/login/login.component';
import { GitConfigsComponent } from './components/configs/git-configs/git-configs.component';
import { StaticConfigsComponent } from './components/configs/static-configs/static-configs.component';
import { EnvListComponent } from './components/environments/env-list/env-list.component';
import { BuildHistoryComponent } from './components/build/build-history/build-history.component';
import { BuildDetailComponent } from './components/build/build-detail/build-detail.component';
import { BuildComponent } from './components/build/build/build.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login or Sign up' },
  },
  {
    path: '',
    component: BuildHistoryComponent,
    data: { title: 'Simplifying CI' },
  },
  {
    path: 'git-configs',
    component: GitConfigsComponent,
    data: { title: 'Git Configs' },
  },
  {
    path: 'static-configs',
    component: StaticConfigsComponent,
    data: { title: 'Project Static Configs' },
  },
  {
    path: 'environments',
    component: EnvListComponent,
    data: { title: 'Project Environments' },
  },
  {
    path: 'build-template',
    component: BuildComponent,
    data: { title: 'Build Template' },
  },
  {
    path: 'build-history',
    component: BuildHistoryComponent,
    data: { title: 'Build History' },
  },
  {
    path: 'build-detail/:build_id',
    component: BuildDetailComponent,
    data: { title: 'Build Details' },
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
