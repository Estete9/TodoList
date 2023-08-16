import './style.css';

import iconArrows from '../assets/arrow-cycle.svg';
import returnIcon from '../assets/return-icon.svg';
import ToDoCollection from './crudFunctions.js';
import updateUI from './updateUI.js';

document.getElementById('icon-arrows').src = iconArrows;
document.getElementById('return-icon').src = returnIcon;

const taskInput = document.querySelector('#input-section > input');
const localData = localStorage.getItem('tasksStorage');
let tasks = [];
let local = [];

try {
  local = JSON.parse(localData);
  if (local === null) local = [];
} catch (error) {
  console.warn('local storage is empty');
  local = [];
}
tasks = local;
const tasksCollection = new ToDoCollection(tasks);

taskInput.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    tasksCollection.add(taskInput.value);
  }
});
console.log(`this is task collection task list ${tasksCollection.tasksList}`);
updateUI(tasksCollection.tasksList);
