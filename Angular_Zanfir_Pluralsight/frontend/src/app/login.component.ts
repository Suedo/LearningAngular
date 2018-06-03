import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'login',
    template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title><h4>Login New User</h4></mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <form>
                <mat-form-field>
                    <input [(ngModel)]="loginData.email" name="email" matInput placeholder="email" value="john@doe.com" type="email">
                </mat-form-field>

                <mat-form-field>
                    <input [(ngModel)]="loginData.password" name="password" matInput placeholder="enter password" type="password">
                </mat-form-field>
                <button (click)="login()" mat-raised-button color="primary">login</button>
            </form>
        </mat-card-content>
    </mat-card>
    `



})
export class LoginComponent {

    loginData = {}

    constructor(private _authService: AuthService) { }

    login() {
        this._authService.loginUser(this.loginData)
    }

}
