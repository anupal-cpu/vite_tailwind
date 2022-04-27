// delete todo function

const removeTodo = function (target) {
  if (target.classList.contains('del-todo')) {
    target.parentElement.parentElement.classList.add('fade');
    target.parentElement.parentElement.addEventListener('transitionend', () => {
      target.parentElement.parentElement.remove();
    });
  }
};

export default { removeTodo };
