let id = 0;

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: ++id, // eslint-disable-line
          title: action.title,
        },
      ];
    default:
      return state;
  }
};

export default todos;
