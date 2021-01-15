import React from 'react';

import Card from '../card';

import './index.scss';

const CardGrid = (props) => {
  return (
    <div className="CardGrid">
      <Card title="title" description="description"/>
    </div>
  )
};

export default CardGrid;
