import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerChartsState } from 'src/app/store/player-charts/player-charts.reducer';
import { Player } from 'src/app/models/player.model';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FetchPlayerScoreboardAction } from 'src/app/store/player-charts/player-charts.actions';

@Component({
  selector: 'app-scoreboard-table',
  templateUrl: './scoreboard-table.component.html',
  styleUrls: ['./scoreboard-table.component.scss']
})
export class ScoreboardTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['firstName', 'stats.points', 'stats.dyps', 'stats.elo'];
  players: MatTableDataSource<Player[]>;

  constructor(private playerChartsStore: Store<PlayerChartsState>) { }

  ngOnInit(): void {
    // load scoreboard
    this.playerChartsStore.select('playerCharts').subscribe(
      (playerChartsState => {
        this.players = new MatTableDataSource<Player[]>(playerChartsState.scoreboard);
        this.players.paginator = this.paginator;
        this.players.sortingDataAccessor = (obj, property) => this.getProperty(obj, property);
        this.players.sort = this.sort;
      }));
    // fetch data
    this.playerChartsStore.dispatch(new FetchPlayerScoreboardAction());
  }

  private calcElo(elo: number): number {
    return Math.round(elo);
  }

  getProperty = (obj, path) => (
    path.split('.').reduce((o, p) => o && o[p], obj)
  )

}
