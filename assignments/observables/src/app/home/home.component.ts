import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbObsSubscription: Subscription;
  custObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
      // ***** this observable run infinitely, does not error out or reach a completion point
    const myNumbers = Observable.interval(1000)
    .map(
      (data: number) => {
        return data * 2;
      }
    );
    this.numbObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
    const thisObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('it done broke');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
        }, 6500);
    });
    this.custObsSubscription = thisObservable.subscribe(
      (data: string) => console.log(data),
      (error: string) => console.log(error),
      () => console.log('completed')
    );
  }

  ngOnDestroy() {
    this.numbObsSubscription.unsubscribe();
    this.custObsSubscription.unsubscribe();
  }

}
