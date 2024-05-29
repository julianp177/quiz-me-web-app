import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MainComponent} from "./main/main.component";
import { StartComponent } from './start/start.component';
import { ProfileComponent } from './profile/profile.component';
import { LearnComponent } from './learn/learn.component';
import { HowtoComponent } from './howto/howto.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { QuestionPoolComponent } from './question-pool/question-pool.component';
import { TopbarComponent } from './topbar/topbar.component';
import { StatsComponent } from './stats/stats.component';
import { ResultComponent } from './result/result.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    StartComponent,
    ProfileComponent,
    LearnComponent,
    HowtoComponent,
    SettingsComponent,
    LoginComponent,
    QuestionPoolComponent,
    TopbarComponent,
    StatsComponent,
    ResultComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
