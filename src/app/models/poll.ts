import { Question } from './question';

export interface Poll {
    id: string,
    userId: string,
    name: string,
    description: string,
    isOpen: boolean,
    isPublic: boolean,
    questions: Question[]
}