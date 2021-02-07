import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Card from './index';

beforeEach(() => {
  render(<Card title="Task title" description="Task description" />);
});

afterEach(cleanup);

describe('card::rendering', () => {
  it('renders element correctly', () => {
    const card = screen.getByTestId('card');
    expect(card).toBeTruthy();
  });

  it('renders title correctly', () => {
    const titleText = screen.getByTestId('card-title');
    expect(titleText).toHaveTextContent('Task title');
  });

  it('renders description correctly', () => {
    const titleDescription = screen.getByTestId('card-description');
    expect(titleDescription).toHaveTextContent('Task description');
  });
});
