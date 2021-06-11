import React from 'react';

import Header from '../components/header';
import CardGrid from '../components/cardGrid';
import TodoForm from '../components/form';

import './index.scss';

export const Layout = () => (
  <main data-testid="main">
    <Header />
    <CardGrid />
    <TodoForm />
  </main>
);

export default Layout;
