import { Component } from "@angular/core";

@Component({
  selector: "warning-alert",
  templateUrl: "./warningAlert.component.html",
  styleUrls: ["./warningAlert.component.css"]
})
export class WarningAlertComponent {
  message: string = "Alert! You have errors!";
}
