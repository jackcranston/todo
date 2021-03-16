import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Input from './index';

beforeEach(() => {
  const mockStore = configureStore([]);
  const store = mockStore({
    todos: [],
  });

  render(
    <Provider store={store}>
      <Input />
    </Provider>
  );
});

afterEach(cleanup);

describe('input::rendering', () => {
  it('renders element correctly', () => {
    const input = screen.getByTestId('input');
    expect(input).toBeTruthy();
  });
});
