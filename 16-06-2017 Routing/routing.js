angular.module("app",['ngRoute'])
	.controller("firstCtrl",firstCtrl)
	.controller("secondCtrl",secondCtrl)
	.factory("dataService",dataService)
	.config(routeConfig)



function routeConfig($routeProvider)
{
  $routeProvider
    .when('/home',{templateUrl:'templates/home.html'})
    .when('/hack',{templateUrl:'templates/hack.html'})
    .otherwise({redirectTo:'/home'})
}



function dataService()
{
	return {};
}


function firstCtrl(dataService)
{
 var my = this;
 my.first = dataService;
/* my.first = {person:"Abc"} its remove the dataService beacuse object define only at one time*/
 my.first.person = "Abc"
}

function secondCtrl(dataService)
{                                                                                                                            
	var me = this;
	me.second = dataService;
	me.second.person = "Xyz"
}