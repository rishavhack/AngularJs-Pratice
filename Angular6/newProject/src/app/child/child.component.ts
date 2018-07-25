import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

@Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fire(){
  	this.childEvent.emit('Hi Rishav');
  }

}
