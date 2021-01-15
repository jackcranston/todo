import React, { Fragment } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import CardGrid from '../components/cardGrid';

import './index.scss';

export const Layout = () => {
  return (
    <Fragment>
      <Header/>
      <CardGrid/>
      <Footer/>
    </Fragment>
  );
};

export default Layout;
