export interface User {
	uid: string;
	displayName: string;
	email: string;
	role: 'therapist' | 'patient' | 'unset';
	completedSurvey: boolean;
}
