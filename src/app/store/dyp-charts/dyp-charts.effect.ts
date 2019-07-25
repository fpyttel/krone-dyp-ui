import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { asyncScheduler, Observable, of } from 'rxjs';
import { map, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { Action } from '../action';
import {
    DypChartsActionType,
    FetchDypTeamEloAction,
    FetchDypTeamEloSuccessAction,
    FetchDypTeamEloErrorAction,
    FetchDypStatsErrorAction,
    FetchDypStatsAction,
    FetchDypStatsSuccessAction } from './dyp-charts.actions';
import { DypService } from 'src/app/services/dyp.service';

@Injectable()
export class DypChartsEffects {

    constructor(
        private actions$: Actions,
        private dypService: DypService) { }

    @Effect()
    fetchDypTeamElo$ = ({
        debounce = 300,
        scheduler = asyncScheduler
    } = {}): Observable<Action> =>
        this.actions$.pipe(
            ofType<FetchDypTeamEloAction>(DypChartsActionType.FETCH_DYP_TEAM_ELO),
            debounceTime(debounce, scheduler),
            switchMap(action => {
                return this.dypService.getDypTeamElo(action.payload).pipe(
                    map((scoreData: any) => {
                        return new FetchDypTeamEloSuccessAction(scoreData);
                    })
                );
            }),
            catchError(err => of(new FetchDypTeamEloErrorAction(err)))
        )

    @Effect()
    fetchDypStatistic$ = ({
        debounce = 300,
        scheduler = asyncScheduler
    } = {}): Observable<Action> =>
        this.actions$.pipe(
            ofType<FetchDypStatsAction>(DypChartsActionType.FETCH_DYP_STATS),
            debounceTime(debounce, scheduler),
            switchMap(action => {
                return this.dypService.getDypStatistic(action.payload).pipe(
                    map((statsData: any) => {
                        return new FetchDypStatsSuccessAction(statsData);
                    })
                );
            }),
            catchError(err => of(new FetchDypStatsErrorAction(err)))
        )
}
