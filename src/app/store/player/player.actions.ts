import { Action } from '../action';
import { Player } from '../../models/player.model';

export enum PlayerActionType {
    FETCH_PLAYER =                 '[Player] Get player infos',
    FETCH_PLAYER_ERROR =           '[Player] Get player infos error',
    FETCH_PLAYER_SUCCESS =         '[Player] Get player infos success',
    FETCH_PLAYER_SCORES =          '[Player] Get player scores',
    FETCH_PLAYER_SCORES_ERROR =    '[Player] Get player scores error',
    FETCH_PLAYER_SCORES_SUCCESS =  '[Player] Get player scores success'
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

export class FetchPlayerScoresAction implements Action {
    readonly type = PlayerActionType.FETCH_PLAYER_SCORES;
    constructor(public payload: number) {}
}

export class FetchPlayerScoresErrorAction implements Action {
    readonly type = PlayerActionType.FETCH_PLAYER_SCORES_ERROR;
    constructor(public payload: Error) {}
}

export class FetchPlayerScoresSuccessAction implements Action {
    readonly type = PlayerActionType.FETCH_PLAYER_SCORES_SUCCESS;
    constructor(public payload: any) {}
}

export type PlayerActions =
    FetchPlayerAction
    | FetchPlayerErrorAction
    | FetchPlayerSuccessAction
    | FetchPlayerScoresAction
    | FetchPlayerScoresErrorAction
    | FetchPlayerScoresSuccessAction;
