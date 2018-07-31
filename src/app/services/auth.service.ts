import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { auth } from 'firebase';
import { Observable, from } from 'rxjs';
import { flatMap, map, switchMap } from 'rxjs/operators';
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

	loginWithGoogle() {
		return from(this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()))
			.pipe(
				switchMap(u => {
					return this.user$;
				}),
				map(u => {
					if (!u) {
						throw new Error('You have not signed up.');
					} else {
						return u;
					}
				})
			);
	}

	logout() {
		return from(this.afAuth.auth.signOut());
	}

	signUpWithGoogle() {
		return from(this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()))
			.pipe(
				flatMap(u => {
					if (u.additionalUserInfo.isNewUser) {
						return this.afs.doc<User>(`users/${u.user.uid}`).set({
							uid: u.user.uid,
							displayName: u.user.displayName,
							email: u.user.email,
							role: 'unset',
							completedSurvey: false
						});
					} else {
						throw new Error('You have already signed up.');
					}
				}),
				switchMap(() => this.user$)
			);
	}

	setRole(uid: string, role: 'therapist' | 'patient') {
		this.afs.doc<User>(`users/${uid}`).update({ role });
	}

	completeSurvey(uid: string, completedSurvey: boolean) {
		this.afs.doc<User>(`users/${uid}`).update({ completedSurvey });
	}
}

// interface SignUpOptions {
// }
