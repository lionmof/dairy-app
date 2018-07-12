import {Component, OnDestroy, OnInit} from '@angular/core';
import {StorageService} from '../storage.service';
import {Subscription} from 'rxjs/Subscription';
import {Note} from '../shared/models/note.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'app-comments',
    templateUrl: './comments-list.component.html',
    styleUrls: ['./comments-list.component.css']
})
export class ListItemComponent implements OnInit, OnDestroy {
    commentVal: string;
    commentItem: Note;
    commentsLength: number;
    id: number;
    private subscription: Subscription;

    constructor(private storageService: StorageService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.commentsLength = this.id;
                    this.commentItem = this.storageService.getItem(this.id);
                }
            );
        this.subscription = this.storageService.itemChanged
            .subscribe(
                (items) => {
                    this.commentItem = items[this.id];
                }
            );
    }

    addComment(val: string) {
        if (this.commentVal.trim().length > 1 ) {
            this.storageService.addComment(this.id, val);
            this.commentVal = null;
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
