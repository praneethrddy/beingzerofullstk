import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  x:String = "RANDOM DATA";
  y:number = 11 ;
  z:boolean = true;
  constructor() { }
  ngOnInit() {
     
  }
  fnclick()
  {
    this.x = this.x + " new";
  }
}
