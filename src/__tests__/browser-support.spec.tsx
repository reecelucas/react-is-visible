import * as React from 'react';
import IsVisible from '../index';
import { render, cleanup } from 'react-testing-library';

import 'jest-dom/extend-expect';

describe('browser support', () => {
  afterEach(cleanup);

  test('should set isVisible to true if the Intersection Observer API is not supported', () => {
    const children = jest.fn(({ elementRef, isVisible }) => (
      <div data-testid="box" ref={elementRef}>
        {isVisible ? 'true' : 'false'}
      </div>
    ));

    const { getByTestId } = render(<IsVisible>{children}</IsVisible>);
    expect(getByTestId('box')).toHaveTextContent('true');
  });
});
