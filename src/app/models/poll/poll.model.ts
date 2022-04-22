import { Question } from './question.model';

export interface Poll {
    id?: string; //assigned by firestore
    userId: string; //pulled from UserState
    name: string; //form input
    description: string; //form input
    isOpen: boolean; //form input
    isPublic: boolean; //form input
    questions: Question[]; //see model
}