import React, { useState } from "react";
import { useSelector } from "react-redux";
import MappedPostComponent from "./MappedPostComponent";
import { useDispatch } from "react-redux";
import { addPost, deletePost, editPost } from "../redux/ActionCreators";

const ReduxPostComponent = () => {

    const dispatch = useDispatch();
    const postsList = useSelector(state => state.posts.posts);

    const [id, setId] = useState(null);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");


    const deleteSelectedPost = (postId) => {
        dispatch(deletePost(postId));
    } 

    const findPostToEdit = (postId) => {
        const postToFind = postsList.filter(post => post.id === postId)[0];

        setId(postToFind.id);
        setPostTitle(postToFind.postTitle);
        setPostBody(postToFind.postBody);
    }

    const mappedPosts = postsList.map(post => {
        return(
            <MappedPostComponent post={post} key={post.id} deleteSelectedPost={deleteSelectedPost} findPostToEdit={findPostToEdit} />
        );
    });

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setPostTitle(value);
    }

    const handleBodyChange = (e) => {
        const value = e.target.value;
        setPostBody(value);
    }

    const handleSubmit = () => {
        if(id !== null) {
            const postsCopy = [...postsList];
            const index = postsCopy.findIndex(post => post.id === id);

            postsCopy[index] = {
                ...postsCopy[index],
                id: id,
                postTitle: postTitle,
                postBody: postBody
            }
           
            setId(null);
            setPostTitle("");
            setPostBody("");
            dispatch(editPost(postsCopy));
        }
        else {
            const newPost = {
                id: Date.now(),
                postTitle: postTitle,
                postBody: postBody
            }
    
            dispatch(addPost(newPost));
            setPostTitle("");
            setPostBody("");
        }
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