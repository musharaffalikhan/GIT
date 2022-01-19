const inputTask = document.querySelector("#inputtask");
const form = document.querySelector(".form");
const addButton = document.querySelector("#addbutton");
const toDoList = document.querySelector(".todolist");
const clear = document.querySelector(".clear");


const todoData=localStorage.getItem('todo_info');
if(todoData!=null){
  
(JSON.parse(todoData)).forEach(element => {
  console.log(todoData)
  createNewItem(element.data,1)
});

}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputTask.value == "") {
    alert("please add Some Text");
  } else {
    const newTask = createNewItem(inputTask.value);
    
    toDoList.appendChild(newTask);
    inputTask.value = "";
    inputTask.focus();
    clear.classList.remove("d-none");
  }

  clear.addEventListener("click", function () {
    toDoList.innerHTML = "";
  });
});

function createNewItem(inputValue,bool) {

  if( bool==1){

   console.log('done')
  const task = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  span.textContent = inputValue;
  delBtn.textContent = "Delete";
  editBtn.textContent = "Edit";
  task.appendChild(span);
  task.appendChild(delBtn);
  task.appendChild(editBtn);

  delBtn.addEventListener("click", function () {
    task.parentNode.removeChild(task);
  });
  editBtn.addEventListener("click", function () {
    span.contentEditable = true;
    span.focus();
  });
  toDoList.appendChild(task);
}
else if((localStorage.getItem('todo_info'))==null){
localStorage.setItem('todo_info',JSON.stringify([{data:inputValue}]));
console.log([inputValue])
const task = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  span.textContent = inputValue;
  delBtn.textContent = "Delete";
  editBtn.textContent = "Edit";
  task.appendChild(span);
  task.appendChild(delBtn);
  task.appendChild(editBtn);

  delBtn.addEventListener("click", function () {
    task.parentNode.removeChild(task);
  });
  editBtn.addEventListener("click", function () {
    span.contentEditable = true;
    span.focus();
  });
  return task;

}else{
let obj={data:inputValue};
let myArray=  JSON.parse(localStorage.getItem('todo_info'))
console.log(Array.isArray(myArray))
console.log(myArray);
myArray.push(obj)
 

  localStorage.setItem('todo_info',JSON.stringify(myArray));
  const task = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  span.textContent = inputValue;
  delBtn.textContent = "Delete";
  editBtn.textContent = "Edit";
  task.appendChild(span);
  task.appendChild(delBtn);
  task.appendChild(editBtn);

  delBtn.addEventListener("click", function () {
    task.parentNode.removeChild(task);
  });
  editBtn.addEventListener("click", function () {
    span.contentEditable = true;
    span.focus();
  });
  return task;
}

  
}
