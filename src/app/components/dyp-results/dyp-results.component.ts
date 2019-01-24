import { Component, OnInit } from '@angular/core';
import { DypResult, Dyp } from 'src/app/models/dyp.model';
import { DypState } from 'src/app/store/dyp/dyp.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FetchDypAction, FetchDypListAction } from 'src/app/store/dyp/dyp.actions';

@Component({
  selector: 'app-dyp-results',
  templateUrl: './dyp-results.component.html',
  styleUrls: ['./dyp-results.component.scss']
})
export class DypResultsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'forecast', 'points'];
  currentDypResults: Observable<DypResult[]>;
  dyps: Observable<Dyp[]>;
  selectedDyp: Dyp;

  lastDyp: Dyp;

  constructor(private dypStore: Store<DypState>) { }

  ngOnInit(): void {
    // load DPY list & select last one
    this.dyps = this.dypStore.select('dyps').pipe(
      map(dypState => {
        if (dypState.lastDyp && !(dypState.lastDyp && this.lastDyp && this.lastDyp.id === dypState.lastDyp.id)) {
          this.lastDyp = dypState.lastDyp;
          this.selectedDyp = dypState.lastDyp;
          this.onDypSelected(null);
        }
        return dypState.dypList;
      }));
    // load & set current DYP
    this.currentDypResults = this.dypStore.select('dyps').pipe(
      map(dypState => {
        return dypState.dyp ? this.filterPositions(dypState.dyp.results) : null;
      }));
    // load DYP list
    this.dypStore.dispatch(new FetchDypListAction());
  }

  onDypSelected(event: any): void {
    this.dypStore.dispatch(new FetchDypAction(this.selectedDyp.id));
  }

  private filterPositions(dypResults: DypResult[]): DypResult[] {
    let lastPosition = -1;
    for (let index = 0; index < dypResults.length; index++) {
      const element = dypResults[index];
      if (lastPosition !== element.position) {
        lastPosition = element.position;
      } else {
        element.position = null;
      }
    }
    return dypResults;
  }

}
