const addInput = document.querySelector("#todoName");
const form = document.querySelector("#todoAddForm");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const searchInput = document.querySelector("#todoSearch");
let todos = [];

runEvents();

function runEvents(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);
    secondCardBody.addEventListener("click",removeTodoToUI);
    clearButton.addEventListener("click",clearTodosEverywhere);
    searchInput.addEventListener("keyup",filterTodo);
}

function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    });
}

function addTodo(e){
    const inputText = addInput.value.trim();
    if(inputText== null || inputText == ""){
        showAlert("danger","Todo girmelisiniz.");
    }else{
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
        showAlert("success","Todo Eklendi.");
    }

    e.preventDefault();
}

function addTodoToUI(newTodo){
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.innerHTML = newTodo;

    const a = document.createElement("a");
    a.className = "delete-item";
    a.href="#"

    const i = document.createElement("i");
    i.className = "fa fa-remove";


    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";

}   

function addTodoToStorage(newTodo){
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}
function filterTodo(e){
    const filterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");
    if(todoListesi.length>0){
        todoListesi.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){
                todo.setAttribute("style","display : block");
            }
            else{
                todo.setAttribute("style","display : none !important");
                
            }
        })
    }
}

function removeTodoToUI(e){
    if(e.target.className == "fa fa-remove"){
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        removeTodoToStorage(todo.textContent);
    }
}

function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo,index){
        if(removeTodo===todo){
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
    showAlert("success","Başarılı şekilde silindi.")
}

function clearTodosEverywhere(){
    const allLi = document.querySelectorAll(".list-group-item");
    if(allLi.length>0){
        allLi.forEach(function(list){
            list.remove();
        })

        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    else{
        showAlert("warning","Silmek için en az 1 tane todo olmalıdır.");
    }
}

function checkTodosFromStorage(){
    if (localStorage.getItem("todos") === null){
        todos =[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type,message){
    const div =document.createElement("div");
    div.className= "alert alert-"+type;
    div.role= "alert";
    div.innerHTML = message;
    
    firstCardBody.appendChild(div);


    setTimeout(function(){
        div.remove();
    },2500);
}    

// console.log(a);