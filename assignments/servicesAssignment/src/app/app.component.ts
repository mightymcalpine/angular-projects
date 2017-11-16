import { Component, AfterContentChecked } from '@angular/core';

import { UsersService } from './services/users.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // not declare the service here, did that globally in app.module
})
export class AppComponent implements AfterContentChecked {
  counter = 0;

  constructor(private counterService: CounterService) {}

  ngAfterContentChecked() {
    this.counter = this.counterService.totalStateSwitches;
  }

}
