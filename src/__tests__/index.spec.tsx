import * as React from 'react';
import IsVisible from '../index';
import { render, cleanup } from 'react-testing-library';

import 'jest-dom/extend-expect';
import 'intersection-observer';

describe('IsVisible', () => {
  beforeEach(() => {
    // Suppress console errors when intentially throwning an error
    spyOn(console, 'error');
  });

  afterEach(cleanup);

  describe('children', () => {
    test('should call children(), passing correct arguments', () => {
      const children = jest.fn(({ elementRef }) => <div ref={elementRef} />);
      render(<IsVisible>{children}</IsVisible>);

      expect(children).toHaveBeenCalled();
      expect(children).toHaveBeenCalledWith(
        expect.objectContaining({
          isVisible: false
        })
      );
    });

    test('should throw if elementRef is not bound to a child DOM node', () => {
      const children = jest.fn(() => <div />);
      expect(() => render(<IsVisible>{children}</IsVisible>)).toThrow();
    });
  });

  describe('state', () => {
    const children = jest.fn(({ elementRef, isVisible }) => (
      <div data-testid="box" ref={elementRef}>
        {isVisible ? 'true' : 'false'}
      </div>
    ));

    test('should initialise isVisible to false', () => {
      const { getByTestId } = render(<IsVisible>{children}</IsVisible>);
      expect(getByTestId('box')).toHaveTextContent('false');
    });

    test('should allow the value of isVisible to be controlled by a prop', () => {
      const { getByTestId } = render(
        <IsVisible isVisible={true}>{children}</IsVisible>
      );
      expect(getByTestId('box')).toHaveTextContent('true');
    });
  });
});
