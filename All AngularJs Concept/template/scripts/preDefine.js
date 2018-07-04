angular.module("routeApp").controller("homtCtrl",function($scope)
{	
	$scope.changes = 0;
	$scope.array1=["Hi","hello","world","how"];
	$scope.array2=[];
	$scope.changeCall = function()
		{
			$scope.changes += 1  
		}
	$scope.submit = function(l)
		{
			$scope.array2.push(l);
			$scope.subData='';
			return l='';
		}

});