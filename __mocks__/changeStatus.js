function changeStatusMock(tasksCollection, comparativeTask) {
  tasksCollection.tasksList.forEach((task) => {
    if (task.index === comparativeTask.index) {
      task.completed = !task.completed;
    }
  });
  return tasksCollection;
}

export default changeStatusMock;
