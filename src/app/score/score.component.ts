import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scoreOne():void{
    if(!this.scoreBlock){
      let shoot =  Math.random();
      if(shoot>0.8){
        this.score+=3;
        this.onScore.emit({message:`${this.name} Has Scored 3 Points`});
      }else if(shoot>0.5){
        this.score+=2;
        this.onScore.emit({message:`${this.name} Has Scored 2 Points`});
      }else{
        this.onScore.emit({message:`${this.name} Missed`});
      }        
    }
    
  }

  score: number = 0;
  @Input() scoreBlock:boolean =false;
  @Input() name: string = "";
  @Output() onScore = new EventEmitter();

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if(event.key.toUpperCase()==this.name){
      this.scoreOne();
    }
  }
  

}
