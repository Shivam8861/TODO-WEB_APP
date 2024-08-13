let todoList =[          // to store or maintain todo list
    {
    item :'hello',
    dueDate:'12/08/24',
    },
    {
    item :'shivam',
    dueDate:'12/08/24',
    }
  ]; 

displayItems(); // we call it here because we want displayItem when we load/refresh the page 

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();//jb naya iten add karenge ye call ho jayega aur item print ho jayega 
  }

  function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
      let {item, dueDate} = todoList[i];
      newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
      `;
    }
    containerElement.innerHTML = newHtml;
}

//changdhwbjxnsiyv3u4ebhjx