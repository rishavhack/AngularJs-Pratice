angular.module("routeApp").controller("homtCtrl",function($scope)
{    
$scope.underScoreArray=[];
	var art = ['Pharrel Williams', 'Led Zeppelin', 'Rolling Stones','Rishav','HireCraft'];
		_.each(art, function(artist, index, art) {
		  var obj={};
			obj.id=index;
			obj.name=artist;
			$scope.underScoreArray.push(obj);
		});
	$scope.mapArray = _.map($scope.underScoreArray,function(num){
			return num.id*3;
		});

	$scope.artists = ['Pharrel Williams', 'Led Zeppelin', 'Rolling Stones','Rishav Srivastav','Hire Craft'];
	$scope.artistsValue=[10,50,40,80,88]
	$scope.underScoreobject = _.object($scope.artists,$scope.artistsValue)
	$scope.underScoreobjectKeys = _.keys($scope.underScoreobject);
	$scope.underScoreobjectValues = _.values($scope.underScoreobject);
    $scope.evenArray=_.filter($scope.underScoreArray,function(num){return num.id%2==0;});
	
	var maxV=$scope.underScoreArray;
		$scope.maxValue = _.max(maxV,function(maxV){return maxV.id});

});