import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Card from './index';

beforeEach(() => {
  const mockStore = configureStore([]);
  const store = mockStore({
    todos: [{
      id: 1,
      title: 'test title 1',
    }],
  });

  render(
    <Provider store={store}>
      <Card title={store.getState().todos[0].title} />
    </Provider>
  );
});

afterEach(cleanup);

describe('card::rendering', () => {
  it('renders element correctly', () => {
    const card = screen.getByTestId('card');
    expect(card).toBeTruthy();
  });

  it('renders title correctly', () => {
    const titleText = screen.getByTestId('card-title');
    expect(titleText).toBeTruthy();
    expect(titleText).toHaveTextContent('test title 1');
  });

  it('renders remove button correctly', () => {
    const removeButton = screen.getByTestId('card-remove');
    expect(removeButton).toBeTruthy();
  });
});
