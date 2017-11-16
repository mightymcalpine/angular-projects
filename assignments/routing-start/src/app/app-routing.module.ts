import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGaurd } from './auth-gaurd.service';
import { CanDeactivateGaurd } from './servers/edit-server/can-deactivate-gaurd.service';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] },
  // adding additional parameters to a route dynamically
  // we use the canActivate method from our AuthGaurd service (this uses/is a gaurd) to shield
  // any routes we desire
  // Any gaurds applied via canActivate, here AuthGaurd, will apply to all child routes as well
  // now we've implemented canActivateChild, AuthGaurd is coded with both and can gaurd either
  // all routes, where applied, or just the child routes, as we've now done
  {
    path: 'servers',
    // canActivate: [AuthGaurd],
    canActivateChild: [AuthGaurd],
    component: ServersComponent,
    children: [
    { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
    { path: ':id/:edit', component: EditServerComponent, canDeactivate: [CanDeactivateGaurd] }
    ]
  },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page Not Found!!!'} },
  // { path: 'not-found', component: PageNotFoundComponent },
  // this path is a catch-all of unknown/undeclared routes, in this case, we redirect
  { path: '**', redirectTo: 'not-found' },
  // redirecting, pathMatching options
      // { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
]

@NgModule({
  imports: [
    // this registers our routes from appRoutes across our application
    // config our RouterModule with forRoot() passing in our appRoutes
    RouterModule.forRoot(appRoutes),
    // RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  // now we export our config'ed RouterModule
  exports: [RouterModule]
})

export class AppRoutingModule {

}
