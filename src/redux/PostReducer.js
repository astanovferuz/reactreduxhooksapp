import { POSTS } from "../shared/posts";
import * as ActionTypes from "./ActionTypes";

export const PostReducer = (state = {posts: POSTS}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_POST:
            return {...state, posts: state.posts.concat(action.payload)}
        default:
            return state;
    }
}