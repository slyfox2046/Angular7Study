import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-nesting-form",
  templateUrl: "./nesting-form.component.html",
  styleUrls: ["./nesting-form.component.css"]
})
export class NestingFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  /*   nestingForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    address: new FormGroup({
      city: new FormControl(""),
      street: new FormControl("")
    })
  }); */

  nestingForm = this.fb.group({
    firstName: ["",Validators.required],
    lastName: [""],
    address: this.fb.group({
      city: [""],
      street: [""]
    })
  });
  onSubmit() {
    console.warn(this.nestingForm.value);
  }
  updateProfile() {
    this.nestingForm.patchValue({
      firstName: "老卫",
      address: {
        street: "坂田华为基地"
      }
    });
  }
}
