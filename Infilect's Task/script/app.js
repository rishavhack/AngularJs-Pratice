var app = angular.module('infilectApp',['ngRoute','ngMaterial', 'ngMessages','chart.js'])
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "template/search.html"
    })
	.when("/group/:groupName", {
        templateUrl : "template/groups.html"
    })
    .when("/photo/:photoName", {
        templateUrl : "template/photos.html"
    })
    .when("/gallery/:groupsID", {
        templateUrl : "template/gallery.html"
    })
    .when("/overview/:id/:title", {
        templateUrl : "template/overview.html"
    })
	.otherwise({redirectTo:'/'})
});

