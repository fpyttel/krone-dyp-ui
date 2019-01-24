import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { asyncScheduler, Observable, of } from 'rxjs';
import { map, switchMap, debounceTime, catchError } from 'rxjs/operators';
import {
    FetchDypAction,
    DypActionType,
    FetchDypErrorAction,
    FetchDypSuccessAction,
    FetchDypListAction,
    FetchDypListSuccessAction,
    FetchDypListErrorAction } from './dyp.actions';
import { DypService } from 'src/app/services/dyp.service';
import { Dyp } from 'src/app/models/dyp.model';
import { Action } from '../action';

@Injectable()
export class DypEffects {

    constructor(
        private actions$: Actions,
        private dypService: DypService) { }

    @Effect()
    fetchDyp$ = ({
        debounce = 300,
        scheduler = asyncScheduler
    } = {}): Observable<Action> =>
        this.actions$.pipe(
            ofType<FetchDypAction>(DypActionType.FETCH_DYP),
            debounceTime(debounce, scheduler),
            switchMap(action => {
                return this.dypService.getDyp(action.payload).pipe(
                    map((dyp: Dyp) => {
                        return new FetchDypSuccessAction(dyp);
                    })
                );
            }),
            catchError(err => of(new FetchDypErrorAction(err)))
        )

    @Effect()
    fetchDypList$ = ({
        debounce = 300,
        scheduler = asyncScheduler
    } = {}): Observable<Action> =>
        this.actions$.pipe(
            ofType<FetchDypListAction>(DypActionType.FETCH_DYP_LIST),
            debounceTime(debounce, scheduler),
            switchMap(action => {
                return this.dypService.getDypList().pipe(
                    map((dypList: Dyp[]) => {
                        return new FetchDypListSuccessAction(dypList);
                    })
                );
            }),
            catchError(err => of(new FetchDypListErrorAction(err)))
        )

}
