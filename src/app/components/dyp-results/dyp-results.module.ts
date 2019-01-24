import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { DypResultsComponent } from './dyp-results.component';
import { MatTableModule, MatSelectModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DypResultsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule
  ],
  exports: [
    DypResultsComponent
  ],
  providers: [],
  bootstrap: [DypResultsComponent]
})
export class DypResultsModule { }
