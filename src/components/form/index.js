import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';

const Form = ({ id, addTodo }) => {
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
      <label htmlFor={`${id}-input`}>
        <span className="sr-only">Add new task</span>
        <input
          className="form__input"
          id={`${id}-input`}
          type="text"
          value={inputValue}
          placeholder="Add new task"
          onChange={handleInputChange}
          data-testid="form-input"
        />
      </label>
      <button
        className="form__submit"
        id={`${id}-submit`}
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
  id: 'form',
  addTodo: () => {},
};

Form.propTypes = {
  id: PropTypes.string,
  addTodo: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (title) => dispatch({ type: 'ADD_TODO', title }),
});

export default connect(null, mapDispatchToProps)(Form);
