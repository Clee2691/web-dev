import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";

const Tuiter = () => {
  // My implementation to highlight current link using useLocation and some text splitting
  let currLocation = useLocation();
  const pathArray = currLocation.pathname.split("/");
  let currScreen = pathArray[pathArray.length - 1];

  return (
    <div className="row mt-2">
      <div className="col-2 col-lg-1 col-xl-2">
        <NavigationSidebar active={currScreen}/>
      </div>
      <div className="col-10 col-lg-7 col-xl-6">
        <Outlet/>
      </div>
      <div className="d-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowList/>
      </div>
    </div>
  );
};
export default Tuiter;