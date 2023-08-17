const highlightSelection = () => {
  Array.from(document.getElementsByTagName('textarea')).forEach((textarea) => {
    textarea.addEventListener('focus', (e) => {
      const listItem = e.target.closest('li');
      listItem.classList.add('selected');
    });

    textarea.addEventListener('blur', (e) => {
      const listItem = e.target.closest('li');
      listItem.classList.remove('selected');
    });
  });
};

export default highlightSelection;
