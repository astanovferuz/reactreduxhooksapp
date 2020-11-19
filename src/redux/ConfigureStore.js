import { createStore, applyMiddleware, combineReducers } from "redux";
import { PostReducer } from "./PostReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        posts: PostReducer
    }), applyMiddleware(thunk, logger));
    return store;
}