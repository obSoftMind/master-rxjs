import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CombinelatestComponent } from './combinelatest/combinelatest.component';
import { TypeAheadComponent } from './recipes/type-ahead/type-ahead.component';
import { HttpPollingComponent } from './recipes/http-polling/http-polling.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CombinelatestComponent,
    TypeAheadComponent,
    HttpPollingComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
