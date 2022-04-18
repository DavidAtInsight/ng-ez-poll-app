import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {
    
    constructor(private readonly authService: AuthService, private readonly router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuth()) {
            this.router.navigate(['/dashboard']);
            return false;
        }
        else {
            return true;
        }
    }
}