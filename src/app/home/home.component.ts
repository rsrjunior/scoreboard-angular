import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private _gameOverSnack:MatSnackBar ) { }

  ngOnInit(): void {
  }
  
  openSnackBar(message: string, action: string) {
    console.log(message);
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  _gameOverSnackRef: any;
  gameOverBoolean: boolean = false;
  gameOverSnackBar(message:string, action:string){
    this.gameOverBoolean = true;
    this._gameOverSnackRef = this._gameOverSnack.open(message,action);
    this._gameOverSnackRef.onAction().subscribe(() => {
      this._gameOverSnackRef.dismiss();
    });
  }
  
}
