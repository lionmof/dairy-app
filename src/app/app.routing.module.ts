import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListItemComponent} from './comments/comments-list.component';
import {ListStartComponent} from './comments/comments-start/comments-start.component';



const appRoutes: Routes = [
    { path: '', component: ListStartComponent },
    { path: ':id', component: ListItemComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
