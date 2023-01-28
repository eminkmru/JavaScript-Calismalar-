const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
let todos =[];
runEvents();

function runEvents(){
    form.addEventListener("submit",addTodo);
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