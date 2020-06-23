import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1Component } from './comps/c1/c1.component';
import { DireDirective } from './d/dire.directive';
import { ResultComponent } from './comps/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    DireDirective,
    ResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
