import { Action } from '../action';
import { Player } from '../../models/player.model';
import { PlayerActionType } from './player.actions';

export interface PlayerState {
    player: Player;
    isLoading: boolean;
    hasError: boolean;
}

export const initialState: PlayerState = {
    player: null,
    isLoading: false,
    hasError: false
};

export function playerReducer(state: PlayerState = initialState, action: Action): PlayerState {
    switch (action.type) {
        case PlayerActionType.FETCH_PLAYER:
            return {
                ...state,
                isLoading: true,
                hasError: false
            };
        case PlayerActionType.FETCH_PLAYER_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        case PlayerActionType.FETCH_PLAYER_SUCCESS:
            return {
                ...state,
                player: action.payload,
                isLoading: false,
                hasError: false
            };
        default:
            return state;
    }
}
