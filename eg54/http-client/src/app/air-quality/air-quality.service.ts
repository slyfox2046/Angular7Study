import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AirQuality } from './air-quality';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {
  airQualityUrl = 'http://api.waqi.info/feed/guangzhou/?token=0e609829c81121cc05daf37b45d62b82725cd521';
  constructor(private http: HttpClient) { }
  
  // 没有指定参数类型
  getAirData() { 
    return this.http.get<AirQuality>(this.airQualityUrl);
  }

  // 指定参数类型AirQuality
  // getAirData() { 
  //   return this.http.get<AirQuality>(this.airQualityUrl);
  // }

  getAirDataResponse():Observable<HttpResponse<AirQuality>> { 
    return this.http.get<AirQuality>(
      this.airQualityUrl, {observe:'response'}
    )
  }
}
