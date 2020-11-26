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

export const postPost = (postTitle, postBody) => dispatch => {

    const newPost= {
        postTitle: postTitle,
        postBody: postBody
    }

    newPost.id = Date.now();

    fetch(baseUrl + "posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(response => dispatch(postNewPost(response)));
}

const postNewPost = post => ({
    type: ActionTypes.POST_NEW_POST,
    payload: post
})