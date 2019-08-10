import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DypResult, Dyp, DypStatistic } from 'src/app/models/dyp.model';
import { DypState } from 'src/app/store/dyp/dyp.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FetchDypAction, FetchDypListAction } from 'src/app/store/dyp/dyp.actions';
import { FetchDypStatsAction } from 'src/app/store/dyp-charts/dyp-charts.actions';
import { DypChartsState } from 'src/app/store/dyp-charts/dyp-charts.reducer';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dyp-results',
  templateUrl: './dyp-results.component.html',
  styleUrls: ['./dyp-results.component.scss']
})
export class DypResultsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'forecast', 'points'];
  currentDypResults: Observable<DypResult[]>;
  currentDypStatistic: Observable<DypStatistic>;
  dyps: Observable<Dyp[]>;
  selectedDyp: Dyp;
  lastDyp: Dyp;

  constructor(
    private translate: TranslateService,
    private dypStore: Store<DypState>,
    private dypChartsStore: Store<DypChartsState>,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    // load DPY list & select last one
    this.dyps = this.dypStore.select('dyps').pipe(
      map(dypState => {
        if (dypState.lastDyp && !(dypState.lastDyp && this.lastDyp && this.lastDyp.id === dypState.lastDyp.id)) {
          this.lastDyp = dypState.lastDyp;
          this.selectedDyp = dypState.lastDyp;
          this.onDypSelected(null);
          this.changeDetectorRef.detectChanges();
        }
        return dypState.dypList;
      }));
    // load dyp statistic
    this.currentDypStatistic = this.dypChartsStore.select('dypCharts').pipe(
      map(dypChartState => {
      return dypChartState.dypStatistic;
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
    this.dypChartsStore.dispatch(new FetchDypStatsAction(this.selectedDyp.id));
  }

  compareDyps(dyp1: any, dyp2: any): boolean {
    return dyp1.id === dyp2.id;
  }

  private filterPositions(dypResults: DypResult[]): DypResult[] {
    let lastPosition = -1;
    for (let index = 0; index < dypResults.length; index++) {
      const element = dypResults[index];
      if (lastPosition !== element.position) {
        lastPosition = element.position;
      } else {
        element.position = element.position * -1;
      }
    }
    return dypResults;
  }

  private calcForecastIcon(element: DypResult): any {
    const pos = element.position > 0 ? element.position : Math.abs(element.position);
    const classes = {
      'fa-chevron-up': element.forecast > pos,
      'forecast-icon--up': element.forecast > pos,
      'fa-chevron-down': element.forecast < pos,
      'forecast-icon--down': element.forecast < pos,
      'fa-minus': element.forecast === pos,
      'forecast-icon--same': element.forecast === pos
    };
    return classes;
  }

  public calcRate(rate: number): number {
    return Math.round(rate * 100);
  }

}
