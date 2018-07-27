import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user$: Observable<firebase.User>;

	constructor(public afAuth: AngularFireAuth) {
		this.user$ = afAuth.user;
	}

	login() {
		return from(this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()));
	}
	logout() {
		return from(this.afAuth.auth.signOut());
	}
}
