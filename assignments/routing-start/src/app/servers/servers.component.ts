import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // here we use a relative path which in this config tries to resolve servers/servers
    // which doesn't exist in our app.module router config, we pass an extra arg to the navigate method,
    // an object with the keyword relativeTo, which we use to define relative to what path?
    // in this case, we said relative to this.route - which we defined with the ActivatedRoute - which
    // of couse is the current active route, in this case, localhost:4200/servers
    // so this code breaks the app because it appends a relative path to the current activated route
    // which resolves to localhost:4200/servers/servers - which as we said, doesn't exit
    // but you could set the relativeTo to something other than this.route or the current activatedRoute
    // **********
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
