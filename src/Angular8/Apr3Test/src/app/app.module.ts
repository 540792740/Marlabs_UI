import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {AuthenticationService} from "./authentication.service";
import { EventTestComponent } from './event-test/event-test.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EventTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
