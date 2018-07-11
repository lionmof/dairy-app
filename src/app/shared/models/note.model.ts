import {Comment} from './comment.model';

export class Note {
    constructor(public name: string, public comments: Comment[]) {
    }
    // get CommentLength() {
    //     console.log('getCommentLength');
    //     return '22222222';
    // }
}
