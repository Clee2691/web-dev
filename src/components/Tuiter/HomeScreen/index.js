import React from "react";


import PostList from "../PostList";
import WhatsHappening from "../whats-happening";

const HomeScreen = () => {

    return (
        <div className="col">
            <WhatsHappening/>
            <PostList/>
        </div>
    )
}

export default HomeScreen;