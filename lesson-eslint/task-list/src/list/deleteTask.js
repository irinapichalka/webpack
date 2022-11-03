import { renderTasks } from './render';
import { getItem, setItem } from './storage';
import { deleteTask, getTasksList } from './tasksGateway';

export const onDeleteTask = (e) => {
  const taskId = e.target.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
