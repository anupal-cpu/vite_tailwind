import './style.css';
import './index.scss';
import './custom.css';
import foo from './images';
import bar from './images';
import removeTodo from './delete_todo.js';

// selectors

const insertTodoBtn = document.querySelector('.add-btn');
const insertInput = document.querySelector('.insert--input');
const todoParent = document.querySelector('.todos');

// const deleteTodo = document.querySelector('.del-todo');
// const doneTodo = document.querySelector('.done-todo');

// functions

const addTodo = function () {
  todoParent.innerHTML += `<div
    class="todo flex justify-between items-center border border-orange-500 px-1" style="height:26px;"
  >
    <ul class="todo-list">
      <li>${insertInput.value}</li>
    </ul>
    <span class="actions flex gap-x-1">
      <img
        class="done-todo w-5 h-4 cursor-pointer"
        src= ${foo.foo}
        alt="completed"
      />
      <img
        class="del-todo w-4 h-4 cursor-pointer"
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

// deleteTodo.addEventListener('click', removeTodo);

todoParent.addEventListener('click', (e) => {
  removeTodo.removeTodo(e.target);
});
