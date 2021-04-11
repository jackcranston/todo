import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faPen } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const Card = (props) => {
  const { id, title, completed, updateTodo, removeTodo, completeTodo } = props;
  const [inputValue, setValue] = useState(title);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTodo(id, inputValue);
  };

  const classes = [
    'card',
    !completed ? '' : 'card--complete'
  ]

  return (
    <div className={classes.join(' ')} id={`card-${id}`} data-testid="card">
      <form className="card__form" data-testid="card-form" onSubmit={handleSubmit}>
        <label className="card__label" htmlFor={`card-input-${id}`} data-testid="card-label">
          {title}
          <input className="card__input" id={`card-input-${id}`} value={inputValue} onChange={handleInputChange} data-testid="card-input" />
          <button className="card__submit" data-testid="card-submit" type="submit">Save changes</button>
        </label>
      </form>
      <button className="card__button" type="button" data-testid="card-edit">
        <span className="sr-only">Edit</span>
        <FontAwesomeIcon icon={faPen} />
      </button>
      <button className="card__button" type="button" onClick={() => removeTodo(id)} data-testid="card-remove">
        <span className="sr-only">Remove</span>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <button className="card__button" type="button" onClick={() => completeTodo(id)} data-testid="card-complete">
        <span className="sr-only">Complete</span>
        <FontAwesomeIcon icon={faCheck} />
      </button>
    </div>
  );
};

Card.defaultProps = {
  id: null,
  title: '',
  completed: false,
  updateTodo: () => {},
  removeTodo: () => {},
  completeTodo: () => {}
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  completed: PropTypes.bool,
  updateTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  completeTodo: PropTypes.func
};

const mapStateToProps = (state, { id }) => state.todos.find((todo) => todo.id === id);

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (id, title) => dispatch({ type: 'UPDATE_TODO', id, title }),
  removeTodo: (id) => dispatch({ type: 'REMOVE_TODO', id }),
  completeTodo: (id) => dispatch({ type: 'COMPLETE_TODO', id})
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
