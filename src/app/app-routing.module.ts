import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JoinTherapistsComponent } from './join-therapists/join-therapists.component';
import { JoinPatientsComponent } from './join-patients/join-patients.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { JoinComponent } from './join/join.component';
import { SurveyComponent } from './survey/survey.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
	{
		path: 'home',
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
				component: SignUpComponent,
				data: { surveyType: 'therapist' }
			},
			{
				path: 'patient',
				component: SignUpComponent,
				data: { surveyType: 'patient' }
			}
		]
	},
	{
		path: 'sign-in',
		component: SignInComponent
	},
	{
		path: 'survey',
		component: SurveyComponent
	},
	{
		path: '**',
		redirectTo: '/home'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
