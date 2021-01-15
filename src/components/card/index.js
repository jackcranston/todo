import React from 'react';

import './index.scss';

const Card = (props) => {
  const { title, description } = props;

  return (
    <div className="Card">
      <div className="Card__title">{ title }</div>
      <div className="Card__description">{ description }</div>
    </div>
  )
};

export default Card;
