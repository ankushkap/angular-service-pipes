import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee (){
    return [
      {"id": 1, "name": "andre", "age": 20},
      {"id": 2, "name": "rm ", "age": 21},
      {"id": 3, "name": "rohit", "age": 41},
      {"id": 4, "name": "jay", "age": 22},
    ]
  }
}
