angular.module("app",[])
.controller("ctrl",ctrl)
function ctrl($scope){
	$scope.arr = [];
	var count = 1;
	$scope.obj = {'Green':0,'Blue':0,'Purple':0,'Pink':0};
	$scope.addBall = function(){
		if(count%3 == 0 && count % 15 !== 0){
			$scope.arr.push({id:count,color:'Green'})
			$scope.obj.Green++
		}else if(count % 5 == 0 && count % 15 !== 0){
			$scope.arr.push({id:count,color:'Blue'})
			$scope.obj.Blue++
		}else if(count % 15 == 0){
			$scope.arr.push({id:count,color:'Purple'})
			$scope.obj.Purple++
		}else{
			$scope.arr.push({id:count,color:'Pink'})
			$scope.obj.Pink++
		}
		count++
	}
}