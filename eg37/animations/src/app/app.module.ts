import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserTeamBuilderComponent } from './user-team-builder.component';
import { UserListBasicComponent } from './user-list-basic.component';
import { UserListEnterLeaveComponent } from './user-list-enter-leave.component';
import { UserListAutoComponent } from './user-list-auto.component';
import { UserListTimingsComponent } from './user-list-timings.component';
import { UserListMultistepComponent } from './user-list-multistep.component';
import { UserListGroupsComponent } from './user-list-groups.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTeamBuilderComponent,
    UserListBasicComponent,
    UserListEnterLeaveComponent,
    UserListAutoComponent,
    UserListTimingsComponent,
    UserListMultistepComponent,
    UserListGroupsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
