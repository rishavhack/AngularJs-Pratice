var routerApp = angular.module("routeApp")

routerApp.filter('myFilter', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});

routerApp.filter('camalCase', function() {
    return function(x) {
        var i, c, txt = "";
		var spaceIndex = x.indexOf(' ')
        for (i = 0; i < x.length; i++) 
		{
			c=x[i]
			if (i != spaceIndex+1)
			{
				c = c.toLowerCase();
			}
			else
			{
				
				c=c.toUpperCase()	
			}
            txt += c;
        }
	
        return txt.replace(/\s/g,''); 
    };
});
routerApp.controller("homtCtrl",function($scope)
{
	$scope.artists = ['Pharrel Williams', 'Led Zeppelin', 'Rolling Stones','Rishav Srivastav','Hire Craft'];
});
