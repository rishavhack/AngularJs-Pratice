import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeTodoComponent } from './home-todo/home-todo.component';
import { TaskTodoComponent } from './task-todo/task-todo.component';


const routes: Routes = [
{
    path: '',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeTodoComponent
  },
  {
    path: 'todo',
    component: TaskTodoComponent
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
