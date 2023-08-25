import crudFunctions from '../src/crudFunctions.js';
import clearCompleted from '../src/clearCompleted.js';
import localStorageMock from '../__mocks__/localStorageMock.js';

jest.mock('../__mocks__/localStorageMock.js');


describe('test that all completed tasks', () => {
    beforeEach(() => {
        global.localStorage = localStorageMock;
    });

    it('are cleared.', () => {
        const tasklist = [
            {
                description: 'task 1',
                completed: true,
                index: 1,
              },
            {
                description: 'task 2',
                completed: false,
                index: 2,
              }
        ];

        localStorage.getItem.mockReturnValueOnce(JSON.stringify(tasklist));
        const newCollection = new crudFunctions();
        const taskCompleted = newCollection.tasksList.length;
        clearCompleted(newCollection);
        expect(newCollection.tasksList.length).toBe(taskCompleted - 1);
    });

});