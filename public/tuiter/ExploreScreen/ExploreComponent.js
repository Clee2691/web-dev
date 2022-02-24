import PostSummaryList from "../PostSummaryList/index.js"

const ExploreComponent = () => {
    return(`
    <div class="d-flex flex-row">
        <div class="d-flex search-bar-group d-inline position-relative flex-grow-1">
            <span class="fa fa-search position-absolute"></span>
            <input type="text" class="form-control search-input me-4" placeholder="Search Tuiter" />
        </div>
        <div class="d-flex align-items-center justify-content-end ms-auto">
            <a href="explore-settings.html">
                <i class="fas fa-cog cog-icon"></i>
            </a>               
        </div>
    </div>

    <div class="mt-3">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li>
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li>
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li>
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
    </div>

    <div class="mt-2 position-relative">
        <img class="img-fluid" src="../images/spacexship.jpg">
        <span class="h2 image-text-overlay position-absolute fw-bold">SpaceX's Starship</span>
    </div>

    <div class="list-group mb-3">
        ${PostSummaryList()}
    </div>
    `);
}

export default ExploreComponent;