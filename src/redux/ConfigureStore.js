import { createStore, applyMiddleware, combineReducers } from "redux";
import { PostReducer } from "./PostReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { postDataReducer } from "../2redux/postReducer";

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        posts: PostReducer,
        postsData: postDataReducer
    }), applyMiddleware(thunk, logger));
    return store;
}