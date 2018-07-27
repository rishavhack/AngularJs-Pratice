import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor(private router : ActivatedRoute) { }

  ngOnInit() {
  	let id  = this.router.snapshot.paramMap.get('id');
  	console.log(id);
  }

}
