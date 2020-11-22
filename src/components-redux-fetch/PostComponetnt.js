import React from "react";

const ReduxFetchPostComponent = () => {
    return(
        <div>
            <h1>React Hooks Version</h1>
            <input type="text" name="postTitle" placeholder="enter title" />
            <input type="text" name="postBody" placeholder="enter body" />
            <button type="button">Submit</button>
        </div>
    );
}

export default ReduxFetchPostComponent;