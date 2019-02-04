import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { asyncScheduler, Observable, of } from 'rxjs';
import { map, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { Action } from '../action';
import { PlayerService } from '../../services/player.service';
import {
    PlayerChartsActionType,
    FetchPlayerScoresAction,
    FetchPlayerScoresSuccessAction,
    FetchPlayerScoresErrorAction,
    FetchPlayerEloHistoryAction,
    FetchPlayerEloHistorySuccessAction,
    FetchPlayerEloHistoryErrorAction,
    FetchPlayerScoresHistoryAction,
    FetchPlayerScoresHistorySuccessAction,
    FetchPlayerScoresHistoryErrorAction,
    FetchPlayerTeammatesAction,
    FetchPlayerTeammatesSuccessAction,
    FetchPlayerTeammatesErrorAction} from './player-charts.actions';

@Injectable()
export class PlayerChartsEffects {

    constructor(
        private actions$: Actions,
        private playerService: PlayerService) { }

    @Effect()
    fetchPlayerScores$ = ({
        debounce = 300,
        scheduler = asyncScheduler
    } = {}): Observable<Action> =>
        this.actions$.pipe(
            ofType<FetchPlayerScoresAction>(PlayerChartsActionType.FETCH_PLAYER_SCORES),
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

    @Effect()
    fetchPlayerEloHistory$ = ({
        debounce = 300,
        scheduler = asyncScheduler
    } = {}): Observable<Action> =>
        this.actions$.pipe(
            ofType<FetchPlayerEloHistoryAction>(PlayerChartsActionType.FETCH_PLAYER_ELO_HISTORY),
            debounceTime(debounce, scheduler),
            switchMap(action => {
                return this.playerService.getPlayerEloHistory(action.payload).pipe(
                    map((scoreData: any) => {
                        return new FetchPlayerEloHistorySuccessAction(scoreData);
                    })
                );
            }),
            catchError(err => of(new FetchPlayerEloHistoryErrorAction(err)))
        )

    @Effect()
    fetchPlayerScoresHistory$ = ({
        debounce = 300,
        scheduler = asyncScheduler
    } = {}): Observable<Action> =>
        this.actions$.pipe(
            ofType<FetchPlayerScoresHistoryAction>(PlayerChartsActionType.FETCH_PLAYER_SCORES_HISTORY),
            debounceTime(debounce, scheduler),
            switchMap(action => {
                return this.playerService.getPlayerScoresHistory(action.payload).pipe(
                    map((scoreData: any) => {
                        return new FetchPlayerScoresHistorySuccessAction(scoreData);
                    })
                );
            }),
            catchError(err => of(new FetchPlayerScoresHistoryErrorAction(err)))
        )

    @Effect()
    fetchPlayerTeammates$ = ({
        debounce = 300,
        scheduler = asyncScheduler
    } = {}): Observable<Action> =>
        this.actions$.pipe(
            ofType<FetchPlayerTeammatesAction>(PlayerChartsActionType.FETCH_PLAYER_TEAMMATES),
            debounceTime(debounce, scheduler),
            switchMap(action => {
                return this.playerService.getPlayerTeammates(action.payload).pipe(
                    map((scoreData: any) => {
                        return new FetchPlayerTeammatesSuccessAction(scoreData);
                    })
                );
            }),
            catchError(err => of(new FetchPlayerTeammatesErrorAction(err)))
        )
}
