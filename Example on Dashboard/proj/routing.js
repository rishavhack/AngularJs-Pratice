angular.module("firebaseapp",["firebase"])
.controller("dataCtrl",dataCtrl)

function dataCtrl($scope,$firebaseArray,){

var students =firebase.database().ref("students");
	//Parsing the refernce to an array
	$scope.students  = $firebaseArray(students)
}
