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
          completed: false
        },
      ];

    case 'UPDATE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return ({
            id: todo.id,
            title: action.title,
            completed: todo.completed
          });
        }
        return todo;
      });

    case 'REMOVE_TODO':
      return state.filter((todo) => action.id !== todo.id);

    case 'COMPLETE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return ({
            id: todo.id,
            title: todo.title,
            completed: !todo.completed
          });
        }
        return todo;
      });

    default:
      return state;
  }
};

export default todos;
