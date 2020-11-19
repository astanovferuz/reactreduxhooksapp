import React, { useState } from "react";
import { useSelector } from "react-redux";
import MappedPostComponent from "./MappedPostComponent";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/ActionCreators";

const ReduxPostComponent = () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");

    const mappedPosts = posts.map(post => {
        return(
            <MappedPostComponent post={post} key={post.id} />
        );
    });

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setPostTitle(value);
        console.log(postTitle);
    }

    const handleBodyChange = (e) => {
        const value = e.target.value;
        setPostBody(value);
        console.log(postBody);
    }

    const handleSubmit = () => {
        const newPost = {
            id: Date.now(),
            postTitle: postTitle,
            postBody: postBody
        }

        dispatch(addPost(newPost));
    }

    return(
        <div>
            <h1>React Redux Hooks Version</h1>
            <input onChange={handleTitleChange} type="text" value={postTitle} name="postTitle" placeholder="enter title" />
            <input onChange={handleBodyChange} type="text" value={postBody} name="postBody" placeholder="enter body" />
            <button onClick={handleSubmit} type="button">Submit</button>
            {mappedPosts}
        </div>
    );
}

export default ReduxPostComponent;