import './style.css';
import iconArrows from '../assets/arrow-cycle.svg';
import returnIcon from '../assets/return-icon.svg';
import TasksCollection from './crudFunctions.js';
import UIUtils from './updateUI.js';
import taskSelection from './taskSelection.js';
import clearCompleted from './clearCompleted.js';
import taskStatus from './taskStatus.js';

document.getElementById('icon-arrows').src = iconArrows;
document.getElementById('return-icon').src = returnIcon;

const taskInput = document.querySelector('#input-section > input');
const clearCompletedBtn = document.getElementById('clear-completed-btn');
const localData = localStorage.getItem('tasksStorage');
const uiUtils = new UIUtils();

let tasks = [];
const local = JSON.parse(localData) || [];

tasks = local;

const tasksCollection = new TasksCollection(tasks);
clearCompletedBtn.onclick = () => {
  clearCompleted(tasksCollection);
  uiUtils.updateTasksList(tasksCollection.tasksList, tasksCollection);
  taskSelection(tasksCollection);
  taskStatus(tasksCollection);
};

taskInput.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    tasksCollection.addTask(taskInput.value);
    uiUtils.updateTasksList(tasksCollection.tasksList, tasksCollection);
    taskInput.value = '';
    taskSelection(tasksCollection);
    taskStatus(tasksCollection);
  }
});

uiUtils.updateTasksList(tasksCollection.tasksList, tasksCollection);
taskSelection(tasksCollection);
taskStatus(tasksCollection);
