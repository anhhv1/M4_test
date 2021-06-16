import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-con',
  templateUrl: './con.component.html',
  styleUrls: ['./con.component.css']
})
export class ConComponent implements OnInit {

  @Input() namee?: string;
  // count:number = 0;
  // @Output() change: EventEmitter<number>= new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  // up(){
  //   this.count+=1;
  //   this.change.emit(this.count);
  // }
  // down(){
  //   this.count-=1;
  //   this.change.emit(this.count)
  // }
}
