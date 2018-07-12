import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {StorageService} from './storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private storageService: StorageService) {
    }
    onSubmit(form: NgForm) {
        const value = form.value.search;
        this.storageService.addItem(value);
        form.reset();
    }

}
