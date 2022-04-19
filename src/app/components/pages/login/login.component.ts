import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthData } from 'src/app/models/auth/auth-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    loginEmail: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    loginPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })
  authData?: AuthData;

  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  ngOnInit(): void {
  }

  login() {
    this.authData = {
      email: this.loginForm.get('loginEmail')?.value,
      password: this.loginForm.get('loginPassword')?.value
    }
    
    this.authService.
      loginUser(this.authData).
      then(() => this.router.navigate(['/dashboard'])).
      catch((e) => console.log(e.message));
  }

}
