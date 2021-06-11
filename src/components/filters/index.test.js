import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { Filters } from './index';

const filtersProps = {
  filters: {
    active: true,
    complete: true,
  },
  filterTodos: jest.fn(),
};

beforeEach(() => {
  render(<Filters {...filtersProps} />);
});

afterEach(cleanup);

describe('filters::rendering', () => {
  it('renders elements correctly', () => {
    const filterElements = [
      screen.getByTestId('filters'),
      screen.getByText('Active'),
      screen.getByTestId('filter-active'),
      screen.getByText('Complete'),
      screen.getByTestId('filter-complete'),
    ];

    filterElements.forEach((filterElement) => {
      expect(filterElement).toBeInTheDocument();
    });
  });
});

describe('filters::functionality', () => {
  it('checks active filter checkbox and dispatches function', () => {
    const filterActive = screen.getByTestId('filter-active');

    expect(filterActive.checked).toEqual(true);
    fireEvent.click(filterActive);
    expect(filterActive.checked).toEqual(false);
    expect(filtersProps.filterTodos).toBeCalled();
  });

  it('checks complete filter checkbox and calls dispatch function', () => {
    const filterComplete = screen.getByTestId('filter-complete');

    expect(filterComplete.checked).toEqual(true);
    fireEvent.click(filterComplete);
    expect(filterComplete.checked).toEqual(false);
    expect(filtersProps.filterTodos).toBeCalled();
  });
});
