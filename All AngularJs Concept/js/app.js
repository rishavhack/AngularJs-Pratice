var routerApp =angular.module("routeApp",['ui.router','oc.lazyLoad'])

routerApp.config(function($stateProvider, $urlRouterProvider,$ocLazyLoadProvider) {
   $stateProvider
        .state('home', {
            url: '/home',
	   		resolve: 
	   				{
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
							name:'view1',
							files:[
								"template/scripts/directive/directive.js",
								"template/scripts/preDefine.js"
								  ]
							});
              			}]
                	},
            templateUrl: './template/views/predefineDirective.html',
             	}
			 )
        .state('proStruct', {
            url: '/proStruct',
	   		resolve: 
	   		{
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
							name:'view2',
							files:[
								"template/scripts/ui-Select.js",
								"js/select.min.js"
							]
						});
					}]
            },
            templateUrl:'template/views/uiSelect.html',
        })
        .state('ui', {
            url: '/ui',
		   resolve: {
					  loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) 
						  {
							  return $ocLazyLoad.load('template/scripts/ui.js');
						  }]
					  },
	   		templateUrl:'template/views/ui.html',
              })
        .state('array', {
            url: '/array',
			resolve: {
                  loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) 
                      {
                          return $ocLazyLoad.load('template/scripts/array.js');
                      }]
                  },
        	templateUrl:'template/views/array.html'
        })
        .state('underscore', {
                url: '/underscore',
				resolve: {
							loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
								return $ocLazyLoad.load({
									name:'view3',
									files:[
										"js/underscore.js",
										"template/scripts/underScore.js"
										  ]
								});
							}]
						},
                templateUrl:'template/views/underscore.html'
        })
        
        .state('controller', {
                url: '/controller',
				resolve: {
						  loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) 
							  {
								  return $ocLazyLoad.load('template/scripts/controller.js');
							  }]
						  },
            	templateUrl:'template/views/controller.html'
        })
        
        .state('service', {
                url: '/service',
	   			resolve: 
					{
						loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {

							return $ocLazyLoad.load({
								name:'view4',
								files:[
									"template/scripts/service.js",
									"js/ui-bootstrap-tpls-0.6.0.js"
								]
							});
						}]
					},
	   			templateUrl:'template/views/service.html'
        })
        .state('filter', {
                url: '/filter',
	   			resolve: {
						  loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) 
							  {
								  return $ocLazyLoad.load('template/scripts/filter.js');
							  }]
						  },
               templateUrl:'template/views/filter.html'
        })
        .state('forms', {
                url: '/forms',
	   			resolve: 
					{
						loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {

							return $ocLazyLoad.load({
								name:'view4',
								files:[
									"template/scripts/form.js",
									"js/ui-bootstrap-tpls-0.6.0.js"
								]
							});
						}]
					},
            	templateUrl:'template/views/forms.html'
        })
        .state('ui-grid', {
                url: '/ui-grid',
				resolve: 
					{
							loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {

								return $ocLazyLoad.load({
									name:'view5',
									files:[
										"template/scripts/ui-grid.js",
										"js/ui-grid.js"
									]
								});
							}]
						},
	   			templateUrl:'template/views/ui-grid.html'
        })
        .state('momentjs', {
                url: '/momentjs',
	   			resolve: 
	   				{
							loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {

								return $ocLazyLoad.load({
									name:'view6',
									files:[
										"template/scripts/moment.js",
										"js/moment.js"
									]
								});
							}]
					},
            	templateUrl:'template/views/momentjs.html'
        })
        .state('custom', {
                url: '/custom',
	   			resolve: {
						  loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) 
							  {
								  return $ocLazyLoad.load('template/scripts/custom.js');
							  }]
						  },
            	templateUrl:'template/views/custom.html'
        })
    
      $urlRouterProvider.otherwise('/home');
});



routerApp.controller("homtCtrl",function($scope,$http){
	//$scope.ri = moment().format("MMM Do YY"); 
	
    $scope.item=1;
    $scope.innerItem='Click';
    $scope.myVar;
    $scope.subData='';
	$scope.users=[];
	$scope.gridIndex;
	$scope.gridButton=false;
	$scope.selected = undefined;
	$scope.submitForm = function(isValid) {
			if (isValid) {
			  alert('our form is amazing');
			}
		  };
    $scope.setItem = function(i)
    {
        $scope.item=i;
    }
	$scope.setItem(1);
    $scope.showExample = function(l)
    {
        $scope.myVar = l;
        $scope.innerItem = l;
    }
   
			
});




