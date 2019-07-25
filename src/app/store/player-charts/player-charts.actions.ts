import { Action } from '../action';
import { Teammate } from 'src/app/models/teammate.model';
import { Player } from 'src/app/models/player.model';
import { DypTeammate } from 'src/app/models/dyp-teammate.model';

export enum PlayerChartsActionType {
    FETCH_PLAYER_SCORES =                   '[Player] Get player scores',
    FETCH_PLAYER_SCORES_ERROR =             '[Player] Get player scores error',
    FETCH_PLAYER_SCORES_SUCCESS =           '[Player] Get player scores success',
    FETCH_PLAYER_ELO_HISTORY =              '[Player] Get player elo history',
    FETCH_PLAYER_ELO_HISTORY_ERROR =        '[Player] Get player elo history error',
    FETCH_PLAYER_ELO_HISTORY_SUCCESS =      '[Player] Get player elo history success',
    FETCH_PLAYER_SCORES_HISTORY =           '[Player] Get player scores history',
    FETCH_PLAYER_SCORES_HISTORY_ERROR =     '[Player] Get player scores history error',
    FETCH_PLAYER_SCORES_HISTORY_SUCCESS =   '[Player] Get player scores history success',
    FETCH_PLAYER_TEAMMATES =                '[Player] Get player teammates',
    FETCH_PLAYER_TEAMMATES_ERROR =          '[Player] Get player teammates error',
    FETCH_PLAYER_TEAMMATES_SUCCESS =        '[Player] Get player teammates success',
    FETCH_PLAYER_DYP_TEAMMATES =            '[Player] Get player dyp teammates',
    FETCH_PLAYER_DYP_TEAMMATES_ERROR =      '[Player] Get player dyp teammates error',
    FETCH_PLAYER_DYP_TEAMMATES_SUCCESS =    '[Player] Get player dyp teammates success',
    FETCH_PLAYER_SCOREBOARD =               '[Player] Get player scoreboard',
    FETCH_PLAYER_SCOREBOARD_ERROR =         '[Player] Get player scoreboard error',
    FETCH_PLAYER_SCOREBOARD_SUCCESS =       '[Player] Get player scoreboard success'
}

export class FetchPlayerScoresAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_SCORES;
    constructor(public payload: number) {}
}

export class FetchPlayerScoresErrorAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_SCORES_ERROR;
    constructor(public payload: Error) {}
}

export class FetchPlayerScoresSuccessAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_SCORES_SUCCESS;
    constructor(public payload: any) {}
}

export class FetchPlayerEloHistoryAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_ELO_HISTORY;
    constructor(public payload: number) {}
}

export class FetchPlayerEloHistoryErrorAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_ELO_HISTORY_ERROR;
    constructor(public payload: Error) {}
}

export class FetchPlayerEloHistorySuccessAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_ELO_HISTORY_SUCCESS;
    constructor(public payload: any) {}
}

export class FetchPlayerScoresHistoryAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_SCORES_HISTORY;
    constructor(public payload: number) {}
}

export class FetchPlayerScoresHistoryErrorAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_SCORES_HISTORY_ERROR;
    constructor(public payload: Error) {}
}

export class FetchPlayerScoresHistorySuccessAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_SCORES_HISTORY_SUCCESS;
    constructor(public payload: any) {}
}

export class FetchPlayerTeammatesAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_TEAMMATES;
    constructor(public payload: number) {}
}

export class FetchPlayerTeammatesErrorAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_TEAMMATES_ERROR;
    constructor(public payload: Error) {}
}

export class FetchPlayerTeammatesSuccessAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_TEAMMATES_SUCCESS;
    constructor(public payload: Teammate[]) {}
}

export class FetchPlayerDypTeammatesAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_DYP_TEAMMATES;
    constructor(public payload: number) {}
}

export class FetchPlayerDypTeammatesErrorAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_DYP_TEAMMATES_ERROR;
    constructor(public payload: Error) {}
}

export class FetchPlayerDypTeammatesSuccessAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_DYP_TEAMMATES_SUCCESS;
    constructor(public payload: DypTeammate[]) {}
}

export class FetchPlayerScoreboardAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_SCOREBOARD;
    constructor(public payload: number) {}
}

export class FetchPlayerScoreboardErrorAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_SCOREBOARD_ERROR;
    constructor(public payload: Error) {}
}

export class FetchPlayerScoreboardSuccessAction implements Action {
    readonly type = PlayerChartsActionType.FETCH_PLAYER_SCOREBOARD_SUCCESS;
    constructor(public payload: Player[]) {}
}

export type PlayerChartsActions =
    | FetchPlayerScoresAction
    | FetchPlayerScoresErrorAction
    | FetchPlayerScoresSuccessAction
    | FetchPlayerEloHistoryAction
    | FetchPlayerEloHistoryErrorAction
    | FetchPlayerEloHistorySuccessAction
    | FetchPlayerScoresHistoryAction
    | FetchPlayerScoresHistoryErrorAction
    | FetchPlayerScoresHistorySuccessAction
    | FetchPlayerTeammatesAction
    | FetchPlayerTeammatesErrorAction
    | FetchPlayerTeammatesSuccessAction
    | FetchPlayerDypTeammatesAction
    | FetchPlayerDypTeammatesErrorAction
    | FetchPlayerDypTeammatesSuccessAction
    | FetchPlayerScoreboardAction
    | FetchPlayerScoreboardErrorAction
    | FetchPlayerScoreboardSuccessAction;
