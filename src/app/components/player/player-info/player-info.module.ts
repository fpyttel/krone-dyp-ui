import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PlayerInfoComponent } from './player-info.component';

@NgModule({
  declarations: [
    PlayerInfoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    PlayerInfoComponent
  ],
  providers: [],
  bootstrap: [PlayerInfoComponent]
})
export class PlayerInfoModule { }
