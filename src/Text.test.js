import React from 'react';

import { render, screen } from '@testing-library/react';

const Text = ({ text }) => {
  return <div>{text}</div>;
};

describe('Text component', () => {
  test('text', () => {
    render(<Text text='Hello' />);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
