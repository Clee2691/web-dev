import React from "react";
import PostItem from "./PostItem.js";
import posts from "./posts.json"

const PostList = () => {
    return(
        <div class='list-group'>
            {
                posts.map(post => {
                    return (
                        <PostItem post={post}/>
                    );
                })
            }
        </div>
    );
}

export default PostList;