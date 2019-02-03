import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PlayerScoresHistoryComponent } from './player-scores-history.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    PlayerScoresHistoryComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    GoogleChartsModule.forRoot()
  ],
  exports: [
    PlayerScoresHistoryComponent
  ],
  providers: [],
  bootstrap: [PlayerScoresHistoryComponent]
})
export class PlayerScoresHistoryModule { }
