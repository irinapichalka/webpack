import { onCreateTask } from './createTask';
import { onToggleTask } from './updateTask';
import { onDeleteTask } from './deleteTask';

const onListClick = (e) => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');

  if (isCheckbox) {
    onToggleTask(e);
  }
  if (isDeleteBtn) {
    onDeleteTask(e);
  }
};

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todolistElem = document.querySelector('.list');
  todolistElem.addEventListener('click', onListClick);
};
