const PostSummaryItem = (post) => {
    return(`
    <div class="list-group-item d-flex justify-content-between">
        <div class="d-flex flex-column">
            <div class="text-muted">
                ${post.topic}
            </div>
            <div class="fw-bold me-1">
                ${post.userName}
                <i class="fas fa-check-circle"></i>
                <span class="text-muted fw-normal">- ${post.time}</span>
                
            </div>
            <div class="fw-bold">
                ${post.title}
            </div>
        </div>
        <img class="img-fluid story-images flex-grow-1" src=${post.image}>
    </div>



    
    `);
}
export default PostSummaryItem;