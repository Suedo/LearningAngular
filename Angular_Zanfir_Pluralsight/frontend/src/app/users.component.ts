import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'users',
    template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title><h4>Users List</h4></mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <div *ngFor="let user of _apiService.users">
                <p [routerLink]="['/profile', user._id]" style="cursor: pointer">{{user.email}}</p>
            </div>
        </mat-card-content>
    </mat-card>
    `

})
export class UsersComponent {

    constructor(private _apiService: ApiService) { }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._apiService.getUsers()
    }
}
