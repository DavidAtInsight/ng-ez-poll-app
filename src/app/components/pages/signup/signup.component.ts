import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthData } from 'src/app/models/auth/auth-data.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    signupForm = new FormGroup({
        signupEmail: new FormControl('', [
        Validators.required,
        Validators.email
        ]),
        signupPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
        ])
    })
    authData: AuthData = {
        email: '',
        password: ''
    };

    constructor(private readonly authService: AuthService, private readonly router: Router) { }

    ngOnInit(): void {
    }

    onSubmit() {
        this.authData = {
            email: this.signupForm.get('signupEmail')?.value,
            password: this.signupForm.get('signupPassword')?.value
        }
        
        this.authService
            .registerUser(this.authData)
                .then(() => this.router.navigate(['/login']))
                .catch((e) => console.log(e.message));
    }

}
