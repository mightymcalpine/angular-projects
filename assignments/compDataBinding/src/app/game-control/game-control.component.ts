import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counterFired = new EventEmitter<number>();
  counter;
  previousNumber = 0;

  constructor() { }

  ngOnInit() { }


  onStartGame() {
    // console.log(`Start game button was clicked`);
    this.counter = setInterval(() => {
      this.counterFired.emit(this.previousNumber + 1);
      this.previousNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.counter);
  }

  onResetGame() {
    clearInterval(this.counter);
    this.previousNumber = 0;
    this.counterFired.emit(this.previousNumber);
  }

}
