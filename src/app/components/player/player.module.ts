import { NgModule } from '@angular/core';

import { PlayerComponent } from './player.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    PlayerComponent
  ],
  providers: [],
  bootstrap: [PlayerComponent]
})
export class PlayerModule { }
