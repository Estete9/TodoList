import CrudFunctions from '../src/crudFunctions.js';
import localStorageMock from '../__mocks__/localStorageMock.js';

jest.mock('../__mocks__/localStorageMock.js');

describe('test edit task', () => {
  beforeEach(() => {
    global.localStorage = localStorageMock;
  });

  it('edit.', () => {
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

    const initialTask = { value: 'task 1 edited', completed: false, id: 1 };

    const initialTaskComparative = { description: 'task 1 edited', completed: false, index: 1 };

    localStorage.getItem.mockReturnValueOnce(JSON.stringify(tasklist));

    const newCollection = new CrudFunctions();

    newCollection.updateTask(initialTask);

    expect(newCollection.tasksList[0].description).toStrictEqual(
      initialTaskComparative.description,
    );
  });
});
