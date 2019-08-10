import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Player } from 'src/app/models/player.model';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { PlayerChartsState } from 'src/app/store/player-charts/player-charts.reducer';
import { Store } from '@ngrx/store';
import { FetchPlayerScoreboardAction } from 'src/app/store/player-charts/player-charts.actions';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  playerControl = new FormControl();
  options: Player[] = [
    {id: 1, firstName: 'Ferdinand', lastName: 'Pyttel'},
    {id: 2, firstName: 'Daniel', lastName: 'Berger'},
    {id: 3, firstName: 'Lars', lastName: 'Schwolow'}
  ];

  filteredOptions: Observable<Player[]>;
  selectedLang;

  constructor(
    private translate: TranslateService,
    private playerChartsStore: Store<PlayerChartsState>,
    private router: Router) { }

  ngOnInit(): void {
    // configure language selector
    this.selectedLang = this.translate.getDefaultLang();

    // configure controller
    this.filteredOptions = this.playerControl.valueChanges.pipe(
      startWith<string | Player>(''),
      map(value => typeof value === 'string' ? value : value.firstName + ' ' + value.lastName),
      map(name => name ? this._filter(name) : this.options.slice())
    );
    // load scoreboard
    this.playerChartsStore.select('playerCharts').subscribe(
      (playerChartsState => {
        this.options = playerChartsState.scoreboard;
      }));
    // fetch data
    this.playerChartsStore.dispatch(new FetchPlayerScoreboardAction(null));
  }

  displayFn(player?: Player): string | undefined {
    return player ? player.firstName + ' ' + player.lastName : undefined;
  }

  playerSelected(selectedPlayer: Player): void {
    this.router.navigate(['/player', selectedPlayer.id]);
    this.playerControl.setValue('');
  }

  languageSelected(): void {
    this.translate.use(this.selectedLang);
  }

  private _filter(value: string): Player[] {
    const playerId = Number(value);
    if (isNaN(playerId)) {
      const filterValue = value.toLowerCase();
      return this.options.filter(
        option => (option.firstName + ' ' + option.lastName).toLowerCase().indexOf(filterValue) !== -1);
    } else {
      return this.options.filter(
        option => option.id === playerId);
    }
  }
}
