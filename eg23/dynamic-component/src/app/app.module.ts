import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdOneComponent } from './ad-one/ad-one.component';
import { AdTowComponent } from './ad-tow/ad-tow.component';
import { AdDirective } from './ad.directive';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    AdBannerComponent,
    AdOneComponent,
    AdTowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents:[AdOneComponent,AdTowComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
