    async function addComment(body, title){
    let user = document.createElement('div');
    let Comments = document.querySelector('.comments');

    let CommentInfo = `
    <div class="posts_box">
        <hr>
        <h3>
            ${title}
        </h3>

        <p> ${body} </p>
    </div>`;
    user.innerHTML = CommentInfo;
    Comments.append(user);
}

let response = fetch('https://dummyjson.com/posts?skip=4&limit=5').then(res => res.json()).then(json => paste(json.posts))
console.log(response);
async function paste(data) {
    for(let i = 0; i < data.length; i++){
        let body = await data[i].body;
        let title = await data[i].title;
        console.log(body, title)
        await addComment(body, title)
    };
}