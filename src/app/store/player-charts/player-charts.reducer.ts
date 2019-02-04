import { Action } from '../action';
import { PlayerChartsActionType } from './player-charts.actions';
import { Teammate } from 'src/app/models/teammate.model';

export interface PlayerChartsState {
    scoreData: any;
    eloHistory: any;
    scoresHistory: any;
    teammates: Teammate[];
    isLoading: boolean;
    hasError: boolean;
}

export const initialState: PlayerChartsState = {
    scoreData: undefined,
    eloHistory: undefined,
    scoresHistory: undefined,
    teammates: [],
    isLoading: false,
    hasError: false
};

export function playerChartsReducer(state: PlayerChartsState = initialState, action: Action): PlayerChartsState {
    switch (action.type) {
        case PlayerChartsActionType.FETCH_PLAYER_TEAMMATES:
            return {
                ...state,
                isLoading: true,
                hasError: false
            };
        case PlayerChartsActionType.FETCH_PLAYER_SCORES:
            return {
                ...state,
                scoreData: undefined,
                isLoading: true,
                hasError: false
            };
        case PlayerChartsActionType.FETCH_PLAYER_ELO_HISTORY:
            return {
                ...state,
                eloHistory: undefined,
                isLoading: true,
                hasError: false
            };
        case PlayerChartsActionType.FETCH_PLAYER_SCORES_HISTORY:
            return {
                ...state,
                scoresHistory: undefined,
                isLoading: true,
                hasError: false
            };
        case PlayerChartsActionType.FETCH_PLAYER_SCORES_ERROR:
        case PlayerChartsActionType.FETCH_PLAYER_ELO_HISTORY_ERROR:
        case PlayerChartsActionType.FETCH_PLAYER_SCORES_HISTORY_ERROR:
        case PlayerChartsActionType.FETCH_PLAYER_TEAMMATES_ERROR:
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
        case PlayerChartsActionType.FETCH_PLAYER_ELO_HISTORY_SUCCESS:
            return {
                ...state,
                eloHistory: action.payload,
                isLoading: false,
                hasError: false
            };
        case PlayerChartsActionType.FETCH_PLAYER_SCORES_HISTORY_SUCCESS:
            return {
                ...state,
                scoresHistory: action.payload,
                isLoading: false,
                hasError: false
            };
        case PlayerChartsActionType.FETCH_PLAYER_TEAMMATES_SUCCESS:
            return {
                ...state,
                teammates: action.payload,
                isLoading: false,
                hasError: false
            };
        default:
            return state;
    }
}
