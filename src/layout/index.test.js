import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { Layout } from './index';

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
    todos: [],
  });

  render(
    <Provider store={store}>
      <Layout />
    </Provider>
  );
});

afterEach(cleanup);

describe('layout::rendering', () => {
  it('renders elements correctly', () => {
    const main = screen.getByTestId('main');

    expect(main).toBeTruthy();
  });
});
