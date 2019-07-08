// @flow strict

// $FlowFixMe
import marked from 'marked';

function render(markdown: string) {
  const rawMarkup = marked(markdown, { sanitize: true });
  return { __html: rawMarkup };
}

export default {
  render,
};
