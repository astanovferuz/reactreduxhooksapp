import React from "react";
// import PostsComponent from "./components-react-hooks/PostsComponent";
// import ReduxPostComponent from "./components-redux-hooks/PostComponent"
// import ReduxFetchPostComponent from "./components-redux-fetch/PostComponetnt";
import ReduxAxiosPostComponent from "./components-redux-axios/PostComponetnt";

function Main() {
    return(
        <div>
            {/* <PostsComponent /> */}
            {/* <ReduxPostComponent /> */}
            {/* <ReduxFetchPostComponent /> */}
            <ReduxAxiosPostComponent />
        </div>
    );
}

export default Main;