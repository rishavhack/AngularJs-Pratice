var routerApp =angular.module("routeApp",['ui.grid','ui.grid.edit', 'ui.grid.cellNav','ui.grid.pagination','ui.grid.selection'])

routerApp.controller("homtCtrl",function($scope,$http)
{
$scope.gridOptions = 
		{
			paginationPageSizes: [5, 7, 10],
			paginationPageSize: 5,
			enableSorting: true,
			enableFiltering:true,
			columnDefs: 
			[
				{ 
				  field: 'name',
				  name:'name',
//				  enableCellEdit: true
				},
				{ 
				  field: 'gender', 
				  name:'gender',
//				 enableCellEdit: true,
                  editableCellTemplate: 'ui-grid/dropdownEditor',
                  editDropdownValueLabel: 'gender',
                  editDropdownIdLabel: 'gender',
				  editDropdownOptionsArray:  
					[
                       {gender: 'male' },
                       { gender: 'female' }
                     ],
				   cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) 
				 		{
							if (grid.getCellValue(row ,col).toLowerCase() === 'male') 
								 {
								  return 'red';
								 }
							else
								 {
								 	return 'blue';
								 }
					   	}
				},
				{ 
				  field: 'phone',
				  name:'phone',
//				   enableCellEdit: true
				},
				{ 
                    field: '',
                    name:'edit',
                    displayName:'Edit',
                    enableSorting:false,
                    enableFiltering: false,
                    width: 60,
                    cellTemplate: "<input type='button' value='edit' ng-click=grid.appScope.edit(row)>"
                }
				
			],
			onRegisterApi: function (gridApi) 
				{
					$scope.grid1Api = gridApi;
				}
		};
	
		/*$scope.users = 
		[
			{ name: "Madhav Sai", age: 10, location: 'Nagpur' },
			{ name: "Suresh Dasari", age: 30, location: 'Chennai' },
			{ name: "Rohini Alavala", age: 29, location: 'Chennai' },
			{ name: "Praveen Kumar", age: 25, location: 'Bangalore' },
			{ name: "Sateesh Chandra", age: 27, location: 'Vizag' },
			{ name: "Sateesh", age: 7, location: 'Viz' },
			{ name: "Rishav", age: 22, location: 'Muzaffarpur' },
			{ name: "Chandra", age: 24, location: 'Viag' },
		];*/
	
	$http.get("https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json")
		.then(function(response)
			  {
				for(var i=0;i<10;i++)
					{
						$scope.users.push(response.data[i])
					}
			  })
		.catch(function(response)
			   {
				console.log(response);
			   });

	$scope.gridOptions.data = $scope.users;
	
	


$scope.edit = function(row)
	{
		$scope.gridName = row.entity.name;
		$scope.gridGender = row.entity.gender;
		$scope.gridPhone = row.entity.phone;
		$scope.gridIndex=row.entity.id;
		$scope.gridButton=true;
	}
$scope.updateItem =  function(a,b,c)
	{
		var obj={};
		obj.name=a;
		obj.gender=b;
		obj.phone=c;
		$scope.users[$scope.gridIndex]=obj;
		$scope.gridName = '';
		$scope.gridGender = '';
		$scope.gridPhone = '';
		$scope.gridButton=false;
		
	}
$scope.addItemIngrid = function(a,b,c)
	{
		if(a == undefined && b == undefined && c ==undefined)
			{
				var obj={};
				obj.name=a;
				obj.gender=b;
				obj.phone=c;
				$scope.users.unshift(obj);
				$scope.gridName='';
				$scope.gridGender='';
				$scope.gridPhone='';
			}
		else
		{
			window.alert("Write Something");
		}
		
	}
});