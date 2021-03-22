import React from 'react';

import Header from '../components/header';
import CardGrid from '../components/cardGrid';
import Form from '../components/form';

import './index.scss';

export const Layout = () => (
  <main data-testid="main">
    <Header />
    <CardGrid />
    <Form id="todo-form" />
  </main>
);

export default Layout;
