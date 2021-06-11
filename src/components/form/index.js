import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';

export const Form = ({ addTodo }) => {
  const [inputValue, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(inputValue);
    setValue('');
  };

  return (
    <form className="form" data-testid="form" onSubmit={handleSubmit}>
      <label htmlFor="todo-form-input">
        <span className="sr-only">Add new task</span>
        <input
          className="form__input"
          id="todo-form-input"
          type="text"
          value={inputValue}
          placeholder="Add new task"
          onChange={handleInputChange}
          data-testid="form-input"
        />
      </label>
      <button
        className="form__submit"
        id="todo-form-submit"
        type="submit"
        data-testid="form-submit"
        hidden
      >
        Add Task
      </button>
    </form>
  );
};

Form.defaultProps = {
  addTodo: () => {},
};

Form.propTypes = {
  addTodo: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (title) => dispatch({ type: 'ADD_TODO', title }),
});

export default connect(null, mapDispatchToProps)(Form);
