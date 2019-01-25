import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PlayerScoresComponent } from './player-scores.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    PlayerScoresComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    GoogleChartsModule.forRoot()
  ],
  exports: [
    PlayerScoresComponent
  ],
  providers: [],
  bootstrap: [PlayerScoresComponent]
})
export class PlayerScoresModule { }
