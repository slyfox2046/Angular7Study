/*
 * @Author: Admin
 * @Date: 2020-01-22 09:39:19
 * @FilePath: \Angular7Study\eg14\lifecycle\src\app\app.module.ts
 * @Description: file content
 */
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
