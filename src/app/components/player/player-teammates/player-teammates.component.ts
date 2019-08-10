import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Teammate } from 'src/app/models/teammate.model';
import { PlayerChartsState } from 'src/app/store/player-charts/player-charts.reducer';
import { FetchPlayerTeammatesAction } from 'src/app/store/player-charts/player-charts.actions';
import { Player } from 'src/app/models/player.model';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-player-teammates',
  templateUrl: './player-teammates.component.html',
  styleUrls: ['./player-teammates.component.scss']
})
export class PlayerTeammatesComponent implements OnInit {

  @Input() player: Observable<Player>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'wins', 'loss', 'rate'];
  teammates: MatTableDataSource<Teammate[]>;

  constructor(
    private translate: TranslateService,
    private playerChartsStore: Store<PlayerChartsState>) { }

  ngOnInit(): void {
    // load teammates
    this.playerChartsStore.select('playerCharts').subscribe(
      (playerChartsState => {
        const data = new MatTableDataSource<Teammate[]>(playerChartsState.teammates);
        data.paginator = this.paginator;
        data.sort = this.sort;
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
