angular.module("api",[])
	.controller ("firstCtrl",firstCtrl)


function firstCtrl($http)
{


	//https://api.motion.ai/messageBot?msg=Hi+Bot&bot=1&session=mynewsession&key=YOUR_API_KEY
	var my =this

	my.submit =submit;
	function submit()
	{
	var base_url = "https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey="
	//var path = "/KARB0000001";
	var base = "4403fa0143cd4ed0a99129706f2da600";
	var promise = $http.get(base_url+base)
	promise.then(function(result){
		my.rishav = result;
		console.log(result);
	}).catch(function(err){
		console.log(err);
	})
	}
}


