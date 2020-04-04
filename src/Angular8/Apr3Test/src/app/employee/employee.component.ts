import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  salSlip:string;
  constructor(private authService: AuthenticationService) {
    this.authService.authenticate();
  }

  ngOnInit(): void {
  }

  getSalarySlip() {
    if (this.authService.checkAuthentication()) {
      // return "Salary Slip"
      this.salSlip = "Salary Slip";
    } else {
      // return "Not Authenticated"
      this.salSlip = "Not Authenticated"
    }
  }
}
