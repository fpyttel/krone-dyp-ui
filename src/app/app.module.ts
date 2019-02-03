import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './components/menu/menu.module';
import { dypReducer } from './store/dyp/dyp.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DypEffects } from './store/dyp/dyp.effect';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { playerReducer } from './store/player/player.reducer';
import { PlayerEffects } from './store/player/player.effect';
import { PageNotFoundModule } from './components/page-not-found/page-not-found.module';
import { playerChartsReducer } from './store/player-charts/player-charts.reducer';
import { PlayerChartsEffects } from './store/player-charts/player-charts.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      dyps: dypReducer,
      players: playerReducer,
      playerCharts: playerChartsReducer
    }),
    EffectsModule.forRoot([
      DypEffects,
      PlayerEffects,
      PlayerChartsEffects
    ]),
    MenuModule,
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
