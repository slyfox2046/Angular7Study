import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from '../ad-component';

@Component({
  selector: 'app-ad-tow',
  templateUrl: './ad-tow.component.html',
  styleUrls: ['./ad-tow.component.css']
})
export class AdTowComponent implements AdComponent {
  @Input() data: any;
  constructor() { }

}