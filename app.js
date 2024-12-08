// Local Storage
localStorage.setItem("hareket","burpee");
localStorage.setItem("tekrar","50");

//localstorage.clear();
console.log(localStorage.getItem("fitness"));

if(localStorage.getItem("fitmess")===null){
    console.log("Data not found");
}else{
    console.log("Data found");
}

const todos = ["Todoa 1","Todo 2","Todo 3"];

localStorage.getItem("todos",todos);
console.log(typeof getItem("todos"));


const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e){
    
    const value = todoInput.value;
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));


    e.preventDevault();
}
