import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AddTodo = ({ addTodo }) => {
  const [inputValue, setValue] = useState(0);

  const handleTodo = () => {
    addTodo(inputValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form data-testid="input">
      <input
        type="text"
        className="add-todo__input"
        value={inputValue}
        onChange={(event) => handleInputChange(event)}
      />
      <button
        type="button"
        className="add-todo__button"
        onClick={() => handleTodo()}
      >
        Add Todo
      </button>
    </form>
  );
};

AddTodo.defaultProps = {
  addTodo: () => {},
};

AddTodo.propTypes = {
  addTodo: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (title) => dispatch({ type: 'ADD_TODO', title }),
});

export default connect(null, mapDispatchToProps)(AddTodo);
