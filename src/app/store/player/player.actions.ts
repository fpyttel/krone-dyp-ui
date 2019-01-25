import { Action } from '../action';
import { Player } from '../../models/player.model';

export enum PlayerActionType {
    FETCH_PLAYER =                 '[Player] Get player infos',
    FETCH_PLAYER_ERROR =           '[Player] Get player infos error',
    FETCH_PLAYER_SUCCESS =         '[Player] Get player infos success'
}

export class FetchPlayerAction implements Action {
    readonly type = PlayerActionType.FETCH_PLAYER;
    constructor(public payload: number) {}
}

export class FetchPlayerErrorAction implements Action {
    readonly type = PlayerActionType.FETCH_PLAYER_ERROR;
    constructor(public payload: Error) {}
}

export class FetchPlayerSuccessAction implements Action {
    readonly type = PlayerActionType.FETCH_PLAYER_SUCCESS;
    constructor(public payload: Player) {}
}


export type PlayerActions =
    FetchPlayerAction
    | FetchPlayerErrorAction
    | FetchPlayerSuccessAction;
