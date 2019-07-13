import { ReactGithubGist } from './ReactGithubGist';
import { render } from '@testing-library/react';
import * as React from 'react';

test('<ReactGithubGist>', () => {
  // Mock document.head.appendChild()
  const mockAppendChild = ((document.head as any).appendChild = jest.fn());

  // Render
  const { getByText } = render(
    <ReactGithubGist gist="user/gist" file="a.md" />
  );

  // Mock callback
  // @ts-ignore
  window.gistusergist({ stylesheet: 'stylesheet.css', div: 'Hello World' });

  // Validate mock calls
  expect(mockAppendChild).toHaveBeenCalledTimes(2);
  expect(mockAppendChild.mock.calls[0][0].tagName).toBe('SCRIPT');
  expect(mockAppendChild.mock.calls[0][0].src).toBe(
    'https://gist.github.com/user/gist.json?callback=gistusergist&file=a.md'
  );
  expect(mockAppendChild.mock.calls[1][0].tagName).toBe('LINK');
  expect(mockAppendChild.mock.calls[1][0].href.endsWith('stylesheet.css')).toBe(
    true
  );

  // Validate content has rendered
  getByText('Hello World');
});
