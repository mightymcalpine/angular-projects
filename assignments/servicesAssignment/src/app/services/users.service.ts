import { Injectable, EventEmitter } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable()

export class UsersService {
  // could use objects with name and state
  activeUsers = ['Luke', 'Leia'];
  inactiveUsers = ['Anakin', 'Mace'];

  users = {
    luke: 'active',
    leia: 'active',
    anakin: 'inactive',
    mace: 'inactive'
  }

  constructor(private counter: CounterService) {}

  // could use one method with additional arg to determine the state to switch to
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    // switch the value of the key passed from the template
    // need to pass the key, not the id (index no.)
    this.activeUsers.splice(id, 1);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    // switch the value of the key passed from the template
    // need to pass the key, not the id (index no.)
    this.inactiveUsers.splice(id, 1);
  }

  addNewUser(userName: string, status: string) {
    console.log(`New user name is ${userName}, status ${status}`);
    // let x = userName;
    this.users[userName] = status;
  }

}
