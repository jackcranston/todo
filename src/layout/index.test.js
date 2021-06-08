import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import mockStoreData from '../helpers/mockStoreData';

import { Layout } from './index';

beforeEach(() => {
  const mockStore = configureStore([]);
  const store = mockStore(mockStoreData);

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
