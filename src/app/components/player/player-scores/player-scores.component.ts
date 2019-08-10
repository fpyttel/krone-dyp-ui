import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Player } from 'src/app/models/player.model';
import { PlayerChartsState } from 'src/app/store/player-charts/player-charts.reducer';
import { FetchPlayerScoresAction } from 'src/app/store/player-charts/player-charts.actions';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-player-scores',
  templateUrl: './player-scores.component.html',
  styleUrls: ['./player-scores.component.scss']
})
export class PlayerScoresComponent implements OnInit {

  @Input() player: Observable<Player>;

  scoreChartData;

  scoreChartColumnNames = [
    'Platzierung',
    'Anzahl'
  ];

  scoreChartOptions = {
    chartArea: { left: 75, top: 0, bottom: 20, width: '100%', height: '100%' },
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
    colors: ['#6E9610', '#49600A'],
    backgroundColor: '#FCFCFC',
    legend: 'none'
  };

  constructor(private playerChartsStore: Store<PlayerChartsState>,
    private loaderService: NgxUiLoaderService) { }

  ngOnInit(): void {
    // load score chart data
    this.playerChartsStore.select('playerCharts').subscribe(p => {
      this.scoreChartData = p.scoreData ? p.scoreData : [['', 0]];
      if (p.scoreData) {
        this.loaderService.stopLoader('scores-loader');
      } else {
        try {
          this.loaderService.startLoader('scores-loader');
        } catch (error) {
          // don't ask me why
        }
      }
    });

    // fetch data
    this.player.pipe(filter(player => !!player)).subscribe((player: Player) => {
      this.playerChartsStore.dispatch(new FetchPlayerScoresAction(player.id));
    });
  }

}
