import {Comment} from './comment.model';

export class Note {
    constructor(public name: string, public comments: Comment[]) {
    }
}
