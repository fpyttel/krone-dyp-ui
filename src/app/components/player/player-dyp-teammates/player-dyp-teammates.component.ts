import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PlayerChartsState } from 'src/app/store/player-charts/player-charts.reducer';
import { FetchPlayerDypTeammatesAction } from 'src/app/store/player-charts/player-charts.actions';
import { Player } from 'src/app/models/player.model';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { DypTeammate } from 'src/app/models/dyp-teammate.model';

@Component({
  selector: 'app-player-dyp-teammates',
  templateUrl: './player-dyp-teammates.component.html',
  styleUrls: ['./player-dyp-teammates.component.scss']
})
export class PlayerDypTeammatesComponent implements OnInit {

  @Input() player: Observable<Player>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['mate', 'date', 'position'];
  dypTeammates: MatTableDataSource<DypTeammate[]>;

  constructor(private playerChartsStore: Store<PlayerChartsState>) { }

  ngOnInit(): void {
    // load dyp teammates
    this.playerChartsStore.select('playerCharts').subscribe(
      (playerChartsState => {
        const data = new MatTableDataSource<DypTeammate[]>(playerChartsState.dypTeammates);
        data.paginator = this.paginator;
        data.sort = this.sort;
        this.dypTeammates = data;
      }));
    // fetch data
    this.player.pipe(filter(player => !!player)).subscribe((player: Player) => {
      this.playerChartsStore.dispatch(new FetchPlayerDypTeammatesAction(player.id));
    });
  }

}
