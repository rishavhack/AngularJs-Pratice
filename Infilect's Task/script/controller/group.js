app.controller('groupCtrl',groupCtrl)
function groupCtrl($scope,masterService,$routeParams,$window){
	var pageNo = 1;
  var totalRecords = 0;
	function getValue(){
		masterService.getGroupDetail($routeParams.groupName,pageNo).then(function(response){
			console.log(response);
      if(pageNo == 1){
        $scope.groups = response.data.groups;
        totalRecords = response.data.groups.total;
      }
      else{
         $scope.groups.group = $scope.groups.group.concat(response.data.groups.group);
      }
		}).catch(function(error){
			console.log(error);
		});
	}
	getValue();
	angular.element($window).bind("scroll", function() {
    var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    var body = document.body, html = document.documentElement;
    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
        if($scope.groups.group.length < totalRecords){
          pageNo += 1
          getValue();
        }
    }
});
}
app.filter('myFormat', function() {
    return function(number) {
      var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
    var tier = Math.log10(number) / 3 | 0;
    if(tier == 0) return number;
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);
    var scaled = number / scale;
    return scaled.toFixed(1) + suffix;
    };
});