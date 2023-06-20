import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { FilmsComponent } from './components/films/films.component';
import { InfoFilmsComponent } from './components/info-films/info-films.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    FilmsComponent,
    InfoFilmsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
