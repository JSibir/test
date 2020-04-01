import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnlyForScreenDirective } from './directives/only-for-screen.directive';

@NgModule({
  declarations: [
    AppComponent,
    OnlyForScreenDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
