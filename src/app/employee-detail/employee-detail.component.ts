import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";

@Component({
  selector: "app-employee-detail",
  templateUrl: "./employee-detail.component.html",
  styleUrls: ["./employee-detail.component.scss"]
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employee = null;
    this.route.paramMap.subscribe(param => {
      this.employee = this.employeeService.getEmployeeBy(+param.get("id"));
    });
  }
}
