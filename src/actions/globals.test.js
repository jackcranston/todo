import * as actions from './globals';

describe('globals actions', () => {
  it('creates an action to filter todos', () => {
    const filters = {
      active: false,
      complete: false,
    };
    const expectedAction = {
      type: 'FILTER_TODOS',
      filters: {
        active: false,
        complete: false,
      },
    };
    expect(actions.filterTodos(filters)).toEqual(expectedAction);
  });

  it('creates an action to sort todos', () => {
    const sort = 'DSC';
    const expectedAction = {
      type: 'SORT_TODOS',
      sort: 'DSC',
    };
    expect(actions.sortTodos(sort)).toEqual(expectedAction);
  });
});
