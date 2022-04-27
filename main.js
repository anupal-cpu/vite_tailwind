import './style.css';
import './index.scss';

// selectors

const insertTodoBtn = document.querySelector('.add-btn');
const insertInput = document.querySelector('.insert--input');
const todoParent = document.querySelector('.todos');

// functions

const addTodo = function () {
  todoParent.innerHTML += `<div
    class="todo flex justify-between items-center border border-orange-500 px-1"
  >
    <ul class="todo-list">
      <li>${insertInput.value}</li>
    </ul>
    <span class="actions flex gap-x-1">
      <img
        class="w-5 h-4 cursor-pointer"
        src="./check.svg"
        alt="completed"
      />
      <img
        class="w-4 h-4 cursor-pointer"
        src="./trash-can.svg"
        alt="delete"
      />
    </span>
  </div>`;
};

// eventlisteners

insertTodoBtn.addEventListener('click', () => {
  addTodo();
});
