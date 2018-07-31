import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

	constructor(private auth: AuthService, private router: Router) { }

	ngOnInit() {
	}

	signUp() {

	}

	signUpWithGoogle() {
		this.auth.signUpWithGoogle()
		.subscribe(
			user => {
				this.router.navigate(['dashboard', user.uid]);
			}
		);
	}

}
