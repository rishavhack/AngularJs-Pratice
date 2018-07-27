import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeComponent } from './employe/employe.component';
import { PageComponent } from './page/page.component';
import { RoutingComponent } from './routing/routing.component';
const routes: Routes = [

	{path :'' , redirectTo:'/departments',pathMatch:'full'},
	{path:'departments',component:DepartmentComponent},
	{path:'empl/:id',component:EmployeComponent},
	{path:'routePage/:id',component:RoutingComponent},
	{path:'**',component:PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentComponent,EmployeComponent]
