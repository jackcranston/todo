import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';

const Card = (props) => {
  const { id, title, removeTodo } = props;

  return (
    <div className="card" id={`card-${id}`} data-testid="card">
      <h2 className="card__title" data-testid="card-title">
        {title}
      </h2>
      <button className="card__remove" data-testid="card-remove" type="button" onClick={() => removeTodo(id)}>Delete</button>
    </div>
  );
};

Card.defaultProps = {
  id: null,
  title: '',
  removeTodo: () => { },
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  removeTodo: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (id) => dispatch({ type: 'REMOVE_TODO', id })
})

export default connect(null, mapDispatchToProps)(Card);
