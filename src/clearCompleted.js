const clearCompleted = (tasksCollection) => {
  const incompleteTasks = tasksCollection.tasksList.filter(
    (task) => !task.completed,
  );
  tasksCollection.tasksList = incompleteTasks;
  localStorage.setItem(
    'tasksStorage',
    JSON.stringify(tasksCollection.tasksList),
  );
};

export default clearCompleted;
