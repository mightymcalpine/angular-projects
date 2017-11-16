import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // this type of approach is especially useful/effective when considering asychronous code
    this.route.data.subscribe(
      (data: Date) => {
        this.server = data['server'];
      }
    )
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    //     // once you have the data retrieved from the route, in this case, the id, you can react or do something
    //     // based on those changes
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // )
  }

  onEdit(id) {
    // relative path appends to the currently loaded route which is servers/id
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
