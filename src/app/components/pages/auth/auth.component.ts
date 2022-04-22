import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthData } from 'src/app/models/auth/auth-data.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    isLogin = true;
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

    constructor(private readonly authService: AuthService, private readonly router: Router) {}

    ngOnInit(): void {
    }

    toggleIsLogin() {
        this.isLogin = !this.isLogin;
    }

    onSubmit() {
        this.authData = {
            email: this.authForm.get('email')?.value,
            password: this.authForm.get('password')?.value
        }

        if (this.isLogin) {
            this.authService
                .loginUser(this.authData)
                    .then(() => this.router.navigate(['/my-polls']))
                    .catch((e) => console.log(e.message));
        } else {
            this.toggleIsLogin();
            this.authService
                .registerUser(this.authData)
                    .catch((e) => console.log(e.message));
        }
        

    }

}
