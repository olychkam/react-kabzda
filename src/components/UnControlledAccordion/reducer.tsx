import React, {useReducer, useState} from "react";


type ActionType = {
    type: string
}
export const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED';
export type StateType = {
    collapsed: boolean
}
export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            const stateCopy = {
                ...state,
                collapsed: !state.collapsed
            }
            return stateCopy;
        default:
            throw new Error('Bad action type')
    }
    return state;
}

