import { LoginService } from './login.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router, private loginService:LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.loginService.isLogged()) {
            return true;
        }else{
            this.router.navigate(['/login']);
            return false;
        }
    }
}
