// done todo

const completedTodo = function (target) {
  const parent = target.parentElement.parentElement;
  const todoTask = parent.querySelector('.list-item');
  if (target.classList.contains('done-todo')) {
    parent.classList.toggle('dim');
    todoTask.classList.toggle('line-cut');
  }
};

export default { completedTodo };
