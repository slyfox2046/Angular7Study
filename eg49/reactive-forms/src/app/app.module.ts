import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NestingFormComponent } from './nesting-form/nesting-form.component';
import { FormArrayFormComponent } from './form-array-form/form-array-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    NestingFormComponent,
    FormArrayFormComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
