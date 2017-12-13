"use strict";

app.service("BlogService", function($http, $q, FIREBASE_CONFIG) {

const getMyBlogs = (blogId) => {
        let myBlogs = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/blogPost.json`).then((results) => {
            	console.log("getMyBlogs", results.data);
                let blogs = results.data;
                Object.keys(blogs).forEach((key) => {
                    blogs[key].id = key;
                    myBlogs.push(blogs[key]);
                });
                resolve(myBlogs);
            }).catch((error) => {
            	reject(error);
            	console.log("error in getMyBlogs", error);
            });
        });
    };




const createBLogDetails = (blog, id) => {
        return {
            "blog": blog.name,
            "date": blog.img_path,
            "title": blog.details,
            "id": id
        };
    };

    return {
    	createBLogDetails,
    	getMyBlogs
    };

});