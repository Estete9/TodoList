import dragBtnSvg from '../assets/more_vert.svg';
import deleteBtn from '../assets/delete-icon.svg';

class UpdateUI {
  updateTasksList = (tasks) => {
    const tasksSection = document.getElementById('tasks-section');
    tasksSection.innerHTML = '';
    tasks.forEach((taskItem, index) => {
      const taskSection = document.createElement('li');

      taskSection.classList.add('task-item');
      taskSection.id = index + 1;
      // prettier-ignore
      taskSection.innerHTML = `
      <input type="checkbox" class="checkbox" />
        <textarea id='${index + 1}' oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'>${taskItem.description}</textarea>
        <img id="drag-btn" class="show" src="${dragBtnSvg}" class="drag-btn" alt="drag and drop button" />
        <img id="delete-btn" src="${deleteBtn}" class="drag-btn" alt="drag and drop button" />
    `;

      tasksSection.appendChild(taskSection);
    });
  };
}

export default UpdateUI;
