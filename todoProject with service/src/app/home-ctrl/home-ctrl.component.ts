import { Component, OnInit } from '@angular/core';
import { HomeTaskService } from '../home-task.service';

@Component({
  selector: 'app-home-ctrl',
  templateUrl: './home-ctrl.component.html',
  styleUrls: ['./home-ctrl.component.css']
})
export class HomeCtrlComponent implements OnInit {
 public buttonValue =true;
 public homoTodoValue = this.homeService.getArray();
 public todoObject = this.homeService.getObject();
 public todoValue :string;
 public index;
 public homeArray
  constructor(private homeService : HomeTaskService) { }

  ngOnInit() {
     
  }
  addTodo()
  {
  	this.homoTodoValue.push(this.todoValue);
    this.todoObject[this.todoValue]=[];
    this.todoValue = '';
  }
  deleteTodo(i)
  {
    if(confirm("Are you Sure"))
    {
      delete this.todoObject[this.homoTodoValue[i]]; 
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
    delete this.todoObject[this.homoTodoValue[i]];
    this.buttonValue = false;

  }
  updateTodo()
  {
    this.homoTodoValue[this.index] = this.todoValue;
    this.todoObject[this.todoValue]=[];
    this.buttonValue = true;
    this.todoValue = '';
  }
}
