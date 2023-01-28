// HTML Elementleri Üzerinde Gezinmek.

const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");
// const card = document.getElementsByClassName("card")[0];
const card = document.querySelector(".card");

const row = document.querySelector(".row");

let value;

//Anneden çocuklara erişmek

value = todoList;
value = todoList.children[0];
value = todoList.children[3];
value = todoList.children[todoList.children.length-1];
value = todoList.children[3].textContent = "Değişti";

// value = Array.from(todoList.children);

// value.forEach(function(todo){
//     console.log(todo.textContent);
// })



//Çocuktan Anneye Erişmek

value = todo;
let ul  = todo.parentElement;
// let cardElement = cardBody.parentElement;
// let row = cardElement.parentElement;
let container = row.parentElement;


// Kardeşler arasında gezinmek
value = todo;
value = todo.nextElementSibling.nextElementSibling.nextElementSibling;


value = todoLastChild;
value = todoLastChild.previousElementSibling.previousElementSibling
.previousElementSibling.nextElementSibling.previousElementSibling
.previousElementSibling;


value = row.children[0].children[3].children[0].textContent="Todo Listesi Başlığı Değişti";

let todo3= document.querySelector(".container");

todo3 = todo3.children[0].children[0].children[3].children[2].children[2].textContent="Todo 3 Değişti";

console.log(todo3)
console.log(value);




const cardBody = document.querySelectorAll(".card-body")[1];

console.log(cardBody);
const link = document.createElement("a");
link.id = "goBlogWebSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "http://enesbayram.net";
link.target = "_blank";
link.innerHTML= "Kişisel Websiteme git"

cardBody.appendChild(link);



const todoEklemeLi = document.createElement("li");
const todoEklemeA = document.createElement("a");
const todoEklemeI = document.createElement("i");

todoEklemeLi.className = "list-group-item d-flex justify-content-between";
todoEklemeLi.innerHTML = "Todo 5";

todoEklemeA.href = "#";
todoEklemeA.className = "delete-item";

todoEklemeI.className = "fa fa-remove";

todoEklemeA.appendChild(todoEklemeI);
todoEklemeLi.appendChild(todoEklemeA);
todoList.appendChild(todoEklemeLi);