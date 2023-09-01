import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/pages/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user = localStorage.getItem('currentUser');
        if (user && JSON.parse(user).isAdmin == true) {
            // logged in so return true

            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/pages/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}