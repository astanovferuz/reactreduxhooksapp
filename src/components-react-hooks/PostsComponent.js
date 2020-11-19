import React, { useState } from "react";
import { POSTS } from "../shared/posts";
import MappedPost from "./MappedPost";

const PostsComponent = () => {

    const [posts, setPosts] = useState(POSTS)
    const [id, setId] = useState(null);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");

    const handleTitleChange = (e) => {
        const {value} = e.target
        setPostTitle(value)
    }

    const handleBodyChange = (e) => {
        const {value} = e.target;
        setPostBody(value);
    }


    const handleDelete = (id) => {
        const newPosts = posts.filter(post => post.id !== id);
        setPosts(newPosts);
    }

    const setEditPost = (postId) => {
        const postToFind = posts.filter(post => post.id === postId)[0];
        const {postTitle, postBody} = postToFind;
        setId(postToFind.id);
        setPostTitle(postTitle);
        setPostBody(postBody);
    }

    const handleSubmit = () => {
        if(id) {
            const index = posts.findIndex(post => post.id === id);
            const newPosts = [...posts];
            newPosts[index] = {
                ...newPosts[index],
                postTitle: postTitle,
                postBody: postBody
            }

            setPosts(newPosts);
            setPostTitle("");
            setPostBody("");
            setId(null);
        }
        else {
            const newPost = {
                id: Date.now(),
                postTitle: postTitle,
                postBody: postBody
            }
    
            const newPosts = posts.concat(newPost);
            setPosts(newPosts);
            setPostTitle("");
            setPostBody("");
            setId(null);
        }
    }

    const mappedPosts = posts.map(post => {
        return(
            <MappedPost setEditPost={setEditPost} handleDelete={handleDelete} key={post.id} post={post} />
        )
    })

    return(
        <div>
            <h1>React Hooks Version</h1>
            <input onChange={handleTitleChange} value={postTitle} type="text" name="postTitle" placeholder="enter title" />
            <input onChange={handleBodyChange} value={postBody} type="text" name="postBody" placeholder="enter body" />
            <button onClick={handleSubmit} type="button">Submit</button>
            {mappedPosts}
        </div>
    );
}

export default PostsComponent;