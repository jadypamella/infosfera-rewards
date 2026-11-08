import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SITE_URL, paginaDe, dadosEstruturados } from './paginas';

const definir = (seletor, criar, atributo, valor) => {
  let el = document.head.querySelector(seletor);
  if (!el) {
    el = document.createElement(criar.tag);
    Object.entries(criar.attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute(atributo, valor);
};

const meta = (chave, nome, valor) => definir(`meta[${chave}="${nome}"]`, { tag: 'meta', attrs: { [chave]: nome } }, 'content', valor);

// Keeps the head in step with client-side navigation. The prerendered HTML already
// carries the same tags, so crawlers that skip JavaScript read them too.
const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const pagina = paginaDe(pathname);
    const url = `${SITE_URL}${pagina.path}`;
    document.title = pagina.titulo;
    meta('name', 'description', pagina.descricao);
    meta('name', 'robots', pagina.noindex ? 'noindex' : 'index, follow');
    meta('property', 'og:title', pagina.titulo);
    meta('property', 'og:description', pagina.descricao);
    meta('property', 'og:url', url);
    meta('name', 'twitter:title', pagina.titulo);
    meta('name', 'twitter:description', pagina.descricao);
    definir('link[rel="canonical"]', { tag: 'link', attrs: { rel: 'canonical' } }, 'href', url);
    definir('script[type="application/ld+json"]', { tag: 'script', attrs: { type: 'application/ld+json' } }, 'data-pagina', pagina.path);
    document.head.querySelector('script[type="application/ld+json"]').textContent = JSON.stringify(dadosEstruturados(pagina));
  }, [pathname]);

  return null;
};

export default Seo;
