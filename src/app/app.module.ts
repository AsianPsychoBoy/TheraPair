import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { JoinTherapistsComponent } from './join-therapists/join-therapists.component';
import { JoinPatientsComponent } from './join-patients/join-patients.component';

import { AuthService } from './services/auth.service';

import { environment } from '../environments/environment';
import { SurveyComponent } from './survey/survey.component';
import { JoinComponent } from './join/join.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
	AppComponent,
	HomeComponent,
	SignInComponent,
	AboutComponent,
	NavComponent,
	JoinTherapistsComponent,
	JoinPatientsComponent,
	SurveyComponent,
	JoinComponent,
	SignUpComponent,
	FooterComponent,
	DashboardComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	AngularFireModule.initializeApp(environment.firebase),
	AngularFireAuthModule,
	AngularFireStorageModule,
	AngularFirestoreModule,
	CollapseModule.forRoot()
  ],
  providers: [
	  AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
