import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeCtrlComponent } from './home-ctrl/home-ctrl.component';
import { TodoCtrlComponent } from './todo-ctrl/todo-ctrl.component';

const routes: Routes = [
{path:'',redirectTo:'/registration',pathMatch:'full'},
{path:'home',component:HomeCtrlComponent},
{path:'registration',component:RegistrationComponent},
{path:'todo/:homeValue',component:TodoCtrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
