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
        var base_url = "https://api.motion.ai/1.0/messageBot?bot=69021&msg=;"
	//var path = "/KARB0000001";
	var message =text;
	var base = "&session=8gtyf8&key=fd69502aef7ef5c78079a188a71ee83d&from=yhg87";
	var promise = $http.get(base_url+message+base)
	promise.then(function(result){
		var obj= {}
		obj.text = result.data.botResponse;
		obj.user = 0
		chat.chats.push(obj);
		console.log(result);
	}).catch(function(err){
		console.log(err);
	})




	}
}