angular.module("firebaseapp",["firebase"])
.controller("dataCtrl",dataCtrl)

function dataCtrl($scope,$firebaseArray){

	//Reference to Database Path
	var students =firebase.database().ref("categ");
	//Parsing the refernce to an array
	$scope.students  = $firebaseArray(students)

	$scope.add = function()
	{
		$scope.students.$add($scope.student)
		$scope.student = '';
	}
         
}
