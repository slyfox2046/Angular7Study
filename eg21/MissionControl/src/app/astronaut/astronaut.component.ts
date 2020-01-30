import { Component, Input, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MissionService } from '../mission.service';

@Component({
  selector: "app-astronaut",
  templateUrl: "./astronaut.component.html",
  styleUrls: ["./astronaut.component.css"]
})
export class AstronautComponent implements OnInit {
  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(mission => { 
      this.mission = mission;
      this.announced = true;
      this.confirmed = false;
    })
  }

  ngOnInit() {}
  @Input() astronaut: string;
  mission = "<没有任务>";
  confirmed = false;
  announced = false;
  subscription: Subscription;
  confirm() { 
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut)
  }
}
