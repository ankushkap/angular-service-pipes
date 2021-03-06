import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


//| uppercase pipe operator
@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name | uppercase}} -- {{ employee.id }} -- {{ employee.age}}</li></ul>`,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
  }

}
