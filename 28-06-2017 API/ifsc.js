angular.module("chatApp",[])
.controller("chatCtrl", chatCtrl)



function chatCtrl($http)
{
	var chat =this;
	chat.me=1;
	chat.chats=[];
	chat.add = function(text)
	{
		/*var obj= {}
		obj.txt = text;
		obj.user = chat.me;*/
			chat.chats.push({
            "text":text,
            "user":1
        })

        chat.input = "";
        var base_url = "https://smsapi.engineeringtgr.com/send/?Mobile=8952010758&Password=omsairam&Key=rishajI8JitYazKbZUClMpqDE4Qm&Message=hid&To=8789955616"


	//var path = "/KARB0000001";
	var message =text;
	var base = "&session=8gtyf8&key=fd69502aef7ef5c78079a188a71ee83d&from=yhg87";
	var promise = $http.get(base_url)
	promise.then(function(result){
		console.log(result);
	}).catch(function(err){
		console.log(err);
	})




	}
}