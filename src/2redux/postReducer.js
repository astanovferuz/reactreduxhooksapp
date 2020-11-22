import * as ActionTypes from "../redux/ActionTypes";

export const postDataReducer = (state = {postsData: []}, action) => {
    switch(action.type) {
        case (ActionTypes.FETCH_ADD_POST):
            return {...state, postsData: action.payload}
        default:
            return state;
    }
}