// custom typefaces
import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.scss"
import "./src/post.scss"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import React from 'react';
import GlobalStateProvider from './src/context/GlobalStateProvider';

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>{element}</GlobalStateProvider>
);