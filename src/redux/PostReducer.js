import { POSTS } from "../shared/posts";
import * as ActionTypes from "./ActionTypes";

export const PostReducer = (state = {posts: POSTS}, action) => {
    switch(action.type) {
        case ActionTypes.EDIT_POST:
            return {...state, posts: action.payload}
        case ActionTypes.DELETE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
        case ActionTypes.ADD_POST:
            return {...state, posts: state.posts.concat(action.payload)}
        default:
            return state;
    }
}