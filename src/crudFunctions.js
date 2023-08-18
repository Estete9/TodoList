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

  addTask = (taskDescription, tasksCollection) => {
    const localData = localStorage.getItem('tasksStorage');

    let local = [];

    try {
      local = JSON.parse(localData);
      if (local === null) local = [];
    } catch (error) {
      console.error(`local storage is empty with error: ${error}`);
      local = [];
    }

    this.tasksList = local;
    const task = new Task(taskDescription, this.makeIndex(this.tasksList));

    // push task to array and add to local storage
    this.tasksList.push(task);
    localStorage.setItem('tasksStorage', JSON.stringify(this.tasksList));

    updateUI(this.tasksList, tasksCollection);
  };

  deleteTask = (task, tasksCollection) => {
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

    // locate the index of the deleted task with the eventId
    const index = task.id;

    // remove the element at index - 1 (-1 to match array index)
    this.tasksList.splice(index - 1, 1);

    // update array's index and saves to local storage
    for (let i = 0; i < this.tasksList.length; i += 1) {
      this.tasksList[i].index = i + 1;
    }

    localStorage.setItem('tasksStorage', JSON.stringify(this.tasksList));

    updateUI(this.tasksList, tasksCollection);
  };

  updateTask = (task) => {
    // save changes to task, update task in the array and save to local storage
    const updatedTask = new Task(task.value, task.id);

    this.tasksList[task.id - 1] = updatedTask;

    localStorage.setItem('tasksStorage', JSON.stringify(this.tasksList));
  };
}
