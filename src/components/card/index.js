import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Card = (props) => {
  const { id, title } = props;

  return (
    <div className="Card" id={`card-${id}`} data-testid="card">
      <h2 className="Card__title" data-testid="card-title">
        {title}
      </h2>
    </div>
  );
};

Card.defaultProps = {
  id: null,
  title: '',
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Card;
