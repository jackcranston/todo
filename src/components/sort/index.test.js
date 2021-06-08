import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import mockStoreData from '../../helpers/mockStoreData';

import Sort from './index';

beforeEach(() => {
  const mockStore = configureStore([]);
  const store = mockStore(mockStoreData);
  const sortTodos = jest.fn();

  render(
    <Provider store={store}>
      <Sort sortTodos={sortTodos}></Sort>
    </Provider>
  );
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
  it('sort function gets called', () => {
    const selectInput = screen.getByTestId('sort');

    fireEvent.change(selectInput, { target: { value: 'ASC' } });
    expect(selectInput.value).toEqual('ASC');
  });
});
