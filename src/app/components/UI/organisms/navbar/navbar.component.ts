import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from 'src/app/services/auth/auth.service';
import { loadUser } from 'src/app/state/user/user.actions';
import { selectUserAuthStatus } from 'src/app/state/user/user.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private screenWidth?: number;
    isSmallView = false;
    isAuthenticated$ = this.store.select(selectUserAuthStatus);

    constructor(private store: Store<AppState>, private authService: AuthService, private router: Router) { 
        this.getScreenSize();
    }

    ngOnInit(): void {
        this.store.dispatch(loadUser());
    }

    @HostListener('window:resize', ['$event'])
    getScreenSize() {
          this.screenWidth = window.innerWidth;
          if (this.screenWidth < 429) {
              this.isSmallView = true;
          } else {
              this.isSmallView = false;
          }
    }

    logout(): void {
        this.authService
            .logoutUser()
                .then(() => this.router.navigate(['/']))
                .catch((e) => console.log(e.message));
    }

}
