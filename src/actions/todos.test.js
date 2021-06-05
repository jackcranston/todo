import * as actions from './todos';

describe('todo actions', () => {
  it('creates an action to add a todo', () => {
    const title = 'test title 1';
    const expectedAction = {
      type: 'ADD_TODO',
      title,
    };
    expect(actions.addTodo(title)).toEqual(expectedAction);
  });

  it('creates an action to edit a todo', () => {
    const id = 1;
    const title = 'test title 1';
    const expectedAction = {
      type: 'UPDATE_TODO',
      id,
      title,
    };
    expect(actions.updateTodo(id, title)).toEqual(expectedAction);
  });

  it('creates an action to remove a todo', () => {
    const id = 1;
    const expectedAction = {
      type: 'REMOVE_TODO',
      id,
    };
    expect(actions.removeTodo(id)).toEqual(expectedAction);
  });

  it('creates an action to complete a todo', () => {
    const id = 1;
    const expectedAction = {
      type: 'COMPLETE_TODO',
      id,
    };
    expect(actions.completeTodo(id)).toEqual(expectedAction);
  });
});
