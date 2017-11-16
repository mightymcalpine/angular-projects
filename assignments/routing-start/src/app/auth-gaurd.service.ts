import { AuthService } from './auth.service';

import { CanActivate, CanActivateChild, ActivatedRouteSnapshot,
  RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


/*
  Guards is a feature of Angular

  this service is designed to guard or set apart certain code to run at another time
  in this case, we're gaurding a route, that cannot be accessed unless a user is logged in
  my auth.service file is a little faux login module

  so this gaurd service is set to hide or protect a route unless a user is logged in
*/

@Injectable()

export class AuthGaurd implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  // canActivate returns/resolves to a bool, either Observable or Promise asynchronously or if it is running entirely
  // on the client side, returns a bool
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if(authenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      );
      // so use the injected auth.service to check the logged in state, if true, we expose the code
      // that our gaurd is shielding, if logged in state returns false, then we force the user off of
      // route they were trying to access, in case, force root route
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state);
  }
}
