function myFunction ()
{
	var str = document.getElementById("fname").value;
	var  str = str.split("");

	console.log(str);
	var count = 0;
	for (var i = 0 ;i<str.length;i++)
	{
		for(var j=0;j<str.length;j++)
		{
			if(str[i]==str[j] && i != j)
				{
					count=1;
					break;
				}
		}
	}
	if(count==0)
	{
		window.alert("String is isograms ");
	}
	else
	{
		window.alert("String is not isograms ");
	}
}