import dragBtnSvg from '../assets/more_vert.svg';

const updateUI = (tasks) => {
  const tasksSection = document.getElementById('tasks-section');
  for (let i = 0; i < tasks.length; i += 1) {
    const task = document.createElement('li');
    task.classList.add('task-item');
    const taskInnerHTML = `
    <input type="checkbox" />
    <div>
      <label class="label">${tasks[i].description}</label>
      <textarea>${tasks[i].description}</textarea>
    </div>
    <img src="${dragBtnSvg}" class="drag-btn" alt="drag and drop button" />
  `;
    task.innerHTML = taskInnerHTML;
    tasksSection.appendChild(task);
  }
};

export default updateUI;
