import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerChartsState } from 'src/app/store/player-charts/player-charts.reducer';
import { Player } from 'src/app/models/player.model';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FetchPlayerScoreboardAction } from 'src/app/store/player-charts/player-charts.actions';
import { TranslateService } from '@ngx-translate/core';

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

  years = this.getYears();
  selectedYear = new Date().getFullYear() + '';

  constructor(
    private translate: TranslateService,
    private playerChartsStore: Store<PlayerChartsState>) { }

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
    this.playerChartsStore.dispatch(new FetchPlayerScoreboardAction(new Date().getFullYear()));
  }

  private getYears(): string[] {
    const years = ['gesamt'];
    for (let i = new Date().getFullYear(); i >= 2007; i--) {
      years.push(i + '');
    }
    return years;
  }

  private calcElo(elo: number): number {
    return Math.round(elo);
  }

  getProperty = (obj, path) => (
    path.split('.').reduce((o, p) => o && o[p], obj)
  )

  onYearSelected(event: any): void {
    if (this.selectedYear === 'gesamt') {
      this.playerChartsStore.dispatch(new FetchPlayerScoreboardAction(null));
    } else {
      this.playerChartsStore.dispatch(new FetchPlayerScoreboardAction(Number(this.selectedYear)));
    }
  }

  compareDyps(dyp1: any, dyp2: any): boolean {
    return dyp1.id === dyp2.id;
  }

}
