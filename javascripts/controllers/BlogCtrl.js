"use strict";

app.controller("BlogCtrl", function($location, $rootScope, $scope, BlogService, $routeParams) {

const getBlogs = () => {
        BlogService.getMyBlogs($rootScope.id).then((results) => {
            $scope.blogs = results;
        }).catch((error) => {
            console.log("Error in getBlogs", error);
        });
    };

getBlogs();

$scope.blogDetail = (id) => {
        $location.path(`/detail/${id}`);
    };



});
