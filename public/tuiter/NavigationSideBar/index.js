const NavigationSidebar = () => {
    return (`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            
                <a href="index.html" class="list-group-item">
                    <span><i class="fas fa-home left-nav-icon"></i>
                    <span class="d-none d-xl-inline"> Home</span>
                    </span>
                </a>
                <a href="explore.html" class="list-group-item active">
                    <span><i class="fas fa-hashtag left-nav-icon"></i>
                        <span class="d-none d-xl-inline">
                            Explore</span></span>
                </a>
                <a href="index.html" class="list-group-item">
                    <span><i class="fas fa-bell left-nav-icon"></i> <span
                            class="d-none d-xl-inline">Notifications</span></span>
                </a>
                <a href="index.html" class="list-group-item">
                    <span><i class="fas fa-envelope left-nav-icon"></i>
                        <span class="d-none d-xl-inline">Messages</span> 
                    </span>
                </a>
                <a href="index.html" class="list-group-item">
                    <span><i class="fas fa-bookmark left-nav-icon"></i> <span
                            class="d-none d-xl-inline">Bookmarks</span> </span>
                </a>
                <a href="index.html" class="list-group-item">
                    <span><i class="fas fa-list left-nav-icon"></i> <span
                            class="d-none d-xl-inline">Lists</span></span>
                </a>
                <a href="index.html" class="list-group-item">
                    <span><i class="fas fa-user left-nav-icon"></i>
                        <span class="d-none d-xl-inline">Profile</span>
                    </span>
                </a>
                <a href="index.html" class="list-group-item">
                    <span class="fa-stack circle-ellipsis left-nav-icon">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span><span class="d-none d-xl-inline"> More</span>
                </a>

            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
