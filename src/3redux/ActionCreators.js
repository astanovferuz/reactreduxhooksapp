import * as ActionTypes from "../redux/ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";

export const fetchPosts = () => async dispatch => {
    const response = await axios.get(baseUrl + "posts")
        const fetData = response.data;
        dispatch(fetchAddPosts(fetData))
}

const fetchAddPosts = posts => ({
    type: ActionTypes.AXIOS_ADD_POST,
    payload: posts
});

export const postPost = (postTitle, postBody) => dispatch => {

    const newPost= {
        postTitle: postTitle,
        postBody: postBody
    }

    newPost.id = Date.now();

    axios.post(baseUrl + "posts", newPost)
    .then(response => {
        const postRespData = response.data;
        dispatch(postNewPost(postRespData));
    });
}

const postNewPost = post => ({
    type: ActionTypes.POST_NEW_POST_AXIOS,
    payload: post
});

export const deletePost = id => dispatch => {
   return axios.delete(baseUrl + `posts/${id}`)
   .then(response => dispatch(deleteById(id)));
}

const deleteById = id => ({
    type: ActionTypes.DELETE_AXIOS_POST,
    payload: id
});

export const editPost = (post) => dispatch => {
    return axios.put(baseUrl + `posts/${post.id}`, post)
    .then(response => dispatch(editPostById(response.data)));
}

const editPostById = (post) => ({
    type: ActionTypes.AXIOS_EDIT_POST,
    payload: post
});