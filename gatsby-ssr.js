/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

import React from 'react';
import GlobalStateProvider from './src/context/GlobalStateProvider';

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>{element}</GlobalStateProvider>
)

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `ko` })
}

