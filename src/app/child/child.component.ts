import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() appValue;
@Output() childEvent = new EventEmitter();
  constructor() { }
  count:number
  ngOnInit() {
  }

  onClick(){
    this.childEvent.emit('child sent Value')
  }

  sayHello(){
    alert('hello')
  }
}
