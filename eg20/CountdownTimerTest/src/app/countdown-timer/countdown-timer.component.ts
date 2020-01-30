import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-countdown-timer",
  templateUrl: "./countdown-timer.component.html",
  styleUrls: ["./countdown-timer.component.css"]
})
export class CountdownTimerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  intervalId = 0;
  message = "时间递减";
  seconds = 100;
  decrease() {
    this.countDown();
  }
  private countDown() {
    this.seconds -= 1;
  }
}
