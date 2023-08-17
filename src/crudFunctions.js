import Task from './task.js';
import updateUI from './updateUI.js';

export default class crudFunctions {
  constructor() {
    const localData = localStorage.getItem('tasksStorage');
    let local = [];
    try {
      local = JSON.parse(localData);
      if (local === null) local = [];
    } catch (error) {
      console.warn('local storage is empty');
      local = [];
    }
    this.tasksList = local;
  }

  makeIndex = () => {
    const localData = localStorage.getItem('tasksStorage');
    let local = [];

    try {
      local = JSON.parse(localData);
      if (local === null) local = [];
    } catch (error) {
      console.warn('local storage is empty');
      local = [];
    }
    this.tasksList = local;

    if (this.tasksList.length <= 0) {
      return 1;
    }
    return this.tasksList.length + 1;
  };

  add = (taskDescription) => {
    const localData = localStorage.getItem('tasksStorage');
    let local = [];

    try {
      local = JSON.parse(localData);
      if (local === null) local = [];
    } catch (error) {
      console.warn('local storage is empty');
      local = [];
    }
    this.tasksList = local;
    const task = new Task(taskDescription, this.makeIndex(this.tasksList));
    // push task to array and add to local storage
    this.tasksList.push(task);
    localStorage.setItem('tasksStorage', JSON.stringify(this.tasksList));
    updateUI(this.tasksList);
  };

  deleteTask = (event, index) => {
    const localData = localStorage.getItem('books');
    let local = [];

    try {
      local = JSON.parse(localData);
      if (local === null) local = [];
    } catch (error) {
      console.warn('local storage is empty');
      local = [];
    }
    this.tasksList = local;
    // locate the index of the deleted task
    for (let i = 0; i < this.tasksList.length; i += 1) {
      // remove task and end loop
      if (i + 1 === index) {
        this.tasksList.splice(i, 1);
        break;
      }
    }
    // update array's index and saves to local storage
    for (let i = 0; i < this.tasksList.length; i += 1) {
      this.tasksList[i].index = i + 1;
    }
    localStorage.setItem('tasksStorage', JSON.stringify(this.tasksList));
    updateUI(this.tasksList);
  };

  updateTask = (task) => {
    // save changes to task, update task in the array and save to local storage
    if (task.value !== task.textContent) {
      const updatedTask = new Task(task.value, task.id);
      this.tasksList[task.id - 1] = updatedTask;
      localStorage.setItem('tasksStorage', JSON.stringify(this.tasksList));
    }
  };
}
