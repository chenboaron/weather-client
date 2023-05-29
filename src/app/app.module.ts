import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ForecastComponent } from './components/forecast/forecast.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CdkAccordionModule,
    MatExpansionModule,
    BrowserAnimationsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
