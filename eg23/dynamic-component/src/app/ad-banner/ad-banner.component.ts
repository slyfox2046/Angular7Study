import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";
import { AdComponent } from "../ad-component";
import { AdItem } from "../ad-item";
import { AdDirective } from "../ad.directive";

@Component({
  selector: "app-ad-banner",
  templateUrl: "./ad-banner.component.html",
  styleUrls: ["./ad-banner.component.css"]
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective, { static: true }) adHost: AdDirective;
  interval: any;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }
  getAds() {
    this.interval = setInterval(() => { 
      this.loadComponent();
    },3000)
  }
  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      adItem.component
    );
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
