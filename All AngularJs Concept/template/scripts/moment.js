angular.module("routeApp").controller("homtCtrl",function($scope)
{    
	$scope.cdate = new Date();
	$scope.momentYear = true;
	$scope.year;
	$scope.momentMonth = true;
	$scope.month;
	$scope.momentsYear=function()
		{
		console.log("Hi 1st function");
			$scope.momentYear = false;
			var d=moment().dayOfYear(); 
			$scope.year= moment().subtract(d-1, 'days').calendar() +'-'+ moment().format('l');
		}
	$scope.momentsMonth = function()
		{
		console.log("Hi 2nd function");
			$scope.momentMonth = false;
			var begin = moment().format("YYYY-MM-01");
			var end = moment().format("YYYY-MM-") + moment().daysInMonth();
			$scope.month =  begin +'-'+ end
		}
});