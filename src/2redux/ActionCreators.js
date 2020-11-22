import * as ActionTypes from "../redux/ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchPosts = () => dispatch => {
    fetch(baseUrl + "posts")
    .then(response => response.json())
    .then(posts => dispatch(fetchAddPosts(posts)));

}

const fetchAddPosts = posts => ({
    type: ActionTypes.FETCH_ADD_POST,
    payload: posts
});