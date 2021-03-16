import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../card';

import './index.scss';

const CardGrid = ({ todos }) => (
  <div className="CardGrid" data-testid="card-grid">
    {todos.map((todo) => (
      <Card key={todo.id} title={todo.title} />
    ))}
  </div>
);

CardGrid.defaultProps = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: null,
      title: '',
    })
  ),
};

CardGrid.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(CardGrid);
