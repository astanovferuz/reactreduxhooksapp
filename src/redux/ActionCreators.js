import * as ActionTypes from "./ActionTypes";

export const addPost = post => dispatch => {
    dispatch(addNewPost(post));
}

const addNewPost = post => ({
    type: ActionTypes.ADD_POST,
    payload: post
});