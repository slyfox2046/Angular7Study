import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';
import { AdOneComponent } from './ad-one/ad-one.component';
import { AdTowComponent } from './ad-tow/ad-tow.component';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }
  getAds() { 
    return [
    new AdItem(AdOneComponent, {headline:'新启程',body:'跟老卫一起学Angular！'}),
    new AdItem(AdTowComponent,{ name:"老卫",bio:"Welcome！"})
    ]}
}
