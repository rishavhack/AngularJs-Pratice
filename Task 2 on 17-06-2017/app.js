angular.module("app",[])
	.controller("firstCtrl",firstCtrl)

function firstCtrl()
{
	var my= this;
	my.addTask= addTask;
	my.itemList = [];
	my.hack = false;
	my.quantity;
	my.total;
	

	function addTask()
	{
		if(my.item != undefined && my.quan != undefined && my.rate != undefined )
		{	

			console.log("hi");
			my.hack = true;
			my.hack1 = true;
			var obj = {};
			obj.item = my.item;
			obj.quant = my.quan;
			obj.rate = my.rate;
			obj.total = my.quan * my.rate;
			my.itemList.push(obj);
			my.item = "";
			my.quan = "";
			my.rate="";
			my.quantity = 0;
			my.total=0;

			for(var i=0; i<my.itemList.length;i++)
			{
				my.quantity = my.itemList[i].quant + my.quantity;
				my.total = my.itemList[i].total + my.total;
			}
		}
		else
		{
			window.alert("Plz Enter Something");
		}
		
	}
	

		
}