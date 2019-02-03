import { Action } from '../action';
import { PlayerChartsActionType } from './player-charts.actions';

export interface PlayerChartsState {
    scoreData: any;
    eloHistory: any;
    scoresHistory: any;
    isLoading: boolean;
    hasError: boolean;
}

export const initialState: PlayerChartsState = {
    scoreData: undefined,
    eloHistory: undefined,
    scoresHistory: undefined,
    isLoading: false,
    hasError: false
};

export function playerChartsReducer(state: PlayerChartsState = initialState, action: Action): PlayerChartsState {
    switch (action.type) {
        case PlayerChartsActionType.FETCH_PLAYER_SCORES:
            return {
                ...state,
                isLoading: true,
                hasError: false
            };
        case PlayerChartsActionType.FETCH_PLAYER_SCORES_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        case PlayerChartsActionType.FETCH_PLAYER_SCORES_SUCCESS:
            return {
                ...state,
                scoreData: action.payload,
                isLoading: false,
                hasError: false
            };
        case PlayerChartsActionType.FETCH_PLAYER_ELO_HISTORY:
            return {
                ...state,
                isLoading: true,
                hasError: false
            };
        case PlayerChartsActionType.FETCH_PLAYER_ELO_HISTORY_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        case PlayerChartsActionType.FETCH_PLAYER_ELO_HISTORY_SUCCESS:
            return {
                ...state,
                eloHistory: action.payload,
                isLoading: false,
                hasError: false
            };
        case PlayerChartsActionType.FETCH_PLAYER_SCORES_HISTORY:
            return {
                ...state,
                isLoading: true,
                hasError: false
            };
        case PlayerChartsActionType.FETCH_PLAYER_SCORES_HISTORY_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        case PlayerChartsActionType.FETCH_PLAYER_SCORES_HISTORY_SUCCESS:
            return {
                ...state,
                scoresHistory: action.payload,
                isLoading: false,
                hasError: false
            };
        default:
            return state;
    }
}
