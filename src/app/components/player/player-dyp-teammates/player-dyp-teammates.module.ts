import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatSelectModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerDypTeammatesComponent } from './player-dyp-teammates.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PlayerDypTeammatesComponent
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
    PlayerDypTeammatesComponent
  ],
  providers: [],
  bootstrap: [PlayerDypTeammatesComponent]
})
export class PlayerDypTeammatesModule { }
