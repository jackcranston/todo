import todos from './todos';

describe('reducers', () => {
  it('should handle add todo', () => {
    expect(
      todos(
        [],
        {
          type: 'ADD_TODO',
          title: 'test title 1'
        }
      )
    ).toEqual([
      {
        id: 1,
        title: 'test title 1',
        completed: false
      }
    ]);

    expect(
      todos(
        [
          {
            id: 1,
            title: 'test title 1',
            completed: true
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
        title: 'test title 1',
        completed: true
      },
      {
        id: 2,
        title: 'test title 2',
        completed: false
      }
    ])
  });

  it('should handle update todo', () => {
    expect(
      todos(
        [
          {
            id: 1,
            title: 'test title 1',
            completed: false
          },
          {
            id: 2,
            title: 'test title 2',
            completed: true
          }
        ],
        {
          type: 'UPDATE_TODO',
          id: 1,
          title: 'new test title 1'
        }
      )
    ).toEqual([
      {
        id: 1,
        title: 'new test title 1',
        completed: false
      },
      {
        id: 2,
        title: 'test title 2',
        completed: true
      }
    ])
  });

  it('should handle remove todo', () => {
    expect(
      todos(
        [
          {
            id: 1,
            title: 'test title 1',
            completed: false
          },
          {
            id: 2,
            title: 'test title 2',
            completed: true
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
        title: 'test title 1',
        completed: false
      }
    ])
  });

  it('should handle complete todo', () => {
    expect(
      todos(
        [
          {
            id: 1,
            title: 'test title 1',
            completed: false,
          },
          {
            id: 2,
            title: 'test title 2',
            completed: false,
          }
        ],
        {
          type: 'COMPLETE_TODO',
          id: 2
        }
      )
    ).toEqual([
      {
        id: 1,
        title: 'test title 1',
        completed: false
      },
      {
        id: 2,
        title: 'test title 2',
        completed: true
      }
    ])
  })
});