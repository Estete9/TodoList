import dragBtnSvg from '../assets/more_vert.svg';

const updateTasksList = (tasks) => {
  const tasksSection = document.getElementById('tasks-section');
  tasksSection.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    const task = document.createElement('li');
    task.classList.add('task-item');
    const taskInnerHTML = `
    <input type="checkbox" />
      <textarea oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'>${tasks[i].description}</textarea>
    <img src="${dragBtnSvg}" class="drag-btn" alt="drag and drop button" />
  `;
    task.innerHTML = taskInnerHTML;
    tasksSection.appendChild(task);
  }
};

export default updateTasksList;
