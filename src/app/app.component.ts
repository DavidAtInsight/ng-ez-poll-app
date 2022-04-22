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
    this.authService.isAuthListener(); //REMOVE??

    this.authSubscription = this.authService.authUserOld.subscribe(authUser => {
        this.appUser = authUser;
      }) //REMOVE???
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.appUser = this.appUser;//REMOVE??
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();//REMOVE??
  }

}
