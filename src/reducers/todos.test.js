import todos from './todos';

describe('reducers', () => {
  it('should handle add todo', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        title: 'test title 1'
      })
    ).toEqual([
      {
        id: 1,
        title: 'test title 1'
      }
    ]);

    expect(
      todos(
        [
          {
            id: 1,
            title: 'test title 1'
          }
        ],
        {
          type: 'ADD_TODO',
          title: 'test title 2'
        }
      )
    ).toEqual([
      {
        id: 1,
        title: 'test title 1'
      },
      {
        id: 2,
        title: 'test title 2'
      }
    ])
  });

  it('should handle remove todo', () => {
    expect(
      todos(
        [
          {
            id: 1,
            title: 'test title 1'
          },
          {
            id: 2,
            title: 'test title 2'
          }
        ],
        {
          type: 'REMOVE_TODO',
          id: 2
        }
      )
    ).toEqual([
      {
        id: 1,
        title: 'test title 1'
      }
    ])
  });
});