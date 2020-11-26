import * as ActionTypes from "../redux/ActionTypes";

export const postDataReducer = (state = {postsData: []}, action) => {
    switch(action.type) {
        case (ActionTypes.FETCH_ADD_POST):
            return {...state, postsData: action.payload}
        case (ActionTypes.POST_NEW_POST):
            return {...state, postsData: state.postsData.concat(action.payload)}
        default:
            return state;
    }
}