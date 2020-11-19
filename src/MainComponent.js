import React from "react";
import PostsComponent from "./components-react-hooks/PostsComponent";
import ReduxPostComponent from "./components-redux-hooks/PostComponent"

function Main() {
    return(
        <div>
            <PostsComponent />
            <ReduxPostComponent />
        </div>
    );
}

export default Main;