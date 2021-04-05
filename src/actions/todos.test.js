import * as actions from './todos';

describe('actions', () => {
  it('creates an action to add a todo', () => {

  });

  it('creates an action to remove a todo', () => {
    const id = 1;
    const expectedAction = {
      type: 'REMOVE_TODO',
      id
    }

    expect(actions.removeTodo(id)).toEqual(expectedAction);
  });
});