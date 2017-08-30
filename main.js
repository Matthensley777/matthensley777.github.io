

var blogHolder = document.getElementById("blogHolder");

function blogDom(blogPost) {
    var selectedBlog;
    var blogOutPut = "";
    for (var i = 0; i < blogPost.length; i++) {
        selectedBlog = blogPost;
        blogOutPut += `<div class="blogHolder">`
        blogOutPut += `<h2 class="child">${blogPost[i].title}</h2>`
        blogOutPut += `<header class="child"><p class="grandChild">${blogPost[i].blog}</p></header>` 
        blogOutPut += `<section class="child"><p class="grandChild">${blogPost[i].date}</p>`
        blogOutPut += `<img class="grandChild" src="${blogPost[i].image}"/></section>`
        blogOutPut += `</div>`;
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





// blogHolder.addEventListener("click", selectBlog);


// function selectBlog(e) {

//     var blogs = document.getElementsByClassName("blogHolder");
//     //looping through the blogs
//     for (var i = 0; i < blogs.length; i++) {
//         blogs[i].style.border = "solid black 1px";
//     }

//     if (e.target.classList.contains("blogHolder")) {
//         e.target.style.border = "solid black 5px";
//         selectedBlog = e.target.childNodes[3].childNodes[0]
//     } else if (e.target.classList.contains("child")) {
//         e.target.parentNode.style.border = "solid black 5px";
//         selectedBlog = e.target.parentNode.childNodes[3].childNodes[0]
//     } else if (e.target.classList.contains("grandChild")) {
//         e.target.parentNode.parentNode.style.border = "solid black 5px";
//         selectedBlog = e.target.parentNode.parentNode.childNodes[3].childNodes[0]
//     };
// }




