import React from 'react';
import { render, screen } from '@testing-library/react';

import List from './List';

describe('list component', () => {
  test('does not render when no collection provided', () => {
    const { results } = render(<List />);
    expect(results).toBeUndefined();
  });

  test('renders a list of items when collection provided', () => {
    const collection = [{ text: 'first' }, { text: 'second' }];
    const { getByText } = render(<List collection={collection} />);

    expect(getByText('first', { exact: false })).toHaveTextContent('first');
    expect(getByText('second', { exact: false })).toHaveTextContent('second');
  });
});
