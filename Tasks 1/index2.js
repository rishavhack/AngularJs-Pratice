function myFunction ()
{
	var str = document.getElementById("fname").value;
	console.log(str);
	var  alpha = "abcdefghijkmnoqrstuvwxyz";
	var  alphabet = alpha.split("");
	var count = 0;
	for (var i = 0 ;i<alphabet.length;i++)
	{
		if(!str.match(alphabet[i]))
			{
				count=1;
				break;
			}

	}
	if(count==0)
	{
		window.alert("String is pangram ");
	}
	else
	{
		window.alert("String is not pangram ");
	}
}