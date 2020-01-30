import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent',
  templateUrl: './countdown-parent.component.html',
  styleUrls: ['./countdown-parent.component.css']
})
export class CountdownParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;
  decrease() { 
    this.timerComponent.decrease();
  }
  seconds() { 
    return this.timerComponent.seconds;
  }
}
