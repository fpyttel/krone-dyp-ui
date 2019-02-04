import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatSelectModule, MatPaginatorModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerTeammatesComponent } from './player-teammates.component';

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
    MatPaginatorModule
  ],
  exports: [
    PlayerTeammatesComponent
  ],
  providers: [],
  bootstrap: [PlayerTeammatesComponent]
})
export class PlayerTeammatesModule { }
