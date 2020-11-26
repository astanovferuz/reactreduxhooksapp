import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, postPost } from "../2redux/ActionCreators";
import MappedPost from "./MappedPostComponent";

const ReduxFetchPostComponent = () => {

    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");

    const dispatch = useDispatch();
    const postsData = useSelector(state => state.postsData.postsData);

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    const mappedPosts = postsData.map(post => {
        return(
            <MappedPost key={post.id} post={post} />
        )
    });

    const handleTitleChange = (e) => {
        setPostTitle(e.target.value);
    }

    const handleBodyChange = (e) => {
        setPostBody(e.target.value);
    }

    const handleSubmit = () => {
        dispatch(postPost(postTitle, postBody));
    }


    return(
        <div>
            <h1>React Hooks Fetch Version</h1>
            <input onChange={handleTitleChange} type="text" name="postTitle" placeholder="enter title" />
            <input onChange={handleBodyChange} type="text" name="postBody" placeholder="enter body" />
            <button onClick={handleSubmit} type="button">Submit</button>
            {mappedPosts}
        </div>
    );
}

export default ReduxFetchPostComponent;