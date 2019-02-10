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
import { NgxUiLoaderModule, NgxUiLoaderConfig, POSITION, SPINNER, PB_DIRECTION } from 'ngx-ui-loader';
import { dypChartsReducer } from './store/dyp-charts/dyp-charts.reducer';
import { DypChartsEffects } from './store/dyp-charts/dyp-charts.effect';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#6E9610',
  fgsSize: 40,
  overlayColor: 'rgba(250,250,250,.8)',
  hasProgressBar: false,
  fgsType: SPINNER.cubeGrid,
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};
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
      dypCharts: dypChartsReducer,
      players: playerReducer,
      playerCharts: playerChartsReducer
    }),
    EffectsModule.forRoot([
      DypEffects,
      DypChartsEffects,
      PlayerEffects,
      PlayerChartsEffects
    ]),
    MenuModule,
    PageNotFoundModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
