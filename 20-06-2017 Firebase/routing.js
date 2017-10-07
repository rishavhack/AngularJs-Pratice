angular.module("firebaseapp",["firebase"])
.controller("dataCtrl",dataCtrl)

function dataCtrl($firebaseObject,$firebaseArray,$firebaseStorage){


	var data =this;
	//Reference to Database Path
	var students =firebase.database().ref("students");
	//Parsing the refernce to an array
	data.students  = $firebaseArray(students)
	data.upload = upload;
	var imageRef = firebase.storage().ref("images/")
	var pdfRef = firebase.storage().ref("pdf/")
	var file = $firebaseStorage(imageRef)
	function upload()
	{
		var fileObj = document.getElementById("file").files[0];
		file.$put(fileObj)
	}

	data.add = add;
	function add()
	{
	/*data.obj={};
	obj.name=data.student;
	obj.age=data.student1;*/
	data.students.$add({name:data.student,age : data.student1});
	console.log("as")
	}

    /*var data = this;

     var rootRef =  firebase.database().ref();
     var studentRef = rootRef.child("students");
     data.students  =  $firebaseArray(studentRef);
     var demoRef = rootRef.child("demo");
     data.demo =$firebaseObject(demoRef);


     data.demo.name = "abc";       
     //data.demo.$save();  
    console.log(data.students);
    
     data.add = function(student){
            data.students.$add(student);
            data.student = {};
            console.log(data.students);
     }
*/
         
}

	
/*function firstCtrl($firebaseArray)
{
	var todo =this;
	//Reference to Database Path
	var students =firebase.database().ref("students");
	//Parsing the refernce to an array
	todo.students  = $firebaseArray(students)

	todo.students.$add({name:"abc",age : 8})
}*/