import { Component, OnInit } from "@angular/core";
import { AirQuality } from "./air-quality";
import { AirQualityService } from "./air-quality.service";

@Component({
  selector: "app-air-quality",
  templateUrl: "./air-quality.component.html",
  styleUrls: ["./air-quality.component.css"]
})
export class AirQualityComponent implements OnInit {
  airQuality: AirQuality;
  headers: string[];
  constructor(private airQualityService: AirQualityService) {}
  ngOnInit() {}
  /* showAirQualityData() {
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
  } */

  showAirQualityData() {
    this.airQualityService
      .getAirData()
      .subscribe(
        (airQualityData: AirQuality) => (this.airQuality = airQualityData)
      );
  }

  showAirQualityResponse() {
    this.airQualityService.getAirDataResponse().subscribe(resp => {
      const keys = resp.headers.keys();
      this.headers = keys.map(key => `${key}:${resp.headers.get(key)}`);
      console.log(this.headers);
      this.airQuality = resp.body;
    });
  }
}
