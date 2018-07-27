import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
public formValue = true;
public signIn = new Object();
public signUp = new Object();
  constructor(private router : Router) { }

  ngOnInit() {
  }
	toggle()
	{
		this.formValue = this.formValue ? false : true
	}
	signInButton()
	{
		let local = JSON.parse(localStorage.getItem('signUpDetails'));
		if(this.signIn.email == local.email && this.signIn.pwd == local.pwd)
		{
			this.router.navigate(['/home'])
		}
	}
	signUpButton()
	{
		console.log(this.signUp);
		localStorage.setItem("signUpDetails",JSON.stringify(this.signUp))
	}
}
