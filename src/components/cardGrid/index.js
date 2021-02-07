import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card';

import './index.scss';

const CardGrid = (props) => {
  const { cards } = props;

  return (
    <div className="CardGrid" data-testid="card-grid">
      {cards.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

CardGrid.defaultProps = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: null,
      title: '',
      description: '',
    })
  ),
};

CardGrid.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default CardGrid;
