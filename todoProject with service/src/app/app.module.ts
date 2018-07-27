import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeCtrlComponent } from './home-ctrl/home-ctrl.component';
import { TodoCtrlComponent } from './todo-ctrl/todo-ctrl.component';
import { FormsModule } from '@angular/forms';
import { HomeTaskService } from './home-task.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeCtrlComponent,
    TodoCtrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HomeTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
