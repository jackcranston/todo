import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Header from './index';

beforeEach(() => {
  const mockStore = configureStore([]);
  const store = mockStore({});

  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
});

afterEach(cleanup);

describe('header::rendering', () => {
  it('renders element correctly', () => {
    const header = screen.getByTestId('header');

    expect(header).toBeTruthy();
  });
});
