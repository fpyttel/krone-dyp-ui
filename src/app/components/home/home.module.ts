import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { DypResultsModule } from '../dyp/dyp-results/dyp-results.module';
import { DypTeamEloModule } from '../dyp/dyp-team-elo/dyp-team-elo.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    MatCardModule,
    DypResultsModule,
    DypTeamEloModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
