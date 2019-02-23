import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerState } from 'src/app/store/player/player.reducer';
import { Store } from '@ngrx/store';
import { Player } from 'src/app/models/player.model';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';
import { FetchPlayerAction } from 'src/app/store/player/player.actions';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  player: Observable<Player>;

  constructor(
    private playerStore: Store<PlayerState>,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // load player
    this.player = this.playerStore.select('players').pipe(map(
      (playerState: PlayerState) => {
        return playerState.player;
    }));
    // get selected player id
    this.route.params.subscribe(
      (params: any) => {
        this.playerStore.dispatch(new FetchPlayerAction(parseInt(params.id, 10)));
      }
    );
  }

}
