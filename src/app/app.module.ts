import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TogglerComponent } from './toggler/toggler.component';
import { SearchComponent } from './search/search.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    TogglerComponent,
    SearchComponent,
    ActionButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
