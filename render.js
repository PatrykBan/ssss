window.onload = () => {
    fetch("https://run.mocky.io/v3/5d88d742-4ccf-4638-b844-ab312c76300e").then(function (response) {
        return response.json()
    }).then(function (object) {
        const posts = object.posts
        console.log(posts)
        const list = document.getElementById("p1")
        let postsHTML = ""
        for (let i = 0; i < posts.length; i++) {
            postsHTML += `
                <div class="posts">
                    <div class="product">
                        <div class="post_container">
                            <div class="product_photo">
                                <img src="${posts[i].image}">
                            </div>
                            <div class="display">
                                <div class="post_title">
                                    <h2>${posts[i].title}</h2>
                                </div>
                                <div class="post_price">
                                <h4>${posts[i].price}</h4>
                                </div>
                                <div class="post_description">
                                    <p class="p-description">${posts[i].description}</p>
                                </div>
                                <div class="user_info">
                                    <img src="${posts[i].userImg}" class="user_img">
                                    <p class="p-user_info">  ${posts[i].userName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
            `
        }
        list.innerHTML = postsHTML
    })
}