import { Injectable } from '@angular/core';

//import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { BehaviorSubject } from 'rxjs';

import { AuthData } from 'src/app/models/auth/auth-data.model';
import { User } from 'src/app/models/auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private isAuthenticated: boolean = false;
  private user: User;
  observableUser: BehaviorSubject<User>;

  constructor(private auth: AngularFireAuth) {
    this.user = { email: '', userId: '', isAuthenticated: false }
    this.observableUser = new BehaviorSubject<User>(this.user)
   }

  isAuthListener() {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.user.isAuthenticated = true;
      }
      else {
        this.user.isAuthenticated = false;
      }
    })
  }
  
  loginUser(authData: AuthData) {
    this.user.email = authData.email;
    return this.auth.signInWithEmailAndPassword(authData.email, authData.password);
  }

  registerUser(authData: AuthData) {
    return this.auth.createUserWithEmailAndPassword(authData.email, authData.password);
  }

  logoutUser() {
    this.user.email = '';
    return this.auth.signOut();
  }

  isAuth() {
    return this.user.isAuthenticated;
  }

}
