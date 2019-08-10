import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatSelectModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScoreboardTableComponent } from './scoreboard-table.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ScoreboardTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    TranslateModule
  ],
  exports: [
    ScoreboardTableComponent
  ],
  providers: [],
  bootstrap: [ScoreboardTableComponent]
})
export class ScoreboardTableModule { }
