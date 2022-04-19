import { Injectable } from '@angular/core';

//import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Subject } from 'rxjs';

import { AuthData } from 'src/app/models/auth/auth-data.model';
import { User } from 'src/app/models/auth/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticated = false;
    public authUser: Subject<User>;

    constructor(private auth: AngularFireAuth) {
        this.authUser = new Subject<User>()
    }

    isAuthListener() {
        this.auth.authState.subscribe(user => {
        if (user) {
            this.isAuthenticated = true;

            this.authUser.next({ 
                email: user.email, 
                userId: user.uid, 
                isAuthenticated: this.isAuthenticated
            });
        }
        else {
            this.isAuthenticated = false;

            this.authUser.next({ 
                email: '', 
                userId: '', 
                isAuthenticated: this.isAuthenticated
            });
        }
        })
    }
    
    loginUser(authData: AuthData) {
        return this.auth.signInWithEmailAndPassword(authData.email, authData.password);
    }

    registerUser(authData: AuthData) {
        return this.auth.createUserWithEmailAndPassword(authData.email, authData.password);
    }

    logoutUser() {
        return this.auth.signOut();
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }

}
