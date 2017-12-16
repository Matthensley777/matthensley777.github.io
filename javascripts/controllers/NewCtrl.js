"use strict";

app.controller("NewCtrl", function($location, $rootScope, $scope, BlogService, $routeParams) {

	$scope.createNewBlog = (Blog) => {
                let newBlog = BlogService.createBlogDetails(Blog, $rootScope.id);
                BlogService.postNewBlog(newBlog).then((results)=> {
                    $location.path('/blog');
                }).catch((err)=> {
                    console.log("err in createNewContact", err);
                });
        };

	});