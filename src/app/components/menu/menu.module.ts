import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MenuComponent } from './menu.component';
import { HomeModule } from '../home/home.module';
import { PlayerModule } from '../player/player.module';
import { RouterModule } from '@angular/router';
import { ScoreboardModule } from '../scoreboard/scoreboard.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatInputModule,
  MatAutocompleteModule,
  MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HomeModule,
    PlayerModule,
    ScoreboardModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class MenuModule { }
