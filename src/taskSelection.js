const taskSelection = (tasksCollection) => {
  Array.from(document.getElementsByTagName('textarea')).forEach((textarea) => {
    textarea.addEventListener('focus', (event) => {
      const listItem = event.target.parentNode;

      const dragBtn = listItem.querySelector('#drag-btn');

      const deleteBtn = listItem.querySelector('#delete-btn');

      dragBtn.classList.remove('show');

      deleteBtn.classList.add('show');

      listItem.classList.add('selected');

      deleteBtn.addEventListener('mousedown', () => {
        tasksCollection.deleteTask(event.target, tasksCollection);
      });
    });

    textarea.addEventListener('blur', (e) => {
      const listItem = e.target.parentNode;

      const dragBtn = listItem.querySelector('#drag-btn');

      const deleteBtn = listItem.querySelector('#delete-btn');

      dragBtn.classList.add('show');

      deleteBtn.classList.remove('show');

      listItem.classList.remove('selected');

      // update task content
      if (e.target.value !== e.target.textContent) {
        tasksCollection.updateTask(e.target);
      }
    });

    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();

        e.target.blur();
      }
    });
  });
};

export default taskSelection;
