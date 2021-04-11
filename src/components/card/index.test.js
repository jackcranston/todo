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

  it('renders form elements correctly', () => {
    const form = screen.getByTestId('card-form');
    const editInput = screen.getByTestId('card-input');
    const labelText = screen.getByTestId('card-label');
    const submitButton = screen.getByTestId('card-submit');
    expect(form).toBeTruthy();
    expect(labelText).toBeTruthy();
    expect(labelText).toHaveTextContent('test title 1');
    expect(submitButton).toBeTruthy();
    expect(editInput).toBeTruthy();
  });

  it('renders ui buttons correctly', () => {
    const editButton = screen.getByTestId('card-edit');
    const removeButton = screen.getByTestId('card-remove');
    const completeButton = screen.getByTestId('card-complete');
    expect(editButton).toBeTruthy();
    expect(removeButton).toBeTruthy();
    expect(completeButton).toBeTruthy();

  });
});