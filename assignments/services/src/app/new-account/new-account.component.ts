import { Component, OnInit} from '@angular/core';

import { AccountsService } from './../Services/accounts.service';
import { LoggingService } from './../Services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => { alert(`*** FLASH *** New status is ${status}`); }
    )
  }

  onCreatedAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }

  ngOnInit() { }
}
