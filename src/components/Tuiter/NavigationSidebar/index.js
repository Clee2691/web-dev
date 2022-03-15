import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
    active = "home"
    }) => {
    return (
        <>
            <div className="list-group">
                <Link to="/" className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>
            
                <Link to="/tuiter" className={`list-group-item ${active === 'home' ? 'active': ''}`}>
                    <span><i className="fas fa-home left-nav-icon"></i>
                    <span className="d-none d-xl-inline"> Home</span>
                    </span>
                </Link>

                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active': ''}`}>
                    <span><i className="fas fa-hashtag left-nav-icon"></i>
                        <span className="d-none d-xl-inline">
                            Explore</span></span>
                </Link>
                <a href="index.html" className={`list-group-item ${active === 'notifications' ? 'active': ''}`}>
                    <span><i className="fas fa-bell left-nav-icon"></i> <span
                            className="d-none d-xl-inline">Notifications</span></span>
                </a>
                <a href="index.html" className={`list-group-item ${active === 'messages' ? 'active': ''}`}>
                    <span><i className="fas fa-envelope left-nav-icon"></i>
                        <span className="d-none d-xl-inline">Messages</span> 
                    </span>
                </a>
                <a href="index.html" className={`list-group-item ${active === 'bookmarks' ? 'active': ''}`}>
                    <span><i className="fas fa-bookmark left-nav-icon"></i> <span
                            className="d-none d-xl-inline">Bookmarks</span> </span>
                </a>
                <a href="index.html" className={`list-group-item ${active === 'lists' ? 'active': ''}`}>
                    <span><i className="fas fa-list left-nav-icon"></i> <span
                            className="d-none d-xl-inline">Lists</span></span>
                </a>
                <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile' ? 'active': ''}`}>
                    <span><i className="fas fa-user left-nav-icon"></i>
                        <span className="d-none d-xl-inline">Profile</span>
                    </span>
                </Link>
                <a href="index.html" className={`list-group-item ${active === 'more' ? 'active': ''}`}>
                    <span className="fa-stack circle-ellipsis left-nav-icon">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span><span className="d-none d-xl-inline"> More</span>
                </a>

            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
