import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { map, Observable, Subject, tap } from 'rxjs';

import { AuthData } from 'src/app/models/auth/auth-data.model';
import { User } from 'src/app/models/auth/user.model';
import { PollService } from '../poll/poll.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticated = false;//REMOVE??
    public authUserOld: Subject<User>;//REMOVE??

    constructor(private auth: AngularFireAuth, private pollService: PollService) {
        this.authUserOld = new Subject<User>();
    }

    getAuthUser(): Observable<User> {
        return (this.auth.authState
            .pipe(map(user => {
                if (user) {
                    return { 
                        email: user.email, 
                        userId: user.uid, 
                        isAuthenticated: true
                    } as User;
                } else {
                    this.pollService.cancelSubscriptions();
                    
                    return {
                        email: '',
                        userId: '',
                        isAuthenticated: false
                    } as User;
                }
            }))
        );
    }

    //REMOVE?? if ngrx manages user state, this will be replaced with method above
    isAuthListener() {
        this.auth.authState.subscribe(user => {
        if (user) {
            this.isAuthenticated = true;

            this.authUserOld.next({ 
                email: user.email, 
                userId: user.uid, 
                isAuthenticated: this.isAuthenticated
            });
        }
        else {
            this.isAuthenticated = false;

            this.authUserOld.next({ 
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

    //REMOVE?? if ngrx manages user state, auth status can be checked by registering to the store
    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }

}
