import * as React from 'react';
import { render } from 'react-dom';

import App from './App';

describe('<App />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });
});
