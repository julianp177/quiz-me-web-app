import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./login/login.component";
import {StartComponent} from "./start/start.component";
import {ProfileComponent} from "./profile/profile.component";
import {SettingsComponent} from "./settings/settings.component";
import {QuestionPoolComponent} from "./question-pool/question-pool.component";
import {LearnComponent} from "./learn/learn.component";
import {HowtoComponent} from "./howto/howto.component";
import {StatsComponent} from "./stats/stats.component";
import {CreateComponent} from "./create/create.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'question-pool',
    component: QuestionPoolComponent
  },
  {
    path: 'learn',
    component: LearnComponent
  },
  {
    path: 'howto',
    component: HowtoComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'play',
    component: MainComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
