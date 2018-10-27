app.factory('masterService',['$http',function masterService($http){
var masterService= {};
var groupDetail ="https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=398b86234e55f4a918ba0504f1af8e5f&text=";

var format = "&per_page=20&format=json&nojsoncallback=1";

var groupsPhoto = "https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=398b86234e55f4a918ba0504f1af8e5f&group_id=";

var overView = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=398b86234e55f4a918ba0504f1af8e5f&photo_id="
var photo = "&format=json&nojsoncallback=1";
var onlyPhotoSearch = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=398b86234e55f4a918ba0504f1af8e5f&text=";
var getGroupDetail = function(text,pageNo){
	if(pageNo)
	{
		var page = "&page="+pageNo
	}
	return $http.get(groupDetail+text+page+format).then(function (response) {
            return response;
        }).catch(function (error) {
            return error;
        });
};
var getGroupPhoto = function(text,pageNo){
	if(pageNo)
	{
		var page = "&page="+pageNo
	}
	return $http.get(groupsPhoto+text+page+format).then(function (response) {
            return response;
        }).catch(function (error) {
            return error;
        });
};
var getPhotos = function(text,pageNo){
	if(pageNo)
	{
		var page = "&page="+pageNo
	}
	return $http.get(onlyPhotoSearch+text+page+format).then(function (response) {
            return response;
        }).catch(function (error) {
            return error;
        });
};
var getOverview = function(id)
	{	
	return $http.get(overView+id+photo).then(function (response) {
            return response;
        }).catch(function (error) {
            return error;
        });
};


masterService.getGroupDetail = getGroupDetail;
masterService.getPhotos = getPhotos;
masterService.getOverview = getOverview;
masterService.getGroupPhoto = getGroupPhoto;
return masterService
}]);

