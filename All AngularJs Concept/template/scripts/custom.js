var routerApp =angular.module("routeApp")
routerApp.controller("homtCtrl",function($scope)
{


	$scope.hack="Hacker";
	$scope.student = 
			{
				name: 'Rishav',
				class: 'B.tech',
				Address: 'Jaipur'    
			};
	$scope.swapData = function () 
		{
			$scope.student = 
					{
						name: 'Raj',
						class: 'kumar'
					};
		};
	$scope.book = 
		{  
			name:'Rishav',   
			author:'Srivastava'  
		};  
});

routerApp.directive('myBook', function () 
	{
		return {
				restrict :'EA',
				scope: {book: '='},
				template: 
					'Name: {{book.name}}, Author: {{book.author}}',
			link: 
				function ($scope, element, attrs) 
					{
						element.css('cursor','pointer');
						element.css('font-size','20px');
						element.bind('click', function () 
							{
								element.html('You clicked the book: '+ $scope.book.name);
							});
						element.bind('mouseenter', function () 
							{
								element.css('color', 'yellow');
								element.css('background-color', 'blue');
							});
						element.bind('mouseleave', function () 
							{
								element.css('color', 'white');
								element.css('background-color', 'black');
							});
				    }	
			};
	}); 

routerApp.directive("methodDirective", function() 
	{
		return {
			scope: { student: '=', swap: '&'},
			template: '<div>the changed names are, {{student.name + student.class}}!</div>'+
				"<button id='btn1' ng-click='swap()'>Click here to Swap student Data</button>"
			   };
	});

routerApp.directive('twoWayDirective', function() 
	{
		return {
			restrict: 'EA',
			scope: { student: '='},
			template: '<div>Welcome, {{student.name + student.class}}!</div>'
		};
	});


routerApp.directive('oneWayDirective', function () 
	{
		return {
			scope: { naame: '@'},
			template: 'Student  Name: {{ naame }}'
			   };
	});
routerApp.directive("sharedDirective", function () 
	{
		return {
			restrict: "EA",
			scope: false,
			template: "<div>Directive scope value(false) : {{ hack }}</div>" +
			"Change directive scope value : <input type='text' ng-model='hack' />"
		};
	});

routerApp.directive("inheritedDirective", function () 
	{
		return {
			restrict: "EA",
			scope: true,
			template: "<div>Directive scope value (true) : {{ hack }}</div>" +
			"Change directive scope value : <input type='text' ng-model='hack' />"
			   };
	});