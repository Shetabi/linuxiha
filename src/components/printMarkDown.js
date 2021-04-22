import React from 'react';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import render from 'remark-render';
import renderer from 'remark-react-renderer';
export default function PrintMarkdown({ markdown }) {
  const h = React.createElement;
  const content = unified()
    .use(parse)
    .use(render, {
      renderer: renderer,
      p: h
    })
    .use(remark2react)
    .processSync(markdown).result;

  return (
    <div>
      {content}
    </div>
  );
}