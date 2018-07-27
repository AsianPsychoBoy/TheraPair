import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JoinTherapistsComponent } from './join-therapists/join-therapists.component';
import { JoinPatientsComponent } from './join-patients/join-patients.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { JoinComponent } from './join/join.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'join',
		component: JoinComponent,
		children: [
			{
				path: 'therapist',
				component: SurveyComponent
			},
			{
				path: 'patient',
				component: SurveyComponent
			}
		]
	},
	{
		path: 'sign-in',
		component: SignInComponent
	},
	{
		path: '**',
		redirectTo: '/'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
