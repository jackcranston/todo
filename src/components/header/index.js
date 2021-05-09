import React from 'react';

import Filters from '../filters';
import Sort from '../sort';

import './index.scss';

const Header = () => (
  <header className="header" data-testid="header">
    <Filters />
    <Sort />
  </header>
);

export default Header;
