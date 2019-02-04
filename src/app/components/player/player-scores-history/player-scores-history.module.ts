import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PlayerScoresHistoryComponent } from './player-scores-history.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    PlayerScoresHistoryComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    GoogleChartsModule.forRoot(),
    NgxUiLoaderModule
  ],
  exports: [
    PlayerScoresHistoryComponent
  ],
  providers: [],
  bootstrap: [PlayerScoresHistoryComponent]
})
export class PlayerScoresHistoryModule { }
