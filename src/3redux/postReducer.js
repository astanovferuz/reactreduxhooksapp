import * as ActionTypes from "../redux/ActionTypes";

export const postDataReducerAxios = (state = {postsData: []}, action) => {
    switch(action.type) {
        case (ActionTypes.AXIOS_EDIT_POST):
            const post = action.payload;
            console.log(post);
            const index = state.postsData.findIndex(post => post.id === action.payload.id);
            const newPostsData = [...state.postsData];
            newPostsData[index] = {
                ...newPostsData[index],
                id: post.id,
                postTitle: post.postTitle,
                postBody: post.postBody
            }
            return {...state, postsData: newPostsData}
        case (ActionTypes.DELETE_AXIOS_POST):
            console.log("Payload", action.payload);
            const newPostData = state.postsData.filter(post => post.id !== action.payload)
            console.log("ids", newPostData)
            return {...state, postsData: newPostData}
        case (ActionTypes.AXIOS_ADD_POST):
            return {...state, postsData: action.payload}
        case (ActionTypes.POST_NEW_POST_AXIOS):
            return {...state, postsData: state.postsData.concat(action.payload)}
        default:
            return state;
    }
}