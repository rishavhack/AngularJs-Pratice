import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
angularForm = new FormGroup ({
    name: new FormControl()
  });
 constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }
  createForm() {
    this.angularForm = this.fb.group({
      name: '',
    });
  }
}
