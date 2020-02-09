import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-nesting-form",
  templateUrl: "./nesting-form.component.html",
  styleUrls: ["./nesting-form.component.css"]
})
export class NestingFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  nestingForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    address: new FormGroup({
      city: new FormControl(""),
      street: new FormControl("")
    })
  });
  onSubmit() {console.warn(this.nestingForm.value) }
}
