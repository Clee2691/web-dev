import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ProfileComponent from "./ProfileComponent";
import PostSummaryList from "../PostSummaryList";

const ProfileScreen = () => {
    return (
        <div className="row mt-2">

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile" />
            </div>

            <div className="col">
                <ProfileComponent/>
            </div>

            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList title="What's Happening"/>
            </div>

        </div>
    )
}

export default ProfileScreen;