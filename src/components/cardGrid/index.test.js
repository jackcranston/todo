import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import CardGrid from './index';

const cards = [
  {
    id: 1,
    title: 'test title 1',
    description: 'test description 1',
  },
  {
    id: 2,
    title: 'test title 2',
    description: 'test description 2',
  },
  {
    id: 3,
    title: 'test title 3',
    description: 'test description 3',
  },
];

beforeEach(() => {
  render(<CardGrid cards={cards} />);
});

afterEach(cleanup);

describe('cardgrid::rendering', () => {
  it('renders element correctly', () => {
    const cardGrid = screen.getByTestId('card-grid');
    expect(cardGrid).toBeTruthy();
  });

  it('renders correct number of cards', async () => {
    const cardElements = await screen.findAllByTestId('card');
    expect(cardElements).toHaveLength(3);
  });
});
