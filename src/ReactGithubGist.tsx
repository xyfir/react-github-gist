import * as React from 'react';

export interface ReactGithubGistProps {
  /**
   * username/gist-id
   * @example "MrXyfir/23ae904cf7ec9f399d110196cc3ec113"
   */
  gist: string;
  /**
   * Filename of single file to load from Gist.
   * @example "test.txt"
   */
  file?: string;
}

export function ReactGithubGist({ gist, file }: ReactGithubGistProps) {
  const [content, setContent] = React.useState('');

  // Load content
  React.useEffect(() => {
    const id = `gist${gist.replace('/', '')}`;

    window[id] = (gist: { stylesheet: string; div: string }) => {
      setContent(gist.div.replace(/href=/g, 'target="_blank" href='));

      if (!document.head.innerHTML.includes(gist.stylesheet)) {
        const stylesheet = document.createElement('link');
        stylesheet.href = gist.stylesheet;
        stylesheet.type = 'text/css';
        stylesheet.rel = 'stylesheet';
        document.head.appendChild(stylesheet);
      }

      delete window[id];
    };

    const script = document.createElement('script');
    script.src = `https://gist.github.com/${gist}.json?callback=${id}${
      file ? `&file=${file}` : ''
    }`;
    document.head.appendChild(script);
  }, [gist, file]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
