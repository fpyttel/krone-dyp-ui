import { Action } from '../action';
import { Dyp } from 'src/app/models/dyp.model';

export enum DypActionType {
    FETCH_DYP =                 '[Dyp] Get Dyp infos',
    FETCH_DYP_ERROR =           '[Dyp] Get Dyp infos error',
    FETCH_DYP_SUCCESS =         '[Dyp] Get Dyp infos success',
    FETCH_DYP_LIST =            '[Dyp] Get Dyp list',
    FETCH_DYP_LIST_ERROR =      '[Dyp] Get Dyp list error',
    FETCH_DYP_LIST_SUCCESS =    '[Dyp] Get Dyp list success'
}

export class FetchDypAction implements Action {
    readonly type = DypActionType.FETCH_DYP;
    constructor(public payload: number) {}
}

export class FetchDypErrorAction implements Action {
    readonly type = DypActionType.FETCH_DYP_ERROR;
    constructor(public payload: Error) {}
}

export class FetchDypSuccessAction implements Action {
    readonly type = DypActionType.FETCH_DYP_SUCCESS;
    constructor(public payload: Dyp) {}
}

export class FetchDypListAction implements Action {
    readonly type = DypActionType.FETCH_DYP_LIST;
}

export class FetchDypListErrorAction implements Action {
    readonly type = DypActionType.FETCH_DYP_LIST_ERROR;
    constructor(public payload: Error) {}
}

export class FetchDypListSuccessAction implements Action {
    readonly type = DypActionType.FETCH_DYP_LIST_SUCCESS;
    constructor(public payload: Dyp[]) {}
}

export type DypActions =
    FetchDypAction
    | FetchDypErrorAction
    | FetchDypSuccessAction
    | FetchDypListAction
    | FetchDypListErrorAction
    | FetchDypListSuccessAction;
