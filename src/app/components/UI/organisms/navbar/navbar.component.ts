import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

import { User } from 'src/app/models/auth/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  //let { width } = useWindowDimensions() //replace with ng resize method
  isAuth?: boolean; 

  @Input() appUser?: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isAuth = this.appUser?.isAuthenticated;
  }

  logout(): void {
    this.authService.
      logoutUser().
      then(() => this.router.navigate(['/'])).
      catch((e) => console.log(e.message));
  }

}
