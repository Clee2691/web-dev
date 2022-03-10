import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostList from "../PostList";
import PostSummaryList from "../PostSummaryList";
import WhatsHappening from "../whats-happening";

const HomeScreen = () => {
    return (
        <div className="row mt-2">

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home" />
            </div>

            <div className="col">
                <WhatsHappening/>
                <PostList/>
            </div>
            
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList title="What's Happening"/>
            </div>

        </div>
    )
}

export default HomeScreen;