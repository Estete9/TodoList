// create index
const index = (tasksList) => {
  if (tasksList.length <= 0) {
    return 1;
  }
  return tasksList.length + 1;
};

export default index;
