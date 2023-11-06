window.onload = () => {
    fetch("https://run.mocky.io/v3/b1586ff0-10a8-436a-aa35-70fe591914d0").then(function (response) {
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
                                <div class="top">
                                    <div class="stopnie">
                                        <p class="stopienos">- ${posts[i].stopnie} +</p>
                                    </div>
                                    <div class="time">
                                    <img src="zegar.jpg" class="zegarson"> 7g, 30min
                                    </div>
                                </div>
                                <div class="post_title">
                                    <h2>${posts[i].title}</h2>
                                </div>
                                <div class="post_price">
                                <h4>${posts[i].price}</h4>
                                </div>
                                <div class="post_description">
                                    <p class="p-description">${posts[i].description}</p>
                                </div>
                                <div class="bottom">
                                    <div class="p-user_info">
                                        <img src="${posts[i].userImg}" class="user_img">
                                        <p class="p-user_info">  ${posts[i].userName}</p>
                                    </div>
                                    <div class="right side">
                                        <a class="ulubione_button" href="#"><img src="ulubione.png"></a>
                                        <a class="ulubione_button" href="#"><img src="commnets.png"></a>
                                        <button class="okazje_button">Idź do okazji <img src="okazje.png"></button>
                                    </div
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