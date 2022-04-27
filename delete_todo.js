// delete todo function

const removeTodo = function (target) {
  const parentDel = target.parentElement.parentElement;

  if (target.classList.contains('del-todo')) {
    parentDel.classList.remove('dim');
    parentDel.classList.add('fade');
    parentDel.addEventListener('transitionend', () => {
      parentDel.remove();
    });
  }
};

export default { removeTodo };
