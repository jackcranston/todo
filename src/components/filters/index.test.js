import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import mockStoreData from '../../helpers/mockStoreData';

import Filters from './index';

beforeEach(() => {
  const mockStore = configureStore([]);
  const store = mockStore(mockStoreData);

  render(
    <Provider store={store}>
      <Filters />
    </Provider>
  );
});

afterEach(cleanup);

describe('filters::rendering', () => {
  it('renders elements correctly', () => {
    const filterElements = [
      screen.getByTestId('filters'),
      screen.getByText('Active'),
      screen.getByTestId('filter-active'),
      screen.getByText('Complete'),
      screen.getByTestId('filter-complete'),
    ];

    filterElements.forEach((filterElement) => {
      expect(filterElement).toBeInTheDocument();
    });
  });
});

/**
 * TODOS: test inputs, make sure they work straight away
 *
 * we might have an issue where we are testing that the input is working
 * and the component is rendering properly based on state, but we don't know
 * if these things are working together 100%. We need to test if change the input
 * that the right outcome happens after this. But this seems hard to do with async
 */
