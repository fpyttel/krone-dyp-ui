import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Player } from 'src/app/models/player.model';
import { PlayerChartsState } from 'src/app/store/player-charts/player-charts.reducer';
import { FetchPlayerScoresHistoryAction } from 'src/app/store/player-charts/player-charts.actions';
import { GoogleChartComponent } from 'angular-google-charts';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-player-scores-history',
  templateUrl: './player-scores-history.component.html',
  styleUrls: ['./player-scores-history.component.scss']
})
export class PlayerScoresHistoryComponent implements OnInit {

  @Input() player: Observable<Player>;

  @ViewChild('chart') chart: GoogleChartComponent;

  scoresHistoryChartData;

  scoresHistoryChartColumnNames = [
    'Dyp',
    'Platz'
  ];

  scoresHistoryChartOptions = {
    chartArea: { left: 25, top: 5, bottom: 20, width: '100%', height: '100%' },
    colors: ['#6E9610', '#49600A'],
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
      direction: -1,
      ticks: [1, 2, 3, 4, 5, 7, 9, 13, 17],
      textStyle: {
        fontName: 'Helvetica',
        bold: true,
        color: '#404040'
      }
    },
    legend: 'none'
  };

  constructor(private playerChartsStore: Store<PlayerChartsState>,
    private loaderService: NgxUiLoaderService) { }

  ngOnInit(): void {
    // load score chart data
    this.playerChartsStore.select('playerCharts').subscribe(
      p => {
        this.scoresHistoryChartData = p.scoresHistory ? p.scoresHistory : [['', 0]];
        if (p.scoresHistory && this.chart.wrapper) {
          this.chart.wrapper.setOption('hAxis.viewWindow.min', p.scoresHistory[0][0] - 5);
          this.chart.wrapper.setOption('hAxis.viewWindow.max', p.scoresHistory[p.scoresHistory.length - 1][0] + 5);
        }
        if (p.scoresHistory) {
          this.loaderService.stopLoader('scores-history-loader');
        } else {
          try {
            this.loaderService.startLoader('scores-history-loader');
          } catch (error) {
            // don't ask me why
          }
        }
      });

    // fetch data
    this.player.pipe(filter(player => !!player)).subscribe((player: Player) => {
      this.playerChartsStore.dispatch(new FetchPlayerScoresHistoryAction(player.id));
    });
  }

}
