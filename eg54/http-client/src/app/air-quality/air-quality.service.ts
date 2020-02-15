import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {
  airQualityUrl = 'http://api.waqi.info/feed/guangzhou/?token=0e609829c81121cc05daf37b45d62b82725cd521';
  constructor(private http: HttpClient) { }
  getAirData() { 
    return this.http.get(this.airQualityUrl);
  }
}
