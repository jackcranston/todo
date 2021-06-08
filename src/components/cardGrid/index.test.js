import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import mockStoreData from '../../helpers/mockStoreData';

import CardGrid from './index';

beforeEach(() => {
  const mockStore = configureStore([]);
  const store = mockStore(mockStoreData);

  render(
    <Provider store={store}>
      <CardGrid />
    </Provider>
  );
});

afterEach(cleanup);

describe('cardgrid::rendering', () => {
  it('renders element correctly', () => {
    const cardGrid = screen.getByTestId('card-grid');
    expect(cardGrid).toBeInTheDocument();
  });

  it('renders correct number of cards', async () => {
    const cardElements = await screen.findAllByTestId('card');
    expect(cardElements).toHaveLength(3);
  });

  it('renders with correct filter classes', () => {
    const cardGrid = screen.getByTestId('card-grid');
    expect(cardGrid).toHaveClass('filter--active');
    expect(cardGrid).toHaveClass('filter--complete');
  });
});
