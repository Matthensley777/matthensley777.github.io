

var blogHolder = document.getElementById("blogHolder");

function blogDom(blogPost) {
    var selectedBlog;
    var blogOutPut = "";
    for (var i = 0; i < blogPost.length; i++) {
        selectedBlog = blogPost;
        blogOutPut += `<div>`
        blogOutPut += `<div class="col-md-4">`
        blogOutPut += `<a href="#" class="thumbnail">`
        blogOutPut += `<div class="blogHolder">`
        blogOutPut += `<h2 class="child">${blogPost[i].title}</h2>`
        blogOutPut += `<header class="child"><p class="grandChild">${blogPost[i].blog}</p></header>` 
        blogOutPut += `<section class="child"><p class="grandChild">${blogPost[i].date}</p>`
        blogOutPut += `<img class="grandChild" src="${blogPost[i].image}"/></section>`
        blogOutPut += `<footer>Copyright Matt Hensley</footer>`
        blogOutPut += `</div></div></a></div>`;
        }
        blogHolder.innerHTML = blogOutPut;
}
    
function forBlog(){
    console.log("this", this);
    var blog = JSON.parse(this.responseText).blogPost;
    blogDom(blog);
}
function executThisCodeIfFileErrors(){
    console.log("shit broke");

}

var myBlog = new XMLHttpRequest();
myBlog.addEventListener("load", forBlog);
myBlog.addEventListener("error", executThisCodeIfFileErrors);
myBlog.open("GET", "blog.json");
myBlog.send();


