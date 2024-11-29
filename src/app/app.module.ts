import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorChangerComponent } from './ex1-color-changer/ex1-color-changer.component';
import { FormsModule } from '@angular/forms';
import { Ex2CarteComponent } from './ex2-carte/ex2-carte.component';
import { Ex5MiniWordComponent } from './ex5-mini-word/ex5-mini-word.component';
import { RainbowDirective } from './rainbow.directive';
import { Ex6RainbowComponent } from './ex6-rainbow/ex6-rainbow.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangerComponent,
    Ex2CarteComponent,
    Ex5MiniWordComponent,
    RainbowDirective,
    Ex6RainbowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
