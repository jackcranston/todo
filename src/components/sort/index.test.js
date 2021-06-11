import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Sort } from './index';

const sortProps = {
  sort: 'default',
  sortTodos: jest.fn(),
};

beforeEach(() => {
  render(<Sort {...sortProps}></Sort>);
});

afterEach(cleanup);

describe('sort::rendering', () => {
  it('renders sort elements correctly', () => {
    const sortElements = [
      screen.getByTestId('sort'),
      screen.getByText('Sort by'),
      screen.getByText('Sort'),
      screen.getByText('ASC'),
      screen.getByText('DSC'),
    ];

    sortElements.forEach((sortElement) => {
      expect(sortElement).toBeInTheDocument();
    });
  });
});

describe('sort::functionality', () => {
  it('sets select input correctly and calls dispatch function', () => {
    const selectInput = screen.getByTestId('sort');

    expect(selectInput.value).toEqual('default');
    fireEvent.change(selectInput, { target: { value: 'ASC' } });
    expect(selectInput.value).toEqual('ASC');
    expect(sortProps.sortTodos).toHaveBeenCalled();
  });
});
