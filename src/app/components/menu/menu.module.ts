import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatSidenavModule } from '@angular/material';

import { MenuComponent } from './menu.component';
import { HomeModule } from '../home/home.module';
import { PlayerModule } from '../player/player.module';
import { RouterModule } from '@angular/router';
import { ScoreboardModule } from '../scoreboard/scoreboard.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    RouterModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    HomeModule,
    PlayerModule,
    ScoreboardModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class MenuModule { }
