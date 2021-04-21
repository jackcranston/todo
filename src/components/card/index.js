import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faPen, faSave } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const Card = ({ id, title, completed, updateTodo, removeTodo, completeTodo }) => {
  const [state, setState] = useState({
    inputValue: title,
    editing: false
  });
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), [state.editing]);

  const handleInputChange = (event) => {
    setState({
      ...state,
      inputValue: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTodo(id, state.inputValue);
    setState({
      ...state,
      editing: !state.editing
    })
  };

  const toggleEditable = () => {
    setState({
      ...state,
      editing: !state.editing
    })
  }

  const classes = [
    'card',
    !state.editing ? '' : 'card--editing',
    !completed ? '' : 'card--complete'
  ]

  return (
    <div className={classes.join(' ')} id={`card-${id}`} data-testid="card">
      <form className="card__form" data-testid="card-form" onSubmit={handleSubmit}>
        <label className="card__label" htmlFor={`card-input-${id}`} data-testid="card-label">
          <span className="card__title">Edit todo</span>
          <input
            className="card__input"
            id={`card-input-${id}`}
            ref={inputRef}
            type="text"
            value={state.inputValue}
            onChange={handleInputChange}
            data-testid="card-input"
            disabled={!state.editing}
          />
        </label>
        <button className="card__button card__button--submit" data-testid="card-submit" type="submit">
          <span className="sr-only">Save</span>
          <FontAwesomeIcon icon={faSave} />
        </button>
      </form>
      <button className="card__button card__button--edit" type="button" data-testid="card-edit" onClick={toggleEditable}>
        <span className="sr-only">Edit</span>
        <FontAwesomeIcon icon={faPen} />
      </button>
      <button className="card__button card__button--remove" type="button" onClick={() => removeTodo(id)} data-testid="card-remove">
        <span className="sr-only">Remove</span>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <button className="card__button card__button--complete" type="button" onClick={() => completeTodo(id)} data-testid="card-complete">
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
