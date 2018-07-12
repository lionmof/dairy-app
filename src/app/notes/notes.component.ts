import {Component, OnDestroy, OnInit} from '@angular/core';
import {StorageService} from '../storage.service';
import {Subscription} from 'rxjs/Subscription';
import {Note} from '../shared/models/note.model';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css']
})
export class DairyItemsComponent implements OnInit, OnDestroy {
    dairyItems: Note[];
    private subscription: Subscription;

    constructor(private storageService: StorageService) {
    }

    ngOnInit() {
        this.dairyItems = this.storageService.getItems();
        this.subscription = this.storageService.itemChanged
            .subscribe(
                (items) => {
                    this.dairyItems = items;
                }
            );
    }

    onDeleteItem(index: number) {
        this.storageService.deleteItem(index);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
