import { Action } from '../action';
import { DypStatistic } from 'src/app/models/dyp.model';

export enum DypChartsActionType {
    FETCH_DYP_TEAM_ELO =                    '[Dyp] Get dyp team elo',
    FETCH_DYP_TEAM_ELO_ERROR =              '[Dyp] Get dyp team elo error',
    FETCH_DYP_TEAM_ELO_SUCCESS =            '[Dyp] Get dyp team elo success',
    FETCH_DYP_STATS =                       '[Dyp] Get dyp stats',
    FETCH_DYP_STATS_ERROR =                 '[Dyp] Get dyp stats error',
    FETCH_DYP_STATS_SUCCESS =               '[Dyp] Get dyp stats success'
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

export class FetchDypStatsAction implements Action {
    readonly type = DypChartsActionType.FETCH_DYP_STATS;
    constructor(public payload: number) {}
}

export class FetchDypStatsErrorAction implements Action {
    readonly type = DypChartsActionType.FETCH_DYP_STATS_ERROR;
    constructor(public payload: Error) {}
}

export class FetchDypStatsSuccessAction implements Action {
    readonly type = DypChartsActionType.FETCH_DYP_STATS_SUCCESS;
    constructor(public payload: DypStatistic) {}
}

export type DypChartsActions =
    | FetchDypTeamEloAction
    | FetchDypTeamEloErrorAction
    | FetchDypTeamEloSuccessAction
    | FetchDypStatsAction
    | FetchDypStatsErrorAction
    | FetchDypStatsSuccessAction;
