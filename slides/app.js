import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const Wrapper = props => (
  <main style={{ padding: '20px', backgroundColor: 'tomato' }} {...props} />
);

export default ({ children }) => (
  <MDXProvider components={{ wrapper: Wrapper }}>{children}</MDXProvider>
);
