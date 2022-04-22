import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from 'src/app/services/auth/auth.service';
import { loadUser } from 'src/app/state/user/user.actions';
import { selectUser } from 'src/app/state/user/user.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    currentUser$ = this.store.select(selectUser);

    constructor(private store: Store<AppState>, private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.store.dispatch(loadUser());
    }

    logout(): void {
        this.authService
            .logoutUser()
                .then(() => this.router.navigate(['/']))
                .catch((e) => console.log(e.message));
    }

}
