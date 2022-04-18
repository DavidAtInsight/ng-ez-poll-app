import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //let { width } = useWindowDimensions() //replace with ng resize method
  isAuth: boolean = false; 

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.observableUser.subscribe(user => {
        this.isAuth = user.isAuthenticated;
    })
  }

  get isUserAuth(): boolean {
    return this.authService.isAuth();
  }

  logout() {
    this.isAuth = false;
    this.authService.
      logoutUser().
      then(() => this.router.navigate(['/'])).
      catch((e) => console.log(e.message));
  }

}
