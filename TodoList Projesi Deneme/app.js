"use strict"
const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");
let todos =[];
runEvents();

function runEvents(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded)
    secondCardBody.addEventListener("click",removeTodoToUI);
    clearButton.addEventListener("click",allTodosEverywhere);
    filterInput.addEventListener("keyup",filter);
}

function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}


function filter(e){
    const filterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");
    
    if(todoListesi.length>0){
        todoListesi.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){
                todo.setAttribute("style","display : block");
            }else{
                todo.setAttribute("style","display : none !important");
            }
        });
    }else{
        showAlert("warning","Filtreleme yapmak için en az bir todo olmalıdır!");
    }
}

function removeTodoToUI(e){
    if(e.target.className == "fa fa-remove"){
        //ekrandan silme
        const todo = e.target.parentElement.parentElement;
        todo.remove(); 
        //storagede silme
        removeTodoToStorage(todo.textContent);
        showAlert("success","Todo Başarıyla Silindi.")
    }
}

function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo,index){
        if(removeTodo.textContent === todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}
function allTodosEverywhere(){
    const allLi = document.querySelectorAll(".list-group-item");
    if(allLi.length>0){
        //ekrandan silme
        allLi.forEach(function(todo){
            // removeTodoToStorage(todo);     //todo BENİM YAPTIĞIM
            todo.remove();
        });

        //            Storageden silme
        todos=[];                                                //Hocanın yaptığı
        localStorage.setItem("todos",JSON.stringify(todos));
        showAlert("success","Başarılı bir şekilde silindi.");
    }else{
        showAlert("warning","Silmek için en az bir todo olmalıdır.");
    }
    console.log(allLi);
}

function addTodo(e){
    const inputText = addInput.value.trim();
    if(inputText == null || inputText ==""){
        showAlert("warning","Lütfen Boş Bırakmayınız.")
    }else{
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
        showAlert("success","Todo Eklendi");
    }
    e.preventDefault();
}

function addTodoToUI(newTodos){
    const newTodo = document.createElement("li")
    newTodo.className = "list-group-item d-flex justify-content-between"
    newTodo.innerHTML = newTodos ;

    const newA = document.createElement("a");
    newA.className= "delete-item";
    newA.href = "#";

    const newI = document.createElement("i");
    newI.className = "fa fa-remove";

    newA.appendChild(newI);
    newTodo.appendChild(newA);
    todoList.appendChild(newTodo);

    addInput.value = "";
}


function addTodoToStorage(newTodo){
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}



function checkTodosFromStorage(){
    if (localStorage.getItem("todos") === null){
        todos =[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

}


function showAlert(type,message){
    const div = document.createElement("div");
    div.className=`alert alert-${type}`;
    div.innerHTML = message;

    firstCardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },2500)
}