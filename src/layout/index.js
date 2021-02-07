import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import CardGrid from '../components/cardGrid';

import './index.scss';

export const Layout = (props) => {
  const { cards } = props;

  return (
    <>
      <Header />
      <CardGrid cards={cards} />
    </>
  );
};

Layout.defaultProps = {
  cards: PropTypes.arrayOf({
    id: '',
    title: '',
    description: '',
  }),
};

Layout.propTypes = {
  cards: PropTypes.arrayOf({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default Layout;
