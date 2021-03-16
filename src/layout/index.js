import React from 'react';

import Header from '../components/header';
import CardGrid from '../components/cardGrid';
import Input from '../components/input';

import './index.scss';

export const Layout = () => (
  <>
    <Header />
    <CardGrid />
    <Input />
  </>
);

export default Layout;
