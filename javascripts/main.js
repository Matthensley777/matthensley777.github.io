"use strict";

let blogView = document.getElementById("blogView");
let blogHolder = document.getElementById("blogHolder");
let selectedBlog;

const blogDom = (blogPost) => {
    let selectedBlog;
    let blogOutPut = "";
    for (let i = 0; i < blogPost.length; i++) {
        selectedBlog = blogPost;
        blogOutPut += `<div>`;
        blogOutPut += `<div class="col-md-4">`;
        blogOutPut += `<a href="#" class="thumbnail">`;
        blogOutPut += `<div id="blogHolder" class="blogHolder">`;
        blogOutPut += `<h2 class="child">${blogPost[i].title}</h2>`;
        blogOutPut += `<header class="child"><p class="grandChild">${blogPost[i].blog}</p></header>`;
        blogOutPut += `<section class="child"><p class="grandChild">${blogPost[i].date}</p>`;
        blogOutPut += `<img class="grandChild" src="${blogPost[i].image}"/></section>`;
        blogOutPut += `<footer>Copyright Matt Hensley</footer>`;
        blogOutPut += `</div></div></a></div>`;
        }
        blogHolder.innerHTML = blogOutPut;
};
    
function forBlog(){
    var blog = JSON.parse(this.responseText).blogPost;
    blogDom(blog);
}
function executThisCodeIfFileErrors(){
    console.log("shit broke");

}

var myBlog = new XMLHttpRequest();
myBlog.addEventListener("load", forBlog);
myBlog.addEventListener("error", executThisCodeIfFileErrors);
myBlog.open("GET", "./db/blog.json");
myBlog.send();

const blogEnlarge = (e) => {
    if (e.target.parentNode) {
       selectedBlog = e.target.parentNode;
    }
    blogView.innerHTML = selectedBlog.innerHTML;
};
    
document.body.addEventListener("click", blogEnlarge);

















