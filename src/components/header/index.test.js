import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Header from './index';

beforeEach(() => {
  render(<Header text="To do..." />);
});

afterEach(cleanup);

describe('header::rendering', () => {
  it('renders element correctly', () => {
    const headerText = screen.getByTestId('header');

    expect(headerText).toBeTruthy();
  });
  /*
  it('renders title correctly', () => {
    const headerText = screen.getByTestId('header');
    
    expect(headerText).toHaveTextContent('To do...');
  });*/
});
