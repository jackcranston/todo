const initialState = {
  sort: 'default',
  filters: {
    active: true,
    complete: true,
  },
};

const globals = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT_TODOS':
      return {
        ...state,
        sort: action.sort,
      };

    case 'FILTER_TODOS':
      return {
        ...state,
        filters: {
          ...action.filters,
        },
      };

    default:
      return state;
  }
};

export default globals;
