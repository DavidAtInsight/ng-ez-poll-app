import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from './services/auth/auth.service';
import { User } from 'src/app/models/auth/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  appUser?: User;
  authSubscription = new Subscription();
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isAuthListener();

    this.authSubscription = this.authService.authUser.subscribe(authUser => {
        this.appUser = authUser;
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.appUser = this.appUser;
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
