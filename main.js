import './style.css';
import './index.scss';
import foo from './images';
import bar from './images';

// selectors

const insertTodoBtn = document.querySelector('.add-btn');
const insertInput = document.querySelector('.insert--input');
const todoParent = document.querySelector('.todos');

// functions
console.log();

const addTodo = function () {
  todoParent.innerHTML += `<div
    class="todo flex justify-between items-center border border-orange-500 px-1" style="height:26px;"
  >
    <ul class="todo-list">
      <li>${insertInput.value}</li>
    </ul>
    <span class="actions flex gap-x-1">
      <img
        class="w-5 h-4 cursor-pointer"
        src= ${foo.foo}
        alt="completed"
      />
      <img
        class="w-4 h-4 cursor-pointer"
        src=${bar.bar}
        alt="delete"
      />
    </span>
  </div>`;
};

// eventlisteners

insertTodoBtn.addEventListener('click', () => {
  addTodo();
});
