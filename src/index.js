import './style.css';
import iconArrows from '../assets/arrow-cycle.svg';
import returnIcon from '../assets/return-icon.svg';
import TasksCollection from './crudFunctions.js';
import updateUI from './updateUI.js';
import taskSelection from './taskSelection.js';
import clearCompleted from './clearCompleted.js';

document.getElementById('icon-arrows').src = iconArrows;
document.getElementById('return-icon').src = returnIcon;

const taskInput = document.querySelector('#input-section > input');
const clearCompletedBtn = document.getElementById('clear-completed-btn');
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

const tasksCollection = new TasksCollection(tasks);
clearCompletedBtn.onclick = () => {
  clearCompleted(tasksCollection);
  updateUI(tasksCollection.tasksList, tasksCollection);
};

taskInput.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    tasksCollection.addTask(taskInput.value, tasksCollection);

    taskInput.value = '';
  }
});

updateUI(tasksCollection.tasksList, tasksCollection);

taskSelection(tasksCollection);
