import Task from './task.js';
import makeIndex from './makeIndex.js';

const add = (tasksList) => {
  // array of tasksList / shouldn't be null
  // // create index
  // const index = () => {
  //   if (tasksList.length <= 0) {
  //     return 1;
  //   }
  //   return tasksList.length + 1;
  // };
  // create task
  const task = new Task(
    'this is should come from user input?',
    makeIndex(tasksList)
  );
  // push task to array
  tasksList.push(task);
  // save new array in local storage
  localStorage.setItem('tasksStorage', tasksList);
};

export default add;
