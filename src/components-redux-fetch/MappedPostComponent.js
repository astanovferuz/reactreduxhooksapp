import React from "react";

const MappedPost = ({post, handleDelete, setEditPost}) => {
    return(
        <div>
            <h4>{post.postTitle}</h4>
            <h5>{post.postBody}</h5>
            <button onClick={() => setEditPost(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
    );
}

export default MappedPost;