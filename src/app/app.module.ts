import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TogglerComponent } from './toggler/toggler.component';
import { SearchComponent } from './search/search.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { DataService } from './data.service';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { DebounceClickDirective } from './directives/debounce-click.directive';


@NgModule({
  declarations: [
    AppComponent,
    TogglerComponent,
    SearchComponent,
    ActionButtonComponent,
    SearchItemComponent,
    DebounceClickDirective,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
