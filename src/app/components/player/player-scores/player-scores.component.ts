import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerState } from 'src/app/store/player/player.reducer';
import {Observable} from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { FetchPlayerScoresAction } from 'src/app/store/player/player.actions';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-player-scores',
  templateUrl: './player-scores.component.html',
  styleUrls: ['./player-scores.component.scss']
})
export class PlayerScoresComponent implements OnInit {

  @Input() player: Observable<Player>;

  scoreChartData: Observable<any>;

  scoreChartColumnNames = [
    'Platzierung',
    'Anzahl'
  ];

  scoreChartOptions = {
    chartArea: { left: 60, top: 0, bottom: 20, width: '100%', height: '100%' },
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

  constructor(private playerStore: Store<PlayerState>) { }

  ngOnInit(): void {
    // load score chart data
    this.scoreChartData = this.playerStore.select('players').pipe(map(
      (playerState: PlayerState) => {
        return playerState.scoreData;
    }));
    // fetch data
    this.player.pipe(filter(player => !!player)).subscribe((player: Player) => {
      this.playerStore.dispatch(new FetchPlayerScoresAction(player.id));
    });
  }

}
