import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../2redux/ActionCreators";

const ReduxFetchPostComponent = () => {

    const dispatch = useDispatch();
    const postsData = useSelector(state => state.postsData.postsData);

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    console.log(postsData);
    return(
        <div>
            <h1>React Hooks Fetch Version</h1>
            <input type="text" name="postTitle" placeholder="enter title" />
            <input type="text" name="postBody" placeholder="enter body" />
            <button type="button">Submit</button>
        </div>
    );
}

export default ReduxFetchPostComponent;