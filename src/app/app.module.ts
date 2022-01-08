import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './views/games/games.component';
import { EquipsComponent } from './views/equips/equips.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PcgamerComponent } from './views/pcgamer/pcgamer.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    EquipsComponent,
    HomeComponent,
    LoginComponent,
    PcgamerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
