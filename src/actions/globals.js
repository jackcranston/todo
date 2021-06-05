const filterTodos = (filters) => ({
  type: 'FILTER_TODOS',
  filters,
});

const sortTodos = (sort) => ({
  type: 'SORT_TODOS',
  sort,
});

export { filterTodos, sortTodos };
