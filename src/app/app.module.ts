import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join/join.component';
import { NavComponent } from './nav/nav.component';
import { JoinTherapistsComponent } from './join-therapists/join-therapists.component';
import { JoinPatientsComponent } from './join-patients/join-patients.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    AboutComponent,
    JoinComponent,
    NavComponent,
    JoinTherapistsComponent,
    JoinPatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
