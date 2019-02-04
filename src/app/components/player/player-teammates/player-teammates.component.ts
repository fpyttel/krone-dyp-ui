import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DypResult, Dyp } from 'src/app/models/dyp.model';
import { DypState } from 'src/app/store/dyp/dyp.reducer';
import { Store } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FetchDypAction, FetchDypListAction } from 'src/app/store/dyp/dyp.actions';
import { Teammate } from 'src/app/models/teammate.model';
import { PlayerChartsState } from 'src/app/store/player-charts/player-charts.reducer';
import { FetchPlayerScoresAction, FetchPlayerTeammatesAction } from 'src/app/store/player-charts/player-charts.actions';
import { Player } from 'src/app/models/player.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-player-teammates',
  templateUrl: './player-teammates.component.html',
  styleUrls: ['./player-teammates.component.scss']
})
export class PlayerTeammatesComponent implements OnInit {

  @Input() player: Observable<Player>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'wins', 'loss', 'rate'];
  teammates: MatTableDataSource<Teammate[]>;

  constructor(private playerChartsStore: Store<PlayerChartsState>) { }

  ngOnInit(): void {
    // load teammates
    this.playerChartsStore.select('playerCharts').subscribe(
      (playerChartsState => {
        const data = new MatTableDataSource<Teammate[]>(playerChartsState.teammates);
        data.paginator = this.paginator;
        this.teammates = data;
      }));
    // fetch data
    this.player.pipe(filter(player => !!player)).subscribe((player: Player) => {
      this.playerChartsStore.dispatch(new FetchPlayerTeammatesAction(player.id));
    });
  }

  private calcRate(rate: number): number {
    return Math.round(rate * 100);
  }

}
