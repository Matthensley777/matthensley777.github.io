"use strict";

app.service("BlogService", function($http, $q, FIREBASE_CONFIG) {

const getMyBlogs = (blogId) => {
        let myBlogs = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/blogPost.json`).then((results) => {
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

    const getMyProjects = (projectId) => {
        let myProjects = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/Projects.json`).then((results) => {
                let projects = results.data;
                Object.keys(projects).forEach((key) => {
                    projects[key].id = key;
                    myProjects.push(projects[key]);
                });
                resolve(myProjects);
            }).catch((error) => {
            	reject(error);
            	console.log("error in getMyProjects", error);
            });
        });
    };

    const getSingleBlog = (blogId) => {
        return $http.get(`${FIREBASE_CONFIG.databaseURL}/blogPost/${blogId}.json`);	
    };

const postNewBlog = (newBlog) => {
        return $http.post(`${FIREBASE_CONFIG.databaseURL}/blogPost.json`, JSON.stringify(newBlog));
    };


const createBlogDetails = (blog, id) => {
        return {
        	"title": blog.title,
            "blog": blog.blog,
            "date": blog.date,
            "id": id
        };
    };

    return {
    	createBlogDetails,
    	getMyBlogs,
    	getSingleBlog,
    	postNewBlog,
    	getMyProjects
    };

});