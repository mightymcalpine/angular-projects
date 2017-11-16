import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onCounterFired(firedNumber: number) {
    console.log(`Fired Number ${firedNumber}`);
    // check fired number
    if (!firedNumber) {
      this.oddNumbers = [];
      this.evenNumbers = [];
    }
    else if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
