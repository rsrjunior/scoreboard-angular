import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { 
    this.startTimer();
  }

  ngOnInit(): void {
  }
  reload():void{
    window.location.reload();
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.stopTimer();
      }
    },1000)
  }

  stopTimer() {
    clearInterval(this.interval);
    this.gameOver.emit("Game Over");
  }

  @Output() gameOver = new EventEmitter();
  

timeLeft: number = 60;
interval:any;



}
