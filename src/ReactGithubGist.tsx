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

export interface ReactGithubGistState {
  content: string;
}

export class ReactGithubGist extends React.Component<
  ReactGithubGistProps,
  ReactGithubGistState
> {
  state: ReactGithubGistState = { content: '' };

  componentDidMount() {
    const { gist, file } = this.props;
    const id = `gist${gist.replace('/', '')}`;

    window[id] = (gist: { stylesheet: string; div: string }) => {
      this.setState({
        content: gist.div.replace(/href=/g, 'target="_blank" href=')
      });

      if (document.head.innerHTML.indexOf(gist.stylesheet) === -1) {
        const stylesheet = document.createElement('link');
        stylesheet.href = gist.stylesheet;
        stylesheet.type = 'text/css';
        stylesheet.rel = 'stylesheet';
        document.head.appendChild(stylesheet);
      }

      delete window[id];
    };

    const script = document.createElement('script');
    script.src = `https://gist.github.com/${
      this.props.gist
    }.json?callback=${id}${file ? `&file=${this.props.file}` : ''}`;
    document.head.appendChild(script);
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.state.content }} />;
  }
}
