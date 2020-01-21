import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MessagesComponent } from "./messages/messages.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UsersComponent } from "./users/users.component";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    MessagesComponent,
    DashboardComponent,
    UserSearchComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
