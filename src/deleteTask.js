import makeIndex from './makeIndex.js';

const deleteTask = (index, taskList) => {
  // locate the index of the deleted task
  for (let i = 0; i < taskList.length; i += 1) {
    // remove task and end loop
    if (i + 1 === index) {
      taskList.splice(i, 1);
      break;
    }
  }
  // update array's index
  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i] = makeIndex(taskList);
  }

  return taskList;
};

export default deleteTask;
