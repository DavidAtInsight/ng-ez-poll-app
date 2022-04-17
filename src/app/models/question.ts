import { Option } from './option';
import { Response } from './response';

export interface Question {
    id: string,
    pollId: string,
    text: string,
    options: Option[],
    responses: Response[]
}