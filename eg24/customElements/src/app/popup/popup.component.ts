import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from 'protractor';

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.css"],
  host: {
    "[@state]": "state"
  },
  animations: [
    trigger("state", [
      state("opened", style({ transform: "translateY(0%)" })),
      state(
        "void,closed",
        style({ transform: "translateY(100%)", opacity: 0 })
      ),
      transition("*=>*", animate("100ms ease-in"))
    ])
  ]
})
export class PopupComponent {
  private state: "opened" | "closed" = "closed";
  @Input()
  set message(message: string) {
    this._message = message;
    this.state = "opened";
  }
  get message(): string {
    return this._message;
  }
  _message: string;
  constructor() { }
  
  @Output()
  closed = new EventEmitter();
}
