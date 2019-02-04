import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PlayerEloHistoryComponent } from './player-elo-history.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    PlayerEloHistoryComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    GoogleChartsModule.forRoot(),
    NgxUiLoaderModule
  ],
  exports: [
    PlayerEloHistoryComponent
  ],
  providers: [],
  bootstrap: [PlayerEloHistoryComponent]
})
export class PlayerEloHistoryModule { }
