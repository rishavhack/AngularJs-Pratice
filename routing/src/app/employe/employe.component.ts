import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
public user$;
  constructor(private route : ActivatedRoute) { 
   this.route.params.subscribe( params => this.user$ = params.id );
   console.log(this.user$);
  }

  ngOnInit() {
  }

}
