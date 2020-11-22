import React from "react";
// import PostsComponent from "./components-react-hooks/PostsComponent";
// import ReduxPostComponent from "./components-redux-hooks/PostComponent"
import ReduxFetchPostComponent from "./components-redux-fetch/PostComponetnt";

function Main() {
    return(
        <div>
            {/* <PostsComponent /> */}
            {/* <ReduxPostComponent /> */}
            <ReduxFetchPostComponent />
        </div>
    );
}

export default Main;