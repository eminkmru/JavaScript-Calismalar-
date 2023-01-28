const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".list-group")[0];
const secondCardBody = document.querySelectorAll(".list-group")[1];
const clearButton = document.querySelector("#clearButton");

runEvents();

function runEvents(){
    form.addEventListener("submit",addTodo);
}

function addTodo(e){
    const inputText = addInput.value.trim();
    if(inputText == null || inputText ==""){
        alert("Lütfen boş bırakmayınız");
    }else{
        addTodoToUI(inputText);
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
