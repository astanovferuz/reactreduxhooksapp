import * as ActionTypes from "./ActionTypes";

export const addPost = post => dispatch => {
    dispatch(addNewPost(post));
}

const addNewPost = post => ({
    type: ActionTypes.ADD_POST,
    payload: post
});

export const deletePost = postId => dispatch => {
    dispatch(deletePostById(postId));
}

const deletePostById = postId => ({
    type: ActionTypes.DELETE_POST,
    payload: postId
});

export const editPost = posts => dispatch => {
    dispatch(editPostById(posts));
}

const editPostById = posts => ({
    type: ActionTypes.EDIT_POST,
    payload: posts
});