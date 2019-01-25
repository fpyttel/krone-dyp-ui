import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
