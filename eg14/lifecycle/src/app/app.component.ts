/*
 * @Author: Admin
 * @Date: 2020-01-22 09:39:19
 * @FilePath: \Angular7Study\eg14\lifecycle\src\app\app.component.ts
 * @Description: file content
 * 

1 constructor
2 ngOnInit
3 ngDoCheck
4 ngAfterContentInit
5 ngAfterContentChecked
6 ngAfterViewInit
7 ngAfterViewChecked
8 ngDoCheck
9 ngAfterContentChecked
10 ngAfterViewChecked


 */
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
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
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.logIt('ngOnInit')
  }
  title = "生命周期钩子的例子";
  logIndex: number = 1;
  @Input() name: string;

  /**
   *
   */
  constructor() {
    this.logIt("constructor");
  }
  logIt(msg: string) {
    console.log(`${this.logIndex++} ${msg}`);
  }
  ngAfterViewInit(): void {
    this.logIt("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    this.logIt("ngAfterViewChecked");
  }

  ngAfterContentInit(): void {
    this.logIt("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    this.logIt("ngAfterContentChecked");
  }
  ngDoCheck(): void {
    this.logIt("ngDoCheck");
  }
  ngOnChanges(changes: SimpleChanges): void {
    let nameCurrentValue = changes["name"].currentValue;
    let namePreviousValue = changes["name"].previousValue;
    this.logIt("ngOnChanges的currentValue值是" + nameCurrentValue);
    this.logIt("ngOnChanges的previousValue值是" + namePreviousValue);
  }
}
