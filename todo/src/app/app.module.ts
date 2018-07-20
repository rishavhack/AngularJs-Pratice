import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeTodoComponent } from './home-todo/home-todo.component';
import { TaskTodoComponent } from './task-todo/task-todo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeTodoComponent,
    TaskTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
