angular.module("routeApp",['ui.select']).controller("homtCtrl",function($scope,$http)
{    
	$http.get("https://restcountries.eu/rest/v2/all")
			  .then(function(response) 
					{
						$scope.itemArray = response.data;
					});
    $http.get("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81kuws5p2v0s7s&redirect_uri=http://www.hgstams.com/uat&state=DCEeFWf45A53sdfKef424")
			  .then(function(response) 
					{
						console.log(response);
					});
});