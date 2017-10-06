angular.module("todoApp",[])
	.controller ("todoCtrl",todoCtrl)


function todoCtrl()
{
	var todo = this;
	
	todo.tasks = [];
	todo.editMode = false;
	todo.addTasks = addTasks;
	todo.editTodo  = editTodo; 
	todo.deleteTodo = deleteTodo ;
	todo.updateTasks = updateTasks;
	todo.downTodo = downTodo;
	todo.upTodo = upTodo;
	todo.search = search;
	todo.saveIndex;
	todo.status = status;

	function status()
	{
		task.status = 1;
	}
	function search()
	{
		if(event.which == 13 && todo.editMode == false)
		{
			addTasks();
		}
		else if (event.which == 13 && todo.editMode == true)
		{
			updateTasks();
		}
	}

	function addTasks()
	{
		if(todo.task != "")
		{
		todo.tasks.push(todo.task);
		console.log(todo.tasks);
		todo.task = "";
		}
		else
		{
			window.alert("You Must Enter Some Tast");
		}
	}

	function editTodo(i)
	{
		todo.editMode = true;
		todo.task = todo.tasks[i];
		todo.saveIndex = i ;
	}

	function deleteTodo(i)
	{
		todo.tasks.splice(i,1);
	}

	function updateTasks()
	{
		if(todo.task != "")
		{
		todo.editMode = false;
		todo.tasks[todo.saveIndex]= todo.task;
		todo.task= "";
		}
		else
		{
			window.alert("You Must Enter Some Tast");
		}
	}

	function downTodo(i)
	{
		
		var temp = todo.tasks[i];
		todo.tasks[i] = todo.tasks[i+1];
		todo.tasks[i+1] =  temp;
	}

	function upTodo(i)
	{
	    var temp = todo.tasks[i];
		todo.tasks[i] = todo.tasks[i-1];
		todo.tasks[i-1] = temp;
	}
}