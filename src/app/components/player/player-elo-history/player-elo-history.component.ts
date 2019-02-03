import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Player } from 'src/app/models/player.model';
import { PlayerChartsState } from 'src/app/store/player-charts/player-charts.reducer';
import { FetchPlayerScoresAction, FetchPlayerEloHistoryAction } from 'src/app/store/player-charts/player-charts.actions';

@Component({
  selector: 'app-player-elo-history',
  templateUrl: './player-elo-history.component.html',
  styleUrls: ['./player-elo-history.component.scss']
})
export class PlayerEloHistoryComponent implements OnInit {

  @Input() player: Observable<Player>;

  eloHistoryChartData;

  eloHistoryChartColumnNames = [
    'Begegnung',
    'Elo'
  ];

  eloHistoryChartOptions = {
    chartArea: { left: 40, top: 5, bottom: 20, width: '100%', height: '100%' },
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
    legend: 'none'
  };

  constructor(private playerChartsStore: Store<PlayerChartsState>) { }

  ngOnInit(): void {
    // load score chart data
    this.playerChartsStore.select('playerCharts').subscribe(p => this.eloHistoryChartData = p.eloHistory ? p.eloHistory : [['', 0]]);

    // fetch data
    this.player.pipe(filter(player => !!player)).subscribe((player: Player) => {
      this.playerChartsStore.dispatch(new FetchPlayerEloHistoryAction(player.id));
    });
  }

}
