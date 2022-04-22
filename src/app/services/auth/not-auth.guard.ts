import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable, map } from "rxjs";

import { AuthService } from "./auth.service";
import { selectUserAuthStatus } from 'src/app/state/user/user.selectors';
import { AppState } from 'src/app/state/app.state';

@Injectable({
    providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
    
    constructor(private store: Store<AppState>, private readonly router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.store.select(selectUserAuthStatus).pipe(
            map((isAuthenticated) => {
                if(isAuthenticated) {
                    return true;
                }

                return this.router.createUrlTree(['/auth']);
            })
        );
    }
}