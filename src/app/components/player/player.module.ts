import { NgModule } from '@angular/core';

import { PlayerComponent } from './player.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material';
import { PlayerInfoModule } from './player-info/player-info.module';
import { PlayerScoresModule } from './player-scores/player-scores.module';
import { PlayerEloHistoryModule } from './player-elo-history/player-elo-history.module';
import { PlayerScoresHistoryModule } from './player-scores-history/player-scores-history.module';
import { PlayerTeammatesModule } from './player-teammates/player-teammates.module';
import { PlayerDypTeammatesModule } from './player-dyp-teammates/player-dyp-teammates.module';

@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    PlayerInfoModule,
    PlayerScoresModule,
    PlayerEloHistoryModule,
    PlayerScoresHistoryModule,
    PlayerTeammatesModule,
    PlayerDypTeammatesModule
  ],
  exports: [
    PlayerComponent
  ],
  providers: [],
  bootstrap: [PlayerComponent]
})
export class PlayerModule { }
