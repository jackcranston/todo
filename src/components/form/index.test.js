import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Form from './index';

beforeEach(() => {
  const mockStore = configureStore([]);
  const store = mockStore({
    todos: [],
  });

  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
});

afterEach(cleanup);

describe('form::rendering', () => {
  it('renders element correctly', () => {
    const form = screen.getByTestId('form');
    const formInput = screen.getByTestId('form-input');
    const formSubmit = screen.getByTestId('form-submit');

    expect(form).toBeInTheDocument();
    expect(formInput).toBeInTheDocument();
    expect(formSubmit).toBeInTheDocument();
  });
});
