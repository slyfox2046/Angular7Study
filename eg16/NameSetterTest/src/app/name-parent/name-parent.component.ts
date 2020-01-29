import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-name-parent",
  templateUrl: "./name-parent.component.html",
  styleUrls: ["./name-parent.component.css"]
})
export class NameParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  users = ["Way Lau", "   ", "Bombasto  ", " Magma"];
  master = "老卫";
}
