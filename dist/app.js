(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    
// function forBlog(){
//     var blog = JSON.parse(this.responseText).blogPost;
//     blogDom(blog);
// }
function executThisCodeIfFileErrors(){
    console.log("shit broke");

}

var myBlog = new XMLHttpRequest();
// myBlog.addEventListener("load", forBlog);
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


















},{}]},{},[1]);
