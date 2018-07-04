angular.module("routeApp").controller("homtCtrl",function($scope)
{
    $scope.jasonArray=[];
    $scope.jsonName ='';
    $scope.jasonArray1=[];
	$scope.jsonClick = function(name)
		{
			if(name)
			{
				$scope.jasonArray.push(name);
				var myJSON = JSON.stringify($scope.jasonArray);
				localStorage.setItem("testJSON", myJSON);
				$scope.jsonName="";
			}
			else
				{
					window.alert("Write Something");
				}
		}
    $scope.jsonValue = function()
		{
			var text = localStorage.getItem("testJSON");
			$scope.jasonArray1 = JSON.parse(text);
		}
});