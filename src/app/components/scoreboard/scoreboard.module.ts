import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ScoreboardComponent } from './scoreboard.component';
import { ScoreboardTableModule } from './scoreboard-table/scoreboard-table.module';

@NgModule({
  declarations: [
    ScoreboardComponent
  ],
  imports: [
    CommonModule,
    ScoreboardTableModule
  ],
  exports: [
    ScoreboardComponent
  ],
  providers: [],
  bootstrap: [ScoreboardComponent]
})
export class ScoreboardModule { }
