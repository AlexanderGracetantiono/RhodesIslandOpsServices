import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Employee } from "../employee";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() employee: Employee;
  @Output() detailClickHandler: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  detailClicked() {
    this.detailClickHandler.emit(this.employee.id);
  }
}
