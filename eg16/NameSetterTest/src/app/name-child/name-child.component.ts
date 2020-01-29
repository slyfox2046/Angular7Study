import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-name-child",
  templateUrl: "./name-child.component.html",
  styleUrls: ["./name-child.component.css"]
})
export class NameChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  private _name = "";

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || "未设置用户名";
    console.log('setName: '+this._name+new Date());
  }
  get name(): string {
    console.log('getName: '+this._name+new Date());
    return this._name;
  }
}
