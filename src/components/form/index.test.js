import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import { Form } from './index';

const mockAddTodo = jest.fn();

beforeEach(() => {
  render(<Form addTodo={mockAddTodo} />);
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

  it('resets input on submit', async () => {
    const formSubmit = screen.getByTestId('form-submit');
    const formInput = screen.getByTestId('form-input');
    const testValue = 'input test 1';

    fireEvent.change(formInput, { target: { value: testValue } });
    fireEvent.click(formSubmit);
    expect(formInput.value).toEqual('');
    expect(mockAddTodo).toHaveBeenCalled();
  });

  it('calls dispatch function on submit', () => {
    const formSubmit = screen.getByTestId('form-submit');
    const formInput = screen.getByTestId('form-input');
    const testValue = 'input test 1';

    fireEvent.change(formInput, { target: { value: testValue } });
    fireEvent.click(formSubmit);
    expect(mockAddTodo).toHaveBeenCalled();
  });
});
