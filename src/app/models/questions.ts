// export const therapistQuestions: Question[] = [
// 	{
// 		question: '',
// 		hasOptions: false,
// 		type: 'string'
// 	}
// ];

// export const patientsQuestions: Question[] = [
// 	{
// 		question: '',
// 		hasOptions: false,
// 		type: 'string'
// 	}
// ];

interface Question {
	question: string;
	hasOptions: boolean;
	type: 'number' | 'string';
	options?: number[] | string[];
}

interface Answer {
	userId: string;
	answer: string | number;
}
