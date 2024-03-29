import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatSelectModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerTeammatesComponent } from './player-teammates.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PlayerTeammatesComponent
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
    PlayerTeammatesComponent
  ],
  providers: [],
  bootstrap: [PlayerTeammatesComponent]
})
export class PlayerTeammatesModule { }
