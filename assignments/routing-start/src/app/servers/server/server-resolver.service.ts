import { Injectable } from '@angular/core';
import { ServersService } from './../servers.service';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// generally create an interface in it's own file, then import
interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()

export class ServerResolver implements Resolve<Server> {
  constructor(private serverService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Server> | Promise<Server> | Server {
      return this.serverService.getServer(+route.params['id']);
  }
}
