import { Component, OnInit } from "@angular/core";
import { AirQualityService } from "./air-quality.service";
import { AirQuality } from './air-quality';

@Component({
  selector: "app-air-quality",
  templateUrl: "./air-quality.component.html",
  styleUrls: ["./air-quality.component.css"]
})
export class AirQualityComponent implements OnInit {
  airQuality: AirQuality;
  constructor(private airQualityService: AirQualityService) { }
  ngOnInit() {}
  showAirQualityData() {
    this.airQualityService.getAirData().subscribe(
      (airQualityData: AirQuality) =>
        this.airQuality = {
          status: airQualityData["status"],
          data: {
            aqi: airQualityData["data"]["aqi"],
            time: airQualityData["data"]["time"]
          }
        }
    );
  }
}
