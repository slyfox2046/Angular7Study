import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit {
  title = "生命周期钩子的例子";
}
