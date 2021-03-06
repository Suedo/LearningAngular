import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { MessagesComponent } from './messages.component';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile.component';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';


const routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile/:id', component: ProfileComponent }
]

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, RegisterComponent, LoginComponent, UsersComponent, ProfileComponent
  ],
  imports: [
    BrowserModule, HttpModule, MatButtonModule, MatCardModule, MatToolbarModule, RouterModule.forRoot(routes),
    MatInputModule, BrowserAnimationsModule, FormsModule, MatListModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
