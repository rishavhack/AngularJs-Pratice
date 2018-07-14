angular.module('todolist', ['ngRoute'])
        .controller('homeCtrl', homeCtrl)
        .controller('taskCtrl', taskCtrl)
        .config(routeConfig)
        .factory('dataService', dataService);


function routeConfig($routeProvider){
  $routeProvider
    .when('/home',{templateUrl:'templates/home.html'})
    .when('/task',{templateUrl:'templates/tasks.html'})
    .otherwise({redirectTo:'/home'})
}

function dataService(){
  return {
    //list : angular.toJson(localStorage.getItem('todolist')) || [],
    list : JSON.parse(localStorage.getItem('todolist')) || [],
    index: JSON.parse(localStorage.getItem('index'))
  };
}


function homeCtrl(dataService){
  var home = this;
  home.todoList = dataService;
  home.addTodo = addTodo;
  home.removeTodo = removeTodo;
  home.editTodo = editTodo;
  home.edit = false;
  home.editIndex = -1;
  home.editTodoSave = editTodoSave;


  function addTodo(x){
    if(x){
      var tmp = {};
        tmp.name = x;
        tmp.status = false;
        tmp.tasks = [];
        tmp.done = [];
      home.todoList.list.push(tmp);
      localStorage.setItem('todolist',JSON.stringify(home.todoList.list));
      home.text = '';
    }else{
      alert('Please Enter A Value !');
    }
  }

  function removeTodo(i){
    if(confirm('Are you sure you want to delete "'+home.todoList.list[i].name+'" ?')){
      home.todoList.list.splice(i,1);
      localStorage.setItem('todolist',JSON.stringify(home.todoList.list));
    }
  }

  function editTodo(i){
      home.text = home.todoList.list[i].name;
      home.edit = true;
      home.editIndex = i;
  }

  function editTodoSave(x){
    if(x){
      home.todoList.list[home.editIndex].name = x;
      home.edit = false;
      home.editIndex = -1;
      home.text = '';
      localStorage.setItem('todolist', JSON.stringify(home.todoList.list));
    }else{
      alert('Please Enter A Value !');
      home.text = home.todoList.list[home.editIndex].name;
    }
  }

}

function taskCtrl(dataService){

  var todo = this;
  todo.todoList = dataService;
  todo.listTasks = dataService.list[todo.todoList.index];

  todo.addTask = addTask;
  localStorage.setItem('index', todo.todoList.index);

  todo.removeTask = removeTask;
  todo.editTask = editTask;
  todo.edit = false;
  todo.editIndex = -1;
  todo.editStatus = false;
  todo.editTaskSave = editTaskSave;

  todo.changeStatus = changeStatus;

  todo.moveUP = moveUP;
  todo.moveDOWN = moveDOWN;

  function addTask(x){
    if(x){
      var task = {
        name : x,
        status : false
      }
      todo.listTasks.tasks.push(task);
      localStorage.setItem('todolist', JSON.stringify(todo.todoList.list));
      todo.text = '';
    }else{
      alert('Please Enter A Value !');
    }

  }

  function removeTask(i, status){
    if(confirm('Are you sure you want to delete this item?')){
      if(status){
        todo.listTasks.done.splice(i,1);
      }else{
        todo.listTasks.tasks.splice(i,1);
      }
      localStorage.setItem('todolist', JSON.stringify(todo.todoList.list));
    }
  }

  function editTask(i, status){
    todo.edit = true;
    todo.editIndex = i;
    todo.editStatus = status;
    if(status){
      todo.text = todo.listTasks.done[i].name;
    }else{
      todo.text = todo.listTasks.tasks[i].name;
    }

  }

  function editTaskSave(x){
    if(x){
      if(todo.editStatus){
        todo.listTasks.done[todo.editIndex].name = x;
      }else{
        todo.listTasks.tasks[todo.editIndex].name = x;
      }
      todo.editIndex = -1;
      todo.edit = false;
      localStorage.setItem('todolist', JSON.stringify(todo.todoList.list));
      todo.text = '';
    }else{
      alert('Please Enter A Value !');
    }
  }

  function changeStatus(i, status){
    if(status){
      todo.listTasks.done[i].status = !todo.listTasks.done[i].status;
      var temp = todo.listTasks.done.splice(i,1);
      todo.listTasks.tasks.push(temp[0]);
    }else{
      todo.listTasks.tasks[i].status = !todo.listTasks.tasks[i].status;
      var temp = todo.listTasks.tasks.splice(i,1);
      todo.listTasks.done.push(temp[0]);
    }

    localStorage.setItem('todolist', JSON.stringify(todo.todoList.list));
  }

  function moveUP(i, status){
    if(status){
      var swap = todo.listTasks.done[i];
      todo.listTasks.done[i] = todo.listTasks.done[i - 1];
      todo.listTasks.done[i - 1] = swap;
    }else{
      var swap = todo.listTasks.tasks[i];
      todo.listTasks.tasks[i] = todo.listTasks.tasks[i - 1];
      todo.listTasks.tasks[i - 1] = swap;
    }

    localStorage.setItem('todolist', JSON.stringify(todo.todoList.list));
  }

  function moveDOWN(i, status){
    if(status){
      var swap = todo.listTasks.done[i];
      todo.listTasks.done[i] = todo.listTasks.done[i + 1];
      todo.listTasks.done[i + 1] = swap;
    }else{
      var swap = todo.listTasks.tasks[i];
      todo.listTasks.tasks[i] = todo.listTasks.tasks[i + 1];
      todo.listTasks.tasks[i + 1] = swap;
    }
    localStorage.setItem('todolist', JSON.stringify(todo.todoList.list));
  }

}
