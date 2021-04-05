const addTodo = (title) => ({
  type: 'ADD_TODO',
  payload: {
    title,
  },
});

const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  payload: {
    id,
  },
});

export default { addTodo, removeTodo };
