import * as ActionTypes from "../redux/ActionTypes";

export const postDataReducer = (state = {postsData: []}, action) => {
    switch(action.type) {
        case (ActionTypes.FETCH_EDIT_POST):
            const post = action.payload;
            const index = state.postsData.findIndex(post => post.id === action.payload.id);
            console.log("R index", index)
            const newPostsData = [...state.postsData];
            newPostsData[index] = {
                ...newPostsData[index],
                id: post.id,
                postTitle: post.postTitle,
                postBody: post.postBody
            }
            return {...state, postsData: newPostsData}
        case (ActionTypes.DELETE_FETCH_POST):
            const newPostData = state.postsData.filter(post => post.id !== action.payload)
            return {...state, postsData: newPostData}
        case (ActionTypes.FETCH_ADD_POST):
            return {...state, postsData: action.payload}
        case (ActionTypes.POST_NEW_POST):
            return {...state, postsData: state.postsData.concat(action.payload)}
        default:
            return state;
    }
}