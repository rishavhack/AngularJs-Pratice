
app.controller('overviewCtrl',overviewCtrl)
function overviewCtrl($scope,$http,masterService,$routeParams){
	$scope.title = $routeParams.title;
	masterService.getOverview($routeParams.id).then(function(response){
	$scope.chartValue = response.data.photo;
	$scope.data = [parseInt($scope.chartValue.comments._content),parseInt($scope.chartValue.views),$scope.chartValue.notes.note.length,$scope.chartValue.tags.tag.length];
}).catch(function(error){
	console.log(error);
});
	$scope.colors = ["rgb(159,204,0)","rgb(250,109,33)","rgb(154,154,154)"];
  $scope.labels = ["No of Comments", "Views", "Note","Tags"];

}