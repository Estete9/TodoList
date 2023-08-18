const updateTaskStatus = (tasksCollection) => {
  Array.from(document.getElementsByClassName('checkbox')).forEach((btn) => {
    btn.addEventListener('mousedown', (event) => {
      const listItem = event.target.parentNode;
      const task = tasksCollection.tasksList[listItem.id - 1];
      const textArea = listItem.querySelector('textarea');
      task.completed = !task.completed;
      if (task.completed) {
        textArea.classList.add('completed');
      } else {
        textArea.classList.remove('completed');
      }
      tasksCollection.updateTask(task);
    });
  });
};

export default updateTaskStatus;
