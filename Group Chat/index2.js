angular.module("app",['ngRoute','firebase'])
.controller("groupChat",groupChat)
.config(routeconfig)


function routeconfig($routeProvider)
{
	$routeProvider
	.when('/',{templateUrl:'templates/main.html'})
	.when('/admin',{templateUrl:'templates/admin.html'})
	.when('/subjectlist/:subjectname',{templateUrl:'templates/subjectlist.html'})
	.when('/chatList/:chatTopic',{templateUrl:'templates/chatList.html'})
	.when('/registration',{templateUrl:'templates/registration.html'})
	.when('/result',{templateUrl:'templates/resultPage.html'})
	.otherwise({redirectTo:'/'})
}

function groupChat($firebaseArray,$firebaseAuth,$firebaseObject,$location,$routeParams)
{
	var my =this;
	my.signin = signin;
	my.signup = signup;
	my.addTasks = addTasks;

	var userList = firebase.database().ref("userList");
	my.userList = $firebaseArray(userList);
	var taskList = firebase.database().ref("taskList");
	my.taskList = $firebaseArray(taskList);

	function addTasks()
	{
		var obj ={};
		obj.topicName = my.texts;
		my.taskList.$add(obj);
	}
	function signin()
	{
        var email=my.email;
        var password=my.password1;
		var auth = $firebaseAuth();
	    auth.$signInWithEmailAndPassword(email,password).then(function(firebaseUser) {
		  console.log(firebaseUser);
		}).catch(function(error) {
		  window.alert("Invalid password");
		});
	}

	function signup()
	{

		if(my.userpssword==my.password)
		{
			var username = my.useremail;
			var password = my.password;
			var auth = $firebaseAuth(); 
			auth.$createUserWithEmailAndPassword(username,password)
	 		 .then(function(firebaseUser) {
	 		 	console.log(firebaseUser);
	 		 	var obj = {};
	 		 	obj.email = firebaseUser.email;
	 		 	my.userList.$add(obj);
	    	console.log("User created successfully!");
	 	 	}).catch(function(error) {
	  	  	console.error("Error: ", error);
	  			});
		}
		else
		{
			window.alert("password not matched");
		}
	}

}