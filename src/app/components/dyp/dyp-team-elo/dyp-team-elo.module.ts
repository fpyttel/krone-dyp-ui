import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { DypTeamEloComponent } from './dyp-team-elo.component';

@NgModule({
  declarations: [
    DypTeamEloComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    GoogleChartsModule.forRoot(),
    NgxUiLoaderModule
  ],
  exports: [
    DypTeamEloComponent
  ],
  providers: [],
  bootstrap: [DypTeamEloComponent]
})
export class DypTeamEloModule { }
