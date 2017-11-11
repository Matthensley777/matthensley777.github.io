"use strict";

const dom = require('./dom');

const blogPostJSON = () => {
    return new Promise((resolve, reject) => {
        $.ajax('./db/blog.json').done((data) => {
            resolve(data);
        }).fail((error) => {
            reject(error);
        });
    });
};

const searchBlog = (query) => {
  blogPostJSON(query).then((data) => {
	dom.blogDom(query);
  }).catch((error) => {
    console.log("error in search Movies", error);
  });
};



module.exports = {searchBlog};