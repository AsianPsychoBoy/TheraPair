import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { combineLatest, from, Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { ThrowStmt } from '../../../node_modules/@angular/compiler';

@Injectable({
	providedIn: 'root'
})
export class QuestionaireService {

	private questionsCollection: AngularFirestoreCollection<Question>;

	private user: firebase.User;

	constructor(private afs: AngularFirestore, private auth: AuthService) {
		this.questionsCollection = this.afs.collection<Question>('questions');
		this.auth.user$.subscribe(u => { this.user = u; });
	}

	getSurvey(): Observable<{ question: Question, answer: Answer }[]> {
		return this.questionsCollection.snapshotChanges()
			.pipe(
				flatMap(actions => {
					return combineLatest(actions.map(a => {
						const questionId = a.payload.doc.id;
						const userId = this.user.uid;
						const answerDoc = this.afs.doc<Answer>(`questions/${questionId}/answers/${userId}`);
						const questionDoc = this.afs.doc<Question>(`questions/${questionId}`);
						return combineLatest(answerDoc.valueChanges(), questionDoc.valueChanges())
						.pipe(
							map(qna => {
								return {
									question: qna[1],
									answer: qna[0]
								};
							})
						);
					}));
				})
			);
	}

	submit(submission: { answer: Answer, questionId: string }[]): Observable<any> {
		return combineLatest(
			submission.map(ans => {
				const answerCollection = this.afs.collection<Answer>(`questions/${ans.questionId}/answers`);
				return from(answerCollection.add(ans.answer));
			})
		);
	}
}

interface QuestionWithId extends Question { id: string; }
