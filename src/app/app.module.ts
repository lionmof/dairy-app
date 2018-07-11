import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing.module';

import {AppComponent} from './app.component';
import {ListItemComponent} from './comments/comments-list.component';
import {StorageService} from './storage.service';
import {DairyItemsComponent} from './notes/notes.component';
import {ListStartComponent} from './comments/comments-start/comments-start.component';


@NgModule({
    declarations: [
        AppComponent,
        DairyItemsComponent,
        ListItemComponent,
        ListStartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule
    ],
    providers: [StorageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
