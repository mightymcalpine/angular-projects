import { Component, EventEmitter, OnInit } from '@angular/core';

import { UsersService } from './../services/users.service';
import { CounterService } from './../services/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  // switch to type Object
  activeUsers: Object;

  constructor(private usersService: UsersService, private counter: CounterService) {}

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    this.counter.incrementCounter();
  }
}
