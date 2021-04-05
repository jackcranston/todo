let id = 0;

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      id += 1;

      return [
        ...state,
        {
          id,
          title: action.title,
        },
      ];
    case 'REMOVE_TODO':
      return state.filter((todo) => action.id !== todo.id)
    default:
      return state;
  }
};

export default todos;
