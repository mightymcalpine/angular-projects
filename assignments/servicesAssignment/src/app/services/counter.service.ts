export class CounterService {
  totalStateSwitches = 0;

  incrementCounter() {
    this.totalStateSwitches++;
    console.log(`Total number of users switched: ${this.totalStateSwitches}`);
  }
}
