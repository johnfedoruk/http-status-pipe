import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpStatusModule } from './modules/http-status/http-status.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpStatusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
