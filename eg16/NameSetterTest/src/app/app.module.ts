import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    NameChildComponent,
    NameParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
