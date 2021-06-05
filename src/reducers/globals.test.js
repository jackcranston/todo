import globals from './globals';

describe('globals reducers filters', () => {
  it('sets the active filter correctly', () => {
    expect(
      globals(
        {
          sort: 'ASC',
          filters: {
            active: true,
            complete: true,
          },
        },
        {
          type: 'FILTER_TODOS',
          filters: {
            active: false,
            complete: true,
          },
        }
      )
    ).toEqual({
      sort: 'ASC',
      filters: {
        active: false,
        complete: true,
      },
    });
  });

  it('sets the complete filter correctly', () => {
    expect(
      globals(
        {
          sort: 'ASC',
          filters: {
            active: true,
            complete: true,
          },
        },
        {
          type: 'FILTER_TODOS',
          filters: {
            active: true,
            complete: false,
          },
        }
      )
    ).toEqual({
      sort: 'ASC',
      filters: {
        active: true,
        complete: false,
      },
    });
  });

  it('sets both filters correctly', () => {
    expect(
      globals(
        {
          sort: 'ASC',
          filters: {
            active: false,
            complete: false,
          },
        },
        {
          type: 'FILTER_TODOS',
          filters: {
            active: true,
            complete: true,
          },
        }
      )
    ).toEqual({
      sort: 'ASC',
      filters: {
        active: true,
        complete: true,
      },
    });
  });
});

describe('globals reducers sort', () => {
  it('sets the sort correctly', () => {
    expect(
      globals(
        {
          sort: 'ASC',
          filter: {
            active: true,
            complete: true,
          },
        },
        {
          type: 'SORT_TODOS',
          sort: 'DSC',
        }
      )
    ).toEqual({
      sort: 'DSC',
      filter: {
        active: true,
        complete: true,
      },
    });
  });
});
