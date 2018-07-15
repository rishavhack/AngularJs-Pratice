angular.module("chat",['firebase','ngRoute','ngFileUpload'])
   .controller("MainCtrl",MainCtrl)
   .controller("GalleryCtrl",GalleryCtrl)
    .config(routeConfig)



function routeConfig($routeProvider)
{
  $routeProvider
    .when('/',{templateUrl:'main.html'})
    .when('/gallery',{templateUrl:'gallery.html'})
    .otherwise({redirectTo:'/'})
}

function MainCtrl($firebaseArray,$firebaseAuth,$firebaseStorage)
{
 var my =this;

 var uploader = document.getElementById("uploadbar");
 my.msg="No File Selected. Please Select a file to upload";
 my.displayMsg = true;
 my.tags = {};
 my.selectFile = function(file)
 {
 	my.fileList = file;
 	my.displayMsg = false;
 	console.log(my.fileList);
 }
 my.removeFile = function(file){
 	console.log("asd");
 	var index = my.fileList.indexOf(file);
 	my.fileList.splice(index,1);
 	if(my.fileList.length < 1)
 	{
 		my.displayMsg = true;
 	}
 }
 my.uploadFile = function(file)
 {
 	var file = file;
 	var tags = my.tags.name;
 	if(tags == undefined)
 	{
 		tags = null;
 	}
 	//Create a firebase Storage Referencec
 	var storageRef = firebase.storage().ref('Photo/' + file.name);
 	var storage = $firebaseStorage(storageRef);

 	//Upload File
 	var uploadTask = storage.$put(file);
 	console.log(uploadTask);
 	uploadTask.$progress(function(snapshot)
 	{
 		var percentageUpload = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
 		my.percentage = percentageUpload.toFixed(0);
 		uploadbar.style.width = my.percentage + '%';
 		console.log(percentageUpload);
 	});

 	uploadTask.$complete(function(snapshot){

 		my.removeFile(file);
 		my.msg ="Photo UPloaded Successfully.Select another image to upload";
 		console.log("Upload Complete");
 		console.log(snapshot);
 		var imageUrl = snapshot.downloadURL;
 		var imageName = snapshot.metadata.name;

 		//Store image URL and details into firebase database
 		var ref = firebase.database().ref("Images");
 		var urls = $firebaseArray(ref);
 		//add data to firebase
 		urls.$add({
 			imageUrl : imageUrl,
 			imageName : imageName,
 			tags : tags
 		}).then(function(ref){
 			var id = ref.key;
 			console.log("image added to the database with ref key " + id);
 			urls.$indexFor(id);
 		});
 		//Error
 		uploadTask.$error(function(error){
 			console.log(error);
 		});
 	});
 }

}


function GalleryCtrl($firebaseArray)
{
	var me =this;
	var ref = firebase.database().ref('Images')
	var urls = $firebaseArray(ref);
	console.log(urls);
	me.urls = urls;
}