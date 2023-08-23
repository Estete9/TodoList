import CrudUtil from '../src/crudFunctions.js';

describe('add a task element to the list of tasks', () => {
  const utils = new CrudUtil();
  utils.tasksList = [];
  it('create task', () => {
    const initialTasksLength = utils.tasksList.length;
    expect(utils.tasksList.length).toBe(initialTasksLength + 1);
  });
});
