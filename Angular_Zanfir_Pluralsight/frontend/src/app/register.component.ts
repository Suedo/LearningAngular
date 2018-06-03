import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    registerData = {}

    constructor(private _authService: AuthService) {}

    post(){
        this._authService.registerUser(this.registerData)
    }

}
