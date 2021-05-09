import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Form from './index';

const mockStore = configureStore([]);
const store = mockStore({
  todos: [],
});
const mockAddTodo = jest.fn(test);

beforeEach(() => {
  render(
    <Provider store={store}>
      <Form addTodo={mockAddTodo} />
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
  it('submits form correctly', () => {
    const formInput = screen.getByTestId('form-input');
    const formSubmit = screen.getByTestId('form-submit');
    const testValue = 'input test 1';

    fireEvent.change(formInput, { target: { value: testValue } });
    fireEvent.click(formSubmit);
    expect(formInput.value).toEqual('');
    expect(mockAddTodo).toHaveBeenCalled();
  });*/
});
