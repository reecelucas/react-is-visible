import * as React from 'react';
import Box from '../Box/Box';
import { SimpleImage, Placeholder } from '../Img/Img';
import IsVisible from 'react-is-visible';

export default class extends React.Component<{}, {}> {
  render() {
    return (
      <main className="container">
        <div style={{ height: '2000px' }} />

        <h2>Simplest Use Cases</h2>

        <IsVisible>
          {({ isVisible, elementRef }) => (
            <Box isVisible={isVisible} reference={elementRef} />
          )}
        </IsVisible>

        <IsVisible once={true}>
          {({ isVisible, elementRef }) => (
            <Box isVisible={isVisible} reference={elementRef} />
          )}
        </IsVisible>

        <IsVisible isVisible={true}>
          {({ isVisible, elementRef }) => (
            <Box isVisible={isVisible} reference={elementRef} />
          )}
        </IsVisible>

        <h2>Custom IntersectionObserver API Options</h2>

        <IsVisible threshold={0.5}>
          {({ isVisible, elementRef }) => (
            <Box isVisible={isVisible} reference={elementRef} />
          )}
        </IsVisible>

        <IsVisible root="test-root">
          {({ isVisible, elementRef }) => (
            <Box isVisible={isVisible} reference={elementRef} />
          )}
        </IsVisible>

        <IsVisible rootMargin="300px">
          {({ isVisible, elementRef }) => (
            <Box isVisible={isVisible} reference={elementRef} />
          )}
        </IsVisible>

        <h2>Lazy-load Use Cases</h2>

        {/* once must be true for lazy-loading */}
        <IsVisible once={true} threshold={0.5}>
          {({ isVisible, elementRef }) =>
            isVisible ? (
              <SimpleImage src="https://picsum.photos/600/336?image=11" />
            ) : (
              <Placeholder reference={elementRef} />
            )
          }
        </IsVisible>

        <div style={{ height: '2000px' }} />
      </main>
    );
  }
}
