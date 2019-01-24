import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { DypResultsModule } from '../dyp-results/dyp-results.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    MatCardModule,
    DypResultsModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
