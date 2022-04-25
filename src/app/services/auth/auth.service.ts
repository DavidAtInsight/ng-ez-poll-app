import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { map, Observable } from 'rxjs';

import { AuthData } from 'src/app/models/auth/auth-data.model';
import { User } from 'src/app/models/auth/user.model';
import { PollService } from '../poll/poll.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    redirectUrl = '/';

    constructor(private auth: AngularFireAuth, private pollService: PollService) { }

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
    
    loginUser(authData: AuthData) {
        return this.auth.signInWithEmailAndPassword(authData.email, authData.password);
    }

    registerUser(authData: AuthData) {
        return this.auth.createUserWithEmailAndPassword(authData.email, authData.password);
    }

    logoutUser() {
        return this.auth.signOut();
    }

}
