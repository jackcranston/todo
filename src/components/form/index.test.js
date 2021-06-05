import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Form from './index';

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

beforeEach(() => {
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

describe('form::functionality', () => {
  it('sets form input value correctly', () => {
    const formInput = screen.getByTestId('form-input');
    const testValue = 'input test 1';

    fireEvent.change(formInput, { target: { value: testValue } });

    expect(formInput.value).toEqual(testValue);
  });
  /*
  it('submits form correctly', async () => {
    const formSubmit = screen.getByTestId('form-submit');
    const formInput = screen.getByTestId('form-input');
    const testValue = 'input test 1';

    fireEvent.change(formInput, { target: { value: testValue } });
    fireEvent.click(formSubmit);
    expect(formInput.value).toEqual('');
    await waitFor(() => screen.getByText(testValue));
  });*/
});
