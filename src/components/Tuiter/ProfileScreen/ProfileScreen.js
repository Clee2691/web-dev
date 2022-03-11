import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ProfileComponent from "./ProfileComponent";

const ProfileScreen = () => {
    return (
        <div className="row mt-2">

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile" />
            </div>

            <div className="col">
                <ProfileComponent/>
            </div>

        </div>
    )
}

export default ProfileScreen;