import { Injectable } from "@angular/core";
import { EMPLOYEE } from "./employeeData";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Employee } from "./employee";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private employee: Array<Employee> = EMPLOYEE;
  private selectedEmployee = new BehaviorSubject<Employee>(null);
  $selectedEmployee = this.selectedEmployee.asObservable();
  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of(this.employee);
  }

  getEmployeeBy(id: number): Employee {
    return this.employee.find(employee => (employee.id == id));
  }
  // addEmployee(name: string, hp: number, atk: number, def: number): void {
  //   this.employee.push({
  //     id: ((this.employee.length) + 1),
  //     codeName: name,
  //     hp: hp,
  //     atk: atk,
  //     def: def,
  //   });
  // }
  selectEmployee(emp: Employee): void {
    this.selectedEmployee.next(emp);
  }
}
