import CrudFunctions from '../src/crudFunctions.js';
import localStorageMock from '../__mocks__/localStorageMock.js';
import changeStatusMock from '../__mocks__/changeStatus.js';

jest.mock('../__mocks__/localStorageMock.js');

describe('task status changes', () => {
  beforeEach(() => {
    global.localStorage = localStorageMock;
  });
  it('changed', () => {
    // arrange
    const tasklist = [
      {
        description: 'task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'task 2',
        completed: false,
        index: 2,
      },
    ];

    const comparativeTask = { description: 'task 1', completed: true, index: 1 };

    localStorage.getItem.mockReturnValueOnce(JSON.stringify(tasklist));
    const newCollection = new CrudFunctions();
    changeStatusMock(newCollection, comparativeTask);
    expect(newCollection.tasksList[0].completed).toBe(comparativeTask.completed);
  });
});
