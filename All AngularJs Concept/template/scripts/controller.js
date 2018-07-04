var routerApp = angular.module("routeApp")

routerApp.value("Rishav",8);
routerApp.service("additionService",function()
	{
		this.add = function(a,b)
			{
				return a+b;
			}
	});
routerApp.controller("homeCtrl",function($scope,Rishav,additionService)
{
	$scope.ID = Rishav;
	$scope.addServiceNumber = function(a,b)
		{
			if(a && b)
			{
				$scope.result = additionService.add(a,b);
				$scope.firstNum = '';
				$scope.secondNum = '';
			}
			else
			{
				window.alert("Write Something");
			}
		}
});
