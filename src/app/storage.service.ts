import {Injectable} from '@angular/core';
import {Note} from './shared/models/note.model';
import { Comment } from './shared/models/comment.model';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class StorageService {
    itemChanged = new Subject<Note[]>();
    private items: Note[] = this.getStorage() || [];
    constructor() {
    }
    private getStorage() {
        return JSON.parse(localStorage.getItem('items'));

    }
    getItems() {
        return this.getStorage();
    }
    getItem(index: number) {
        const storage = JSON.parse(localStorage.getItem('items'));
        return storage[index];
    }
    addItem(value: string) {
        console.log(this.items);
        this.items.push(new Note(value, []));
        this.itemChanged.next(this.items.slice());
        localStorage.setItem('items', JSON.stringify(this.items.slice()));
    }
    addComment(index: number, newComment: string) {
        const comment = new Comment(newComment);
        this.items[index].comments.push(comment);
        this.itemChanged.next(this.items.slice());
        localStorage.setItem('items', JSON.stringify(this.items.slice()));
    }

    deleteItem(index: number) {
        console.log(index);
        this.items.splice(index, 1);
        this.itemChanged.next(this.items.slice());
        localStorage.setItem('items', JSON.stringify(this.items.slice()));
    }



}
