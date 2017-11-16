import { Component, OnInit } from '@angular/core';

import { CounterService } from './../services/counter.service';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit() {}

  onCreateUser(userName: string, status: string) {
    this.usersService.addNewUser(userName, status);
    this.counterService.incrementCounter();
  }

}
