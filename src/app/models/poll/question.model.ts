import { Option } from './option.model';
import { Response } from './response.model';

export interface Question {
    id: string;
    pollId: string;
    text: string;
    options: Option[];
    responses: Response[];
}