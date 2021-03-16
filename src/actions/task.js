import ADD_TODO from '../constants/actionTypes';

const addTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    title,
  },
});

export default addTodo;
