import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import mockStoreData from '../../helpers/mockStoreData';

import Card from './index';

beforeEach(() => {
  const mockStore = configureStore([]);
  const store = mockStore(mockStoreData);
  const todo = store.getState().todos[0];

  render(
    <Provider store={store}>
      <Card {...todo} />;
    </Provider>
  );
});

afterEach(cleanup);

describe('card::rendering', () => {
  it('renders element correctly', async () => {
    const card = await screen.getByTestId('card');

    expect(card).toBeTruthy();
  });

  it('renders form elements correctly', () => {
    const form = screen.getByTestId('card-form');
    const input = screen.getByTestId('card-input');
    const label = screen.getByTestId('card-label');
    const submitButton = screen.getByTestId('card-submit');

    expect(form).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('test title 1');
    expect(input.disabled).toBe(true);
  });

  it('renders ui buttons correctly', () => {
    const editButton = screen.getByTestId('card-edit');
    const removeButton = screen.getByTestId('card-remove');
    const completeButton = screen.getByTestId('card-complete');

    expect(editButton).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
    expect(completeButton).toBeInTheDocument();
  });

  it('renders with complete class', async () => {
    const card = screen.getByTestId('card');

    expect(card).toHaveClass('card--complete');
  });
});

describe('card::functionality', () => {
  it('enables the input to be edited when user clicks edit button', () => {
    const card = screen.getByTestId('card');
    const editButton = screen.getByTestId('card-edit');
    const input = screen.getByTestId('card-input');

    userEvent.click(editButton);

    expect(card).toHaveClass('card--editing');
    expect(input.disabled).toBe(false);
  });

  it('disables the input when user clicks save button', () => {
    const editButton = screen.getByTestId('card-edit');
    const submitButton = screen.getByTestId('card-submit');
    const input = screen.getByTestId('card-input');

    userEvent.click(editButton);
    userEvent.click(submitButton);

    expect(input.disabled).toBe(true);
  });

  it('updates todo when user clicks save button', () => {
    const editButton = screen.getByTestId('card-edit');
    const submitButton = screen.getByTestId('card-submit');
    const input = screen.getByTestId('card-input');
    const inputText = 'updated title 1';

    userEvent.click(editButton);
    userEvent.clear(input);
    userEvent.type(input, inputText);
    userEvent.click(submitButton);

    expect(input.value).toBe(inputText);
  });

  it('removes todo when user clicks remove button', async () => {
    const card = screen.getByTestId('card');
    const removeButton = screen.getByTestId('card-remove');

    expect(card).toBeInTheDocument();
    userEvent.click(removeButton);

    // expect(card).not.toBeInTheDocument(); NEED TO VERIFY THAT IT'S NOT LONGER IN DOCUMENT
  });

  /**
   * TODO: test that clicking buttons runs the related function
   */
});
