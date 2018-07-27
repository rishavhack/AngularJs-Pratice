import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
public topics =['Angular','React','Vue']
public detail = new Object();
userModel = new User('Rishav','abc@gmail.com',89232,'Angular',false,'Morning');

  constructor() { }

  ngOnInit() {
  	this.detail = {user : 'Rishav',email:'abc@gmail.com',phone:89232,select:'Angular',send:false,time:'Morning'}
  }
  todo()
  {
  	console.log(this.detail); 
  	localStorage.setItem("testJSON", JSON.stringify(this.detail));
  }

}
