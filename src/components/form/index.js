import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Form = ({ id, addTodo }) => {
  const [inputValue, setValue] = useState('');

  const handleSubmit = () => {
    addTodo(inputValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className="form" data-testid="form">
      <label htmlFor="todo-form-input">
        Task title
        <input
          className="form__input"
          id={`${id}-input`}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          data-testid="form-input"
        />
      </label>
      <button
        className="form__submit"
        id={`${id}-submit`}
        type="button"
        onClick={handleSubmit}
        data-testid="form-submit"
      >
        Add Task
      </button>
    </form>
  );
};

Form.defaultProps = {
  id: 'form',
  addTodo: () => { },
};

Form.propTypes = {
  id: PropTypes.string,
  addTodo: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (title) => dispatch({ type: 'ADD_TODO', title }),
});

export default connect(null, mapDispatchToProps)(Form);
