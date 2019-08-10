import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PlayerInfoComponent } from './player-info.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PlayerInfoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule
  ],
  exports: [
    PlayerInfoComponent
  ],
  providers: [],
  bootstrap: [PlayerInfoComponent]
})
export class PlayerInfoModule { }
