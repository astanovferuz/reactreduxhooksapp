import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, postPost, deletePost, editPost } from "../2redux/ActionCreators";
import MappedPost from "./MappedPostComponent";

const ReduxFetchPostComponent = () => {

    const [id, setId] = useState(null);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");

    const dispatch = useDispatch();
    const postsData = useSelector(state => state.postsData.postsData);

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    const handleDelete = (id) => {
        dispatch(deletePost(id))
    }

    const setEditPost = (post) => {
        setId(post.id);
        setPostTitle(post.postTitle);
        setPostBody(post.postBody);
    }

    const mappedPosts = postsData.map(post => {
        return(
            <MappedPost key={post.id} post={post} handleDelete={handleDelete} setEditPost={setEditPost}/>
        )
    });

    const handleTitleChange = (e) => {
        setPostTitle(e.target.value);
    }

    const handleBodyChange = (e) => {
        setPostBody(e.target.value);
    }

    const handleSubmit = () => {
        if(id !== null) {
            const postToUpdate = {
                id: id,
                postTitle: postTitle,
                postBody: postBody
            }
            dispatch(editPost(postToUpdate));
            setId(null);
            setPostTitle("");
            setPostBody("");
        } else {
            dispatch(postPost(postTitle, postBody));
            setId(null);
            setPostTitle("");
            setPostBody("");
        }
    }

    return(
        <div>
            <h1>React Hooks Fetch Version</h1>
            <input onChange={handleTitleChange} value={postTitle} type="text" name="postTitle" placeholder="enter title" />
            <input onChange={handleBodyChange} value={postBody} type="text" name="postBody" placeholder="enter body" />
            <button onClick={handleSubmit} type="button">Submit</button>
            {mappedPosts}
        </div>
    );
}

export default ReduxFetchPostComponent;