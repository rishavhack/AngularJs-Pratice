var routerApp = angular.module("routeApp")
routerApp.controller('MainController', function($scope, $rootScope) {
	  $scope.mainData = {
		message: ''
	  };
	  $scope.broadcastMainEvent = function(){
		  $scope.broadcast('eventBroadcasted',$scope.mainData)
	  }
	  $scope.$on('eventEmitedName', function(event, data) {
		$scope.mainData.message = $scope.mainData.message + '\nMainController - receive EVENT "' + event.name + '" with message = "' + data.message + '"';
	  });

	  $rootScope.$on('eventEmitedName', function(event, data) {
		$scope.mainData.message = $scope.mainData.message + '\n$rootScope - receive EVENT "' + event.name + '" with message = "' + data.message + '"';
	  });

});

routerApp.controller('ParentController', function($scope) {
	  $scope.parentData = {
		message: 'Rishav'
	  };

	  $scope.broadcastEvent = function() {
		$scope.$broadcast('eventBroadcastedName', $scope.parentData);
	  };

	  $scope.$on('eventEmitedName', function(event, data) {
		$scope.mainData.message = $scope.mainData.message + '\nParentController - receive EVENT "' + event.name + '" with message = "' + data.message + '"';
	  });  
	  $scope.$on('eventBroadcasted', function(event, data) {
		$scope.mainData.message = $scope.mainData.message + '\nMainController - receive EVENT "' + event.name + '" with message = "' + data.message + '"';
	  });
});

routerApp.controller('ChildController', function($scope) {
	  $scope.childData = {
		message: 'Srivastava'
	  };

	  $scope.emitEvent = function() {
		$scope.$emit('eventEmitedName', $scope.childData);
	  };

	  $scope.$on('eventBroadcastedName', function(event, data) {
		$scope.mainData.message = $scope.mainData.message + '\nChildController - receive EVENT "' + event.name + '" with message = "' + data.message + '"';
	  });
});