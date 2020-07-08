import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    status: boolean;

    constructor(public auth: AuthService, public route: Router) {
    }

    //implement canActivate method
    canActivate(): boolean {
        this.status = this.auth.isAuthenticated();
        if (this.status == false) {
            this.route.navigate(['login']);
        }
        //check role
        return true;
    }
}