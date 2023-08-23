import dragBtnSvg from '../assets/more_vert.svg';
import deleteBtn from '../assets/delete-icon.svg';

import taskSelection from './taskSelection.js';
import taskStatus from './taskStatus.js';

const updateTasksList = (tasks, tasksCollection) => {
  const tasksSection = document.getElementById('tasks-section');

  tasksSection.innerHTML = '';
  tasks.forEach((taskItem, index) => {
    const task = document.createElement('li');

    task.classList.add('task-item');
    task.id = index + 1;
    const taskInnerHTML = `

    <input type="checkbox" class="checkbox" />

      <textarea id='${index + 1}' oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'>${taskItem.description}</textarea>

    <img id="drag-btn" class="show" src="${dragBtnSvg}" class="drag-btn" alt="drag and drop button" />

    <img id="delete-btn" src="${deleteBtn}" class="drag-btn" alt="drag and drop button" />

  `;

    task.innerHTML = taskInnerHTML;

    tasksSection.appendChild(task);
  });

  taskStatus(tasksCollection);
  taskSelection(tasksCollection);
};

export default updateTasksList;
