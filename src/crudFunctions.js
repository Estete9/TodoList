import Task from './task.js';

export default class crudFunctions {
  constructor(
    tasksList = JSON.parse(localStorage.getItem('tasksStorage')) || [],
  ) {
    this.tasksList = tasksList;
  }

  makeIndex = () => {
    if (this.tasksList.length <= 0) {
      return 1;
    }

    return this.tasksList.length + 1;
  };

  addTask = (taskDescription) => {
    const task = new Task(taskDescription, this.makeIndex());

    // push task to array and add to local storage
    this.tasksList.push(task);
    localStorage.setItem('tasksStorage', JSON.stringify(this.tasksList));
  };

  deleteTask = (task) => {
    // locate the index of the deleted task with the eventId
    const index = task.id;

    // remove the element at index - 1 (-1 to match array index)
    this.tasksList.splice(index - 1, 1);

    // update array's index and saves to local storage
    this.tasksList.forEach((task, index) => {
      task.index = index + 1;
    });

    localStorage.setItem('tasksStorage', JSON.stringify(this.tasksList));
  };

  updateTask = (task) => {
    // save changes to task, update task in the array and save to local storage
    const updatedTask = new Task(task.value, task.id);
    this.tasksList[task.id - 1] = updatedTask;
    localStorage.setItem('tasksStorage', JSON.stringify(this.tasksList));
  };
}
