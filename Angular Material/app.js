angular.module("mat",['ngMaterial', 'ngMessages'])
.controller("ctrl",ctrl)
.controller('BasicDemoCtrl', DemoCtrl);
function  ctrl($scope){
	
}
  function DemoCtrl ($scope) {

    $scope.readonly = false;

    // Lists of fruit names and Vegetable objects
    $scope.fruitNames = ['Apple', 'Banana', 'Orange'];
    $scope.ngChangeFruitNames = angular.copy($scope.fruitNames);
    $scope.roFruitNames = angular.copy($scope.fruitNames);
    $scope.editableFruitNames = angular.copy($scope.fruitNames);
    $scope.add= function()
    {
    	console.log($scope.roFruitNames);
    }
    }