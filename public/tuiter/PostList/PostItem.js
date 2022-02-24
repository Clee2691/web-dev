const PostItem = (post) => {
    return(`
    <div class="list-group-item d-flex justify-content-start background-color-black">
        <div class="d-flex flex-column mt-2">
            <img class="image-prof" src=${post.avatarImage}>
        </div>
        <div class="d-flex flex-column flex-grow-1">
            <div class="row mb-2 mt-2">
                <span class="d-flex justify-content-start">${post.userName} 
                    <i class="fas fa-check-circle"></i> 
                    <span class="text-muted fw-normal">
                        @${post.handle} - ${post.time}
                    </span>
                    <span class="ms-auto"><i class="fas fa-ellipsis-h"></i></span>
                </span>
                <span>
                ${post.caption}
                </span>
            </div>

            <div class="row border border-rounded border-color-gray ms-1 me-1 mb-3">
                <img class="img-fluid ps-0 pe-0 border border-color-gray ${post.storyTitle? "border-left-0 border-right-0 border-top-only":"border-rounded"}" 
                    src=${post.storyImage}>
                
                ${post.storyTitle ? `<p class="mt-0 mb-1 pt-2"> ${post.storyTitle} </p>` :''}

                ${post.storyCaption ? ` <p class="text-muted mb-1"> ${post.storyCaption}</p>`:''}

                ${post.siteLink ? `<span class="mb-2"> <i class="fas fa-link"></i> ${post.siteLink} </span>`: ''}
            </div>
            <div class="d-flex d-row mb-2 ms-2">
                <span class="flex-grow-1"><i class="far fa-comment"></i> ${post.numComments}</span>
                <span class="flex-grow-1"><i class="fas fa-retweet"></i> ${post.numShares}</span>
                <span class="flex-grow-1"><i class="far fa-heart"></i> ${post.numLikes}</span>
                <span class="flex-grow-1"><i class="fas fa-sign-out fa-rotate-270"></i></span>
            </div>
        </div>
        
    </div>

    
    
    
    `);
}

export default PostItem;