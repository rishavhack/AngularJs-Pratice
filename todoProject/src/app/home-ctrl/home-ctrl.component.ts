import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-ctrl',
  templateUrl: './home-ctrl.component.html',
  styleUrls: ['./home-ctrl.component.css']
})
export class HomeCtrlComponent implements OnInit {
 public buttonValue =true;
 public homoTodoValue = new Array();
 public todoValue :string;
 public index;
  constructor() { }

  ngOnInit() {
  	
  }
  addTodo()
  {
  	this.homoTodoValue.push(this.todoValue);
    this.todoValue = '';
  }
  deleteTodo(i)
  {
    if(confirm("Are you Sure"))
    {
      this.homoTodoValue.splice(i,1);   
    }
    else
    {
      return;
    }
    this.buttonValue = true;
  }
  editTodo(i){
    this.index = i;
    this.todoValue = this.homoTodoValue[i];
    this.buttonValue = false;
  }
  updateTodo()
  {
    this.homoTodoValue[this.index] = this.todoValue;
    this.buttonValue = true;
    this.todoValue = '';
  }
}
