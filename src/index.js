import './style.css';
import dragBtnSvg from '../assets/more_vert.svg';
import iconArrows from '../assets/arrow-cycle.svg';
import returnIcon from '../assets/return-icon.svg';

document.getElementById('icon-arrows').src = iconArrows;
document.getElementById('return-icon').src = returnIcon;
// class Task {
//   constructor(description, completed, index) {
//     this.description = description;
//     this.completed = completed;
//     this.index = index;
//   }
// }

const tasks = [

];
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
