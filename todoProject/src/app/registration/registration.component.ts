import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
public formValue = true;
public signIn = {email:'',pwd:''};
public signUp = new Object();
  constructor(private router : Router) { }

  ngOnInit() {
  }
	toggle(x)
	{
		if(x)
		{
			this.formValue = false
		}
		else
		{
		 	this.formValue = true
		 }
	}
	signInButton()
	{
		let local = JSON.parse(localStorage.getItem('signUpDetails'));
		if(this.signIn.email == local.email && this.signIn.pwd == local.pwd)
		{
			this.router.navigate(['/home'];
		}
	}
	signUpButton()
	{
		localStorage.setItem("signUpDetails",JSON.stringify(this.signUp))
		this.signUp = {};
	}
}
