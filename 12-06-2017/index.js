angular.module("todoApp",[])
	.controller ("todoCtrl",todoCtrl)


function todoCtrl()
{
	var todo = this;

	todo.tasks = [];
	todo.editMode = false
	todo.addTasks = addTasks;
	todo.editTodo  = editTodo; 
	todo.deleteTodo = deleteTodo ;
	todo.updateTasks = updateTasks;
	todo.downTodo = downTodo;
	todo.upTodo = upTodo;
	todo.setStatus = setStatus;
	todo.search = search;
	todo.saveIndex;

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
		var obj = {};
		obj.title = todo.task;
		obj.status = false;
		todo.tasks.push(obj);
		console.log(todo.tasks);
		todo.task = "";

	}
	function editTodo(i)
	{
		todo.editMode = true;
		todo.task = todo.tasks[i].title;
		todo.saveIndex = i ;
	}	
	function setStatus(i)
	{
		todo.tasks[i].status = true;
	}

	function deleteTodo (i)
	{
		todo.tasks.splice(i,1);
	}
	function updateTasks()
	{
		todo.editMode = false;
		todo.tasks[todo.saveIndex].title= todo.task;
		todo.task= "";
	}
	function downTodo(i)
	{
		var temp = [] ;
		temp = todo.tasks[i];
		todo.tasks[i] = todo.tasks[i+1];
		todo.tasks[i+1] =  temp;
	}
	function upTodo (i)
	{
		var temp = [];
		temp = todo.tasks[i];
		todo.tasks[i] = todo.tasks[i-1];
		todo.tasks[i-1] = temp;
	}
}