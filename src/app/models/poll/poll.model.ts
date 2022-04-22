import { Question } from './question.model';

export interface Poll {
    id?: string; //assigned by firestore
    userId: string; //pulled from UserState
    name: string; //form input
    description: string; //form input
    isOpen: boolean; //form input
    isPublic: boolean; //form input
    likeCount: number; //from input
    questions: Question[]; //see model
}