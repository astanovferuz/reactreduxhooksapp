import React from "react";

const MappedPostComponent = ({post}) => {
    return(
        <div>
            <h4>{post.postTitle}</h4>
            <h5>{post.postBody}</h5>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}

export default MappedPostComponent;