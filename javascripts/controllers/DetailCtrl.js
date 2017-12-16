"use strict";

app.controller("DetailCtrl", function($location, $rootScope, $scope, $routeParams, BlogService) {

$scope.blog = {};

const getBlogDetails = () => {
        BlogService.getSingleBlog($routeParams.blogId).then((results) => {
        	console.log("getBlogDetails", results.data);
            $scope.blog = results.data;

        }).catch((err) => {
            console.log("getBlogDetails", err);
        });
    };

    getBlogDetails();

});