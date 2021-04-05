const addTodo = (title) => ({
  type: 'ADD_TODO',
  title,
});

const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id
});

export { addTodo, removeTodo };
