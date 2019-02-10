import { Action } from '../action';
import { DypChartsActionType } from './dyp-charts.actions';

export interface DypChartsState {
    teamElo: any;
    isLoading: boolean;
    hasError: boolean;
}

export const initialState: DypChartsState = {
    teamElo: undefined,
    isLoading: false,
    hasError: false
};

export function dypChartsReducer(state: DypChartsState = initialState, action: Action): DypChartsState {
    switch (action.type) {
        case DypChartsActionType.FETCH_DYP_TEAM_ELO:
            return {
                ...state,
                isLoading: true,
                hasError: false
            };
        case DypChartsActionType.FETCH_DYP_TEAM_ELO_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        case DypChartsActionType.FETCH_DYP_TEAM_ELO_SUCCESS:
            return {
                ...state,
                teamElo: action.payload,
                isLoading: false,
                hasError: false
            };
        default:
            return state;
    }
}
