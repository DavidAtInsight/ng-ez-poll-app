import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthData } from 'src/app/models/auth/auth-data.model';
import { selectUserAuthStatus } from 'src/app/state/user/user.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    private isAuthenticated$ = this.store.select(selectUserAuthStatus);
    isLogin = true;
    isLoading = false;
    isAuthError = false;
    isPasswordVisible = false;
    password?: string;
    authForm = new FormGroup({
        email: new FormControl('', [
        Validators.required,
        Validators.email
        ]),
        password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
        ])
    })
    authData: AuthData = {
        email: '',
        password: ''
    };
    
    constructor(private store: Store<AppState>, private readonly authService: AuthService, private readonly router: Router) {}

    ngOnInit(): void {
    }

    toggleIsLogin() {
        this.isLogin = !this.isLogin;
    }

    onSubmit() {
        this.isLoading = true;
        
        this.authData = {
            email: this.authForm.get('email')?.value,
            password: this.authForm.get('password' || 'text')?.value
        }

        if (this.isLogin) {
            this.authService
                .loginUser(this.authData)
                    .catch((e) => {
                        console.log(e.message);
                        this.isAuthError = true;
                        this.isLoading = false;
                    });

            this.isAuthenticated$.subscribe(() => this.router.navigate([this.authService.redirectUrl]));
        } else {
            this.toggleIsLogin();
            this.authService
                .registerUser(this.authData)
                    .catch((e) => console.log(e.message));
        }
    }

}
