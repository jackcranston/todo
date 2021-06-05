import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Filters from './index';

beforeEach(() => {
  const mockStore = configureStore([]);
  const store = mockStore({
    globals: {
      sort: 'ASC',
      filters: {
        active: true,
        complete: true,
      },
    },
    todos: [
      {
        id: 1,
        title: 'test title 1',
      },
      {
        id: 2,
        title: 'test title 1',
      },
      {
        id: 3,
        title: 'test title 1',
      },
    ],
    globals: {
      sort: 'DSC',
      filters: {
        active: true,
        complete: true,
      },
    },
  });

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
