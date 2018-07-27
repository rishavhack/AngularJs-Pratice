import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeTaskService {
	public todoObject = new Object();
	public homeArray = new Array();
  constructor() { }
  getObject()
  {
  	return this.todoObject;
  }
  setArray(add)
  {
  //	this.homeArray.push(add);	
  }
  getArray()
  {
  	return this.homeArray;
  }
}
