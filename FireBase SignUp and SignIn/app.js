angular.module("chat",["firebase"])
   .controller("chatCtrl",chatCtrl)

function chatCtrl($firebaseArray,$firebaseAuth)
{


  var my = this;
  my.signUp = signUp;
  my.signIn = signIn
  function signUp()
  {
    var username = my.user.email;
    var password = my.user.password;
    if(username && password)
    {
      var auth = $firebaseAuth();
      auth.$createUserWithEmailAndPassword(username,password).then(function(){
        console.log("UserSignUP");
      }).catch(function(){
        console.log("Error");
      });
    }
  }
    function signIn()
  {
    var username = my.user.email1;
    var password = my.user.password1;
    var auth = $firebaseAuth();
      auth.$signInWithEmailAndPassword(username,password).then(function(){
        console.log("Login ");
      }).catch(function(){
        console.log("Error");
      });
    
  }



}