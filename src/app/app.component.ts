import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {StorageService} from './storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private storageService: StorageService) {

    }
    ngOnInit() {

    }
    onSubmit(form: NgForm) {
        const value = form.value.search;
        this.storageService.addItem(value);
        form.reset();
    }

}
