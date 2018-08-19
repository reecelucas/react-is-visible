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
            <Box isVisible={isVisible} reference={elementRef}>
              <div>
                IsVisible: {isVisible ? 'true' : 'false'}
                <br />
                once: false
                <br />
                theshold: 0<br />
                root: null
                <br />
                rootMargin: '0px 0px 0px 0px'
              </div>
            </Box>
          )}
        </IsVisible>

        <IsVisible once={true}>
          {({ isVisible, elementRef }) => (
            <Box isVisible={isVisible} reference={elementRef}>
              <div>
                IsVisible: {isVisible ? 'true' : 'false'}
                <br />
                once: true
                <br />
                theshold: 0<br />
                root: null
                <br />
                rootMargin: '0px 0px 0px 0px'
              </div>
            </Box>
          )}
        </IsVisible>

        <IsVisible isVisible={true}>
          {({ isVisible, elementRef }) => (
            <Box isVisible={isVisible} reference={elementRef}>
              <div>
                IsVisible: {isVisible ? 'true' : 'false'}
                <br />
                once: false
                <br />
                theshold: 0<br />
                root: null
                <br />
                rootMargin: '0px 0px 0px 0px'
              </div>
            </Box>
          )}
        </IsVisible>

        <h2>Custom IntersectionObserver API Options</h2>

        <IsVisible threshold={0.5}>
          {({ isVisible, elementRef }) => (
            <Box isVisible={isVisible} reference={elementRef}>
              <div>
                IsVisible: {isVisible ? 'true' : 'false'}
                <br />
                once: false
                <br />
                theshold: 0.5
                <br />
                root: null
                <br />
                rootMargin: '0px 0px 0px 0px'
              </div>
            </Box>
          )}
        </IsVisible>

        <div id="test-root" className="scrollable-div">
          <div style={{ height: '1000px' }} />

          <IsVisible root="test-root">
            {({ isVisible, elementRef }) => (
              <Box isVisible={isVisible} reference={elementRef}>
                <div>
                  IsVisible: {isVisible ? 'true' : 'false'}
                  <br />
                  once: false
                  <br />
                  theshold: 0<br />
                  root: 'test-root'
                  <br />
                  rootMargin: '0px 0px 0px 0px'
                </div>
              </Box>
            )}
          </IsVisible>

          <div style={{ height: '1000px' }} />
        </div>

        <IsVisible rootMargin="300px">
          {({ isVisible, elementRef }) => (
            <Box isVisible={isVisible} reference={elementRef}>
              <div>
                IsVisible: {isVisible ? 'true' : 'false'}
                <br />
                once: false
                <br />
                theshold: 0<br />
                root: null
                <br />
                rootMargin: '300px'
              </div>
            </Box>
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
