import CrudUtil from '../src/crudFunctions.js';
import localStorageMock from '../__mocks__/localStorageMock.js';

jest.mock('../__mocks__/localStorageMock.js');

describe('tasks list that can', () => {
  beforeEach(() => {
    global.localStorage = localStorageMock;
  });

  it('create and add task to the list', () => {
    localStorage.getItem.mockReturnValueOnce(JSON.stringify([]));
    const utils = new CrudUtil();
    const initialListLength = utils.tasksList.length;
    utils.addTask('test task', utils);
    expect(utils.tasksList.length).toBe(initialListLength + 1);
  });
  // HERE GOES THE SECOND TEST
});
