import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from 'src/app/models/auth/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
    appUser?: User;
    authSubscription = new Subscription();

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        // this.authSubscription = this.authService.authUser.subscribe(authUser => {
        //     this.appUser = authUser;
        //   })
    }

    ngOnDestroy() {
        this.authSubscription.unsubscribe();
      }

}
