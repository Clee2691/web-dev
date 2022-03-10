import React from "react";
import PostItem from "./PostItem";
import { useSelector } from "react-redux";

const selectAllTuits = (state) => state.tuits;

const PostList = () => {
    const posts = useSelector(selectAllTuits)
    return(
        <div className='list-group'>
            {
                posts.map(post => {
                    return (
                        <PostItem tuit={post}/>
                    );
                })
            }
        </div>
    );
}

export default PostList;