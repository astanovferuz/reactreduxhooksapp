import React from "react";

const MappedPostComponent = ({post, deleteSelectedPost, findPostToEdit}) => {
    return(
        <div>
            <h4>{post.postTitle}</h4>
            <h5>{post.postBody}</h5>
            <button onClick={() => findPostToEdit(post.id)} >Edit</button>
            <button onClick={() => deleteSelectedPost(post.id)} >Delete</button>
        </div>
    );
}

export default MappedPostComponent;