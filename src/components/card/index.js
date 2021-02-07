import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Card = (props) => {
  const { id, title, description } = props;

  return (
    <div className="Card" id={id} data-testid="card">
      <h2 className="Card__title" data-testid="card-title">
        {title}
      </h2>
      <div className="Card__description" data-testid="card-description">
        {description}
      </div>
    </div>
  );
};

Card.defaultProps = {
  id: null,
  title: '',
  description: '',
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
