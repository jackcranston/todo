import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../card';

import './index.scss';

const CardGrid = ({ todos, globals }) => {
  const { sort, filters } = globals;
  const filterComplete = filters.complete ? 'filter--complete' : '';
  const filterActive = filters.active ? 'filter--active' : '';

  const sortedTodos = () => {
    if (sort === 'ASC') {
      return todos.sort((todoA, todoB) =>
        todoA.title.localeCompare(todoB.title)
      );
    }

    if (sort === 'DSC') {
      return todos.sort((todoA, todoB) =>
        todoB.title.localeCompare(todoA.title)
      );
    }

    return todos;
  };

  return (
    <div
      className={`cardGrid ${filterComplete} ${filterActive}`}
      data-testid="card-grid"
    >
      {sortedTodos().map((todo) => (
        <Card key={todo.id} title={todo.title} id={todo.id} />
      ))}
    </div>
  );
};

CardGrid.defaultProps = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: null,
      title: '',
    })
  ),
  globals: PropTypes.shape({
    sort: '',
    filters: PropTypes.shape({
      active: true,
      complete: true,
    }),
  }),
};

CardGrid.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  globals: PropTypes.shape({
    sort: PropTypes.string,
    filters: PropTypes.shape({
      active: PropTypes.bool,
      complete: PropTypes.bool,
    }),
  }),
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(CardGrid);
