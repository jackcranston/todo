const addTodo = (title) => ({
  type: 'ADD_TODO',
  title,
});

const updateTodo = (id, title) => ({
  type: 'UPDATE_TODO',
  id,
  title
});

const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id
});

const completeTodo = (id) => ({
  type: 'COMPLETE_TODO',
  id
})

export { addTodo, updateTodo, removeTodo, completeTodo };
