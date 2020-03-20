import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  employees: Array<Employee>;
  employee: Employee;
  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.employeeService
      .getEmployees()
      .subscribe(employees => (this.employees = employees));
  }

  goToDetail(id: number) {
    this.router.navigate(["/detail", id]);
    // this.employee = this.employeeService.getEmployeeBy(id);
  }
}
