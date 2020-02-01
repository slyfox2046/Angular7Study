import { Component, Input } from "@angular/core";
import { AdComponent } from "../ad-component";

@Component({
  selector: "app-ad-one",
  templateUrl: "./ad-one.component.html",
  styleUrls: ["./ad-one.component.css"]
})
export class AdOneComponent implements AdComponent {
  @Input() data: any;
  constructor() {}
}
