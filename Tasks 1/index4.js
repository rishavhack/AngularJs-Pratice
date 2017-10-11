function myFunction ()
{
	var str = document.getElementById("fname").value;
	console.log(str);
	var  str = str.split(" ");
	var Acronyms = ''; 
	for (var i = 0 ;i<str.length;i++)
	{
		tmp = str[i].split("").shift();
		Acronyms = Acronyms + tmp; 
	}
	window.alert(Acronyms.toUpperCase());
	
}