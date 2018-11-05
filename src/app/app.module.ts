import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { DashboardComponent } from './dashboards/admin/dashboard/dashboard.component';
import { IvfcentresComponent } from './dashboards/admin/ivfcentres/ivfcentres.component';
import { AddIVFComponent } from './dashboards/admin/add-ivf/add-ivf.component';

import { DashboardComponent as UserDash } from "./dashboards/user/dashboard/dashboard.component";
import { NewapplicationComponent } from './dashboards/user/newapplication/newapplication.component';
import { SentapplicationComponent } from './dashboards/user/sentapplication/sentapplication.component';
import { SettingsComponent } from './dashboards/user/settings/settings.component';
import { AllapplicationComponent } from './dashboards/admin/allapplication/allapplication.component';
import { ArcapplicationComponent } from './dashboards/admin/arcapplication/arcapplication.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IvfcentresComponent,
    AddIVFComponent,
    UserDash,
    NewapplicationComponent,
    SentapplicationComponent,
    SettingsComponent,
    AllapplicationComponent,
    ArcapplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
