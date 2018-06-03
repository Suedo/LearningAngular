import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

/**
 * RESTful fetches to be handled by this service, and will be called from main logic
 */
@Injectable()
export class AuthService {

    messages = []

    constructor(private http: Http) { }

    registerUser(registerData) {
        this.http.post("http://localhost:3000/register", registerData).subscribe(res => {
        });
    }
    loginUser(loginData) {
        this.http.post("http://localhost:3000/login", loginData).subscribe(res => {
            console.log(res);
            // take the json response, get it's token property and store it againts a 'token' key 
            localStorage.setItem('token', res.json().token)
        });
    }
}
