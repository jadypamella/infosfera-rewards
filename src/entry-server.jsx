// Server entry, never hot-reloaded, so it may re-export the page data the prerender script needs.
/* eslint-disable react-refresh/only-export-components */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './App.jsx';

export { PAGINAS, ALIASES, PAGINA_404, SITE_URL, llmsTxt } from './seo/paginas';
export { cabecalho } from './seo/cabecalho';

export const render = (url) => renderToString(
  <StaticRouter location={url}>
    <App />
  </StaticRouter>,
);
