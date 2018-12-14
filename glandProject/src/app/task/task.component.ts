import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
	 public arr = new Array();
	public count = 1;
	public obj = {'Green':0,'Blue':0,'Purple':0,'Pink':0};
  constructor() { }

  ngOnInit() {
  }

  addBall(){
  	if(this.count%3 == 0 && this.count % 15 !== 0){
			this.arr.push({id:this.count,color:'Green'})
			this.obj.Green++
		}else if(this.count % 5 == 0 && this.count % 15 !== 0){
			this.arr.push({id:this.count,color:'Blue'})
			this.obj.Blue++
		}else if(this.count % 15 == 0){
			this.arr.push({id:this.count,color:'Purple'})
			this.obj.Purple++
		}else{
			this.arr.push({id:this.count,color:'Pink'})
			this.obj.Pink++
		}
		this.count++;
		console.log(this.arr)
  }
}
