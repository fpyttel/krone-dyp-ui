import { Action } from '../action';

export enum DypChartsActionType {
    FETCH_DYP_TEAM_ELO =                   '[Player] Get dyp team elo',
    FETCH_DYP_TEAM_ELO_ERROR =             '[Player] Get dyp team elo error',
    FETCH_DYP_TEAM_ELO_SUCCESS =           '[Player] Get dyp team elo success'
}

export class FetchDypTeamEloAction implements Action {
    readonly type = DypChartsActionType.FETCH_DYP_TEAM_ELO;
    constructor(public payload: number) {}
}

export class FetchDypTeamEloErrorAction implements Action {
    readonly type = DypChartsActionType.FETCH_DYP_TEAM_ELO_ERROR;
    constructor(public payload: Error) {}
}

export class FetchDypTeamEloSuccessAction implements Action {
    readonly type = DypChartsActionType.FETCH_DYP_TEAM_ELO_SUCCESS;
    constructor(public payload: any) {}
}

export type DypChartsActions =
    | FetchDypTeamEloAction
    | FetchDypTeamEloErrorAction
    | FetchDypTeamEloSuccessAction;
