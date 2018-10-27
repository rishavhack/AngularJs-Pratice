app.controller('photoCtrl',photoCtrl)
function photoCtrl($scope,$routeParams,$http,masterService,$routeParams,$window){
  var pageNo = 1;
  var totalRecords = 0;
  function getPhotoList(){
  	masterService.getPhotos($routeParams.photoName,pageNo).then(function(response){
	      if(pageNo == 1){
	        $scope.photos = response.data.photos;
	        totalRecords = response.data.photos.total;
	      }
	      else{
	         $scope.photos.photo = $scope.photos.photo.concat(response.data.photos.photo);
	      }
			}).catch(function(error){
				console.log(error);
			});
  }
  getPhotoList();
angular.element($window).bind("scroll", function() {
    var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    var body = document.body, html = document.documentElement;
    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
    	if($scope.photos){
        if($scope.photos.photo.length < totalRecords){
          pageNo += 1
          getPhotoList();
        }
    	}
    }
});
}