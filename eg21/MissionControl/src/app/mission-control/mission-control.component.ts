import { Component, OnInit } from "@angular/core";
import { MissionService } from "../mission.service";

@Component({
  selector: "app-mission-control",
  templateUrl: "./mission-control.component.html",
  styleUrls: ["./mission-control.component.css"]
})
export class MissionControlComponent implements OnInit {
  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(astronaut => {
      this.history.push(`${astronaut}已确认`);
    });
  }

  ngOnInit() {}
  astronauts = ["操作员1", "操作员2", "操作员3"];
  history: string[] = [];
  missions = ["发送导弹"];
  nextMission = 0;

  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`任务"${mission}"进入准备`);
    if (this.nextMission >= this.missions.length) { 
      this.nextMission = 0;
    }
  }
}
