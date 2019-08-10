import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { DypResultsModule } from '../dyp/dyp-results/dyp-results.module';
import { DypTeamEloModule } from '../dyp/dyp-team-elo/dyp-team-elo.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    MatCardModule,
    DypResultsModule,
    DypTeamEloModule,
    TranslateModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
