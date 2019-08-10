import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { DypResultsComponent } from './dyp-results.component';
import { MatTableModule, MatSelectModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DypResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    TranslateModule
  ],
  exports: [
    DypResultsComponent
  ],
  providers: [],
  bootstrap: [DypResultsComponent]
})
export class DypResultsModule { }
