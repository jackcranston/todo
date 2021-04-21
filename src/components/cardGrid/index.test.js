import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import CardGrid from './index';

beforeEach(() => {
  const mockStore = configureStore([]);
  const store = mockStore({
    todos: [
      {
        id: 1,
        title: 'test title 1',
      },
      {
        id: 2,
        title: 'test title 2',
      },
      {
        id: 3,
        title: 'test title 3',
      },
    ],
  });
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
});
