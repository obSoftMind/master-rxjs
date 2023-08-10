import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TypeAheadComponent } from './recipes/type-ahead/type-ahead.component';
import { HttpPollingComponent } from './recipes/http-polling/http-polling.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreakoutGameComponent } from './recipes/breakout-game/breakout-game.component';
import { CombinelatestComponent } from './operators/combinelatest/combinelatest.component';
import { ForkJoinComponent } from './operators/fork-join/fork-join.component';
import { ConcatmapComponent } from './operators/concatmap/concatmap.component';
import { MergemapComponent } from './operators/mergemap/mergemap.component';
import { ExhaustmapComponent } from './operators/exhaustmap/exhaustmap.component';

@NgModule({
  declarations: [
    AppComponent,
    CombinelatestComponent,
    TypeAheadComponent,
    HttpPollingComponent,
    BreakoutGameComponent,
    ForkJoinComponent,
    ConcatmapComponent,
    MergemapComponent,
    ExhaustmapComponent,
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
