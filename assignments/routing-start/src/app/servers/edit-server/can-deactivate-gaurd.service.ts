import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

//
// the interface defines the type (and arguments) of a methods or a properties
// the interface does not contain any logic, only later when the interface is imported somewhere,
// then any properties or methods defined by the interface will be called, logic is then added
// which adheres to the type definition perscribed in the interface
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// CanDeactive is an interface provided by @angular/router, here we give it the type of our own interface
// which is CanComponentDeactivate
export class CanDeactivateGaurd implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                  return component.canDeactivate();
                }
                // the ? on nextState makes it an optional argument
}
