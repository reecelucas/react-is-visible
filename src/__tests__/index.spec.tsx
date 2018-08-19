import * as React from 'react';
import 'intersection-observer';
import IsVisible from '../index';
import { render, cleanup } from 'react-testing-library';

describe('IsVisible', () => {
  let props: any;
  let renderedIsVisible: any;

  const isVisible = () => {
    if (!renderedIsVisible) {
      const { children, ...rest } = props;
      renderedIsVisible = render(<IsVisible {...rest}>{children}</IsVisible>);
    }

    return renderedIsVisible;
  };

  beforeEach(() => {
    props = {
      inView: undefined,
      root: undefined,
      rootMargin: undefined,
      threshold: undefined
    };
    renderedIsVisible = undefined;
  });

  // Unmount and cleanup DOM & event bindings after the test is finished
  afterEach(cleanup);

  // All tests here
});
