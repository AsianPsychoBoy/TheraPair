import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { auth } from 'firebase';
import { Observable, from } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user$: Observable<User>;

	constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) {
		this.user$ = afAuth.user.pipe(
			flatMap(user => {
				return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
			}),
		);
	}

	login() {
		return from(this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()));
	}

	logout() {
		return from(this.afAuth.auth.signOut());
	}

	setRole(uid: string, role: 'therapist' | 'patient') {
		this.afs.doc<User>(`users/${uid}`).update({ role });
	}

	completeSurvey(uid: string, completedSurvey: boolean) {
		this.afs.doc<User>(`users/${uid}`).update({ completedSurvey });
	}
}
