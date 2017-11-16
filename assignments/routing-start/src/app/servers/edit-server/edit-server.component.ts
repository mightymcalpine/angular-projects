import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-gaurd.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  // the feature here is to automatically navigate away upon successful update of the server, and also if
  // the user loads the edit server route/template, makes a change but attempts to navigate away without saving,
  // we want to prevent that action and ask if user really wants to navigate away without saving the changes to
  // to the selected server
  changesSaved = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // using ActivatedRoute to retrieve the data passed in our route/URL
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    /*
        could also use queryParams and fragment as observables, subscribe, and then react to changed
        query parameters
    */

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();

    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    // subscribe route params to the update the id if the params changed
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    // upon successful update of server, we update changesSaved to true, then we want to navigate away
    this.router.navigate(['../'], {relativeTo: this.route});
    // navigate up one level relative to the currently loaded route
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status &&
      !this.changesSaved)) {
      return confirm(`Do you want to confirm the changes made?`);
    } else {
      return true;
    }
  }
}
