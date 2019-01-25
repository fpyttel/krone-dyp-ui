import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { asyncScheduler, Observable, of } from 'rxjs';
import { map, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { Action } from '../action';
import { PlayerService } from '../../services/player.service';
import {
    FetchPlayerAction,
    PlayerActionType,
    FetchPlayerSuccessAction,
    FetchPlayerErrorAction,
    FetchPlayerScoresAction,
    FetchPlayerScoresSuccessAction,
    FetchPlayerScoresErrorAction } from './player.actions';
import { Player } from '../../models/player.model';

@Injectable()
export class PlayerEffects {

    constructor(
        private actions$: Actions,
        private playerService: PlayerService) { }

    @Effect()
    fetchPlayer$ = ({
        debounce = 300,
        scheduler = asyncScheduler
    } = {}): Observable<Action> =>
        this.actions$.pipe(
            ofType<FetchPlayerAction>(PlayerActionType.FETCH_PLAYER),
            debounceTime(debounce, scheduler),
            switchMap(action => {
                return this.playerService.getPlayer(action.payload).pipe(
                    map((player: Player) => {
                        return new FetchPlayerSuccessAction(player);
                    })
                );
            }),
            catchError(err => of(new FetchPlayerErrorAction(err)))
        )

    @Effect()
    fetchPlayerScores$ = ({
        debounce = 300,
        scheduler = asyncScheduler
    } = {}): Observable<Action> =>
        this.actions$.pipe(
            ofType<FetchPlayerScoresAction>(PlayerActionType.FETCH_PLAYER_SCORES),
            debounceTime(debounce, scheduler),
            switchMap(action => {
                return this.playerService.getPlayerScores(action.payload).pipe(
                    map((scoreData: any) => {
                        return new FetchPlayerScoresSuccessAction(scoreData);
                    })
                );
            }),
            catchError(err => of(new FetchPlayerScoresErrorAction(err)))
        )
}
