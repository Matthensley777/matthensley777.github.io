"use strict";

app.controller("ProjectsCtrl", function($location, $rootScope, $scope, BlogService, $routeParams) {

const getProjects = () => {
        BlogService.getMyProjects($rootScope.id).then((results) => {
            $scope.projects = results;
        }).catch((error) => {
            console.log("Error in getProjects", error);
        });
    };

getProjects();

	});