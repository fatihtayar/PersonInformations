import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DxSelectBoxModule,
   DxCheckBoxModule,
   DxTextBoxModule,
   DxDateBoxModule,
   DxButtonModule,
   DxValidatorModule,
   DxValidationSummaryModule} from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { DevextremeComponent } from './devextreme/devextreme.component';

@NgModule({
   declarations: [
      AppComponent,
      BootstrapComponent,
      DevextremeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule  ,
      ReactiveFormsModule,
      DxSelectBoxModule,
      DxCheckBoxModule,
      DxTextBoxModule,
      DxDateBoxModule,
      DxButtonModule,
      DxValidatorModule,
      DxValidationSummaryModule   
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
