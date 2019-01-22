import { ChildComponent } from './child/child.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChildComponent) child:ChildComponent;
  title = 'Hello AppComponent';
  childValue;

  count:number=0;

  ngOnInit(): void {
    this.child.sayHello()
  }

  getChildValue($event){
    this.childValue = $event;
  }

  clicked(){
    this.count ++;
  }

}
