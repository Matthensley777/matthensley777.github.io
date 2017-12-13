"use strict";

app.config(function($routeProvider){
  $routeProvider
    
    .when("/blog", {
      templateUrl: 'partials/blog.html',
      controller: 'BlogCtrl',
    })
    .when("/about", {
      templateUrl: 'partials/about.html',
      controller: 'AboutCtrl',
    })
    .when("/contact", {
      templateUrl: 'partials/contact.html',
      controller: 'ContactCtrl',
    })
    .when("/projects", {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectsCtrl',
    })
    .when("/navbar", {
      templateUrl: 'partials/navbar.html',
      controller: 'NavCtrl',
    })
    .otherwise('/blog');
});
