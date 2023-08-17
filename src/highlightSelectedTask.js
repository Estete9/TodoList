const highlightSelection = () => {
  Array.from(document.getElementsByTagName('textarea')).forEach((textarea) => {
    textarea.addEventListener('focus', (e) => {
      const listItem = e.target.parentNode;
      const dragBtn = listItem.querySelector('#drag-btn');
      const deleteBtn = listItem.querySelector('#delete-btn');
      dragBtn.classList.remove('show');
      deleteBtn.classList.add('show');
      listItem.classList.add('selected');
    });

    textarea.addEventListener('blur', (e) => {
      const listItem = e.target.parentNode;
      const dragBtn = listItem.querySelector('#drag-btn');
      const deleteBtn = listItem.querySelector('#delete-btn');
      dragBtn.classList.add('show');
      deleteBtn.classList.remove('show');
      listItem.classList.remove('selected');
    });
  });
};

export default highlightSelection;
