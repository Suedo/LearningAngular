import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

/**
 * RESTful fetches to be handled by this service, and will be called from main logic
 */
@Injectable()
export class ApiService {

  messages = []
  users = []
  // profile = {} // this is specific to each call, so not gonna have this as a class property
  
  constructor(private http: Http) { }
  getMessages() {
    this.http.get("http://localhost:3000/posts").subscribe(res => {
      this.messages = res.json()
      // console.log(res)
    });
  }
  getUsers() {
    this.http.get("http://localhost:3000/users").subscribe(res => {
      this.users = res.json();
    });
  }
  getProfile(id) {
    return this.http.get("http://localhost:3000/profile/" + id)
    // a specific profile is not a class property, so delegating below code to component
    // .subscribe(res => {
    //   this.profile = res.json();
    // });
  }
}
