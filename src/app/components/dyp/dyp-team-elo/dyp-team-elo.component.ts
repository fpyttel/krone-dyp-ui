import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DypChartsState } from 'src/app/store/dyp-charts/dyp-charts.reducer';
import { DypState } from 'src/app/store/dyp/dyp.reducer';
import { Dyp } from 'src/app/models/dyp.model';
import { FetchDypTeamEloAction } from 'src/app/store/dyp-charts/dyp-charts.actions';

@Component({
  selector: 'app-dyp-team-elo',
  templateUrl: './dyp-team-elo.component.html',
  styleUrls: ['./dyp-team-elo.component.scss']
})
export class DypTeamEloComponent implements OnInit {

  teamEloChartData;

  private currentDyp: Dyp;

  teamEloChartColumnNames = [
    'Team',
    'ELO 1',
    'ELO 2'
  ];

  teamEloChartOptions = {
    chartArea: { left: 180, top: 0, bottom: 20, width: '100%', height: '100%' },
    backgroundColor: '#FCFCFC',
    hAxis: {
      baselineColor: 'none',
      textStyle: {
        fontName: 'Helvetica',
        bold: true,
        color: '#404040'
      }
    },
    vAxis: {
      baselineColor: 'none',
      textStyle: {
        fontName: 'Helvetica',
        bold: true,
        color: '#404040'
      }
    },
    legend: 'none',
    colors: ['#6E9610', '#49600A'],
    isStacked: true
  };

  constructor(private dypChartsStore: Store<DypChartsState>,
    private dypStore: Store<DypState>,
    private loaderService: NgxUiLoaderService) { }

  ngOnInit(): void {
    // load score chart data
    this.dypChartsStore.select('dypCharts').subscribe(d => {
      this.teamEloChartData = d.teamElo ? d.teamElo : [['', 0, 0]];
      if (d.teamElo) {
        this.loaderService.stopLoader('dyp-team-elo-loader');
      } else {
        try {
          this.loaderService.startLoader('dyp-team-elo-loader');
        } catch (error) {
          // don't ask me why
        }
      }
    });

    // fetch data
    this.dypStore.select('dyps').subscribe((dypState: DypState) => {
      if (dypState.dyp && dypState.dyp.id) {
        if (!this.currentDyp || this.currentDyp.id !== dypState.dyp.id) {
          this.currentDyp = dypState.dyp;
          this.dypChartsStore.dispatch(new FetchDypTeamEloAction(dypState.dyp.id));
        }
      }
    });
  }

}
