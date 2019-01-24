import { Dyp } from 'src/app/models/dyp.model';
import { Action } from '../action';
import { DypActionType } from './dyp.actions';

export interface DypState {
    dyp: Dyp;
    lastDyp: Dyp;
    dypList: Dyp[];
    isLoading: boolean;
    hasError: boolean;
}

export const initialState: DypState = {
    dyp: null,
    lastDyp: undefined,
    dypList: [],
    isLoading: false,
    hasError: false
};

export function dypReducer(state: DypState = initialState, action: Action): DypState {
    switch (action.type) {
        case DypActionType.FETCH_DYP:
            return {
                ...state,
                isLoading: true,
                hasError: false
            };
        case DypActionType.FETCH_DYP_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        case DypActionType.FETCH_DYP_SUCCESS:
            return {
                ...state,
                dyp: action.payload,
                isLoading: false,
                hasError: false
            };
        case DypActionType.FETCH_DYP_LIST:
            return {
                ...state,
                isLoading: true,
                hasError: false
            };
        case DypActionType.FETCH_DYP_LIST_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        case DypActionType.FETCH_DYP_LIST_SUCCESS:
            return {
                ...state,
                lastDyp: action.payload && action.payload.length > 0 ? action.payload[0] : undefined,
                dypList: action.payload,
                isLoading: false,
                hasError: false
            };
        default:
            return state;
    }
}
