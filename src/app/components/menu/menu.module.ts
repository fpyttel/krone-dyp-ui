import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatSidenavModule } from '@angular/material';

import { MenuComponent } from './menu.component';
import { HomeModule } from '../home/home.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PlayerModule } from '../player/player.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    AppRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    HomeModule,
    PlayerModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class MenuModule { }
