import { SITE_URL, IMAGEM_SOCIAL, dadosEstruturados } from './paginas';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// The head tags of one page, as HTML, for the prerendered file.
export const cabecalho = (pagina, canonico = pagina.path) => {
  const url = `${SITE_URL}${canonico}`;
  const json = JSON.stringify(dadosEstruturados(pagina)).replace(/</g, '\u003c');
  return [
    `<title>${esc(pagina.titulo)}</title>`,
    `<meta name="description" content="${esc(pagina.descricao)}" />`,
    `<meta name="robots" content="${pagina.noindex ? 'noindex' : 'index, follow'}" />`,
    pagina.noindex ? '' : `<link rel="canonical" href="${url}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="Prêmio Infosfera" />',
    '<meta property="og:locale" content="pt_BR" />',
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(pagina.titulo)}" />`,
    `<meta property="og:description" content="${esc(pagina.descricao)}" />`,
    `<meta property="og:image" content="${IMAGEM_SOCIAL}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(pagina.titulo)}" />`,
    `<meta name="twitter:description" content="${esc(pagina.descricao)}" />`,
    `<meta name="twitter:image" content="${IMAGEM_SOCIAL}" />`,
    `<script type="application/ld+json" data-pagina="${pagina.path}">${json}</script>`,
  ].filter(Boolean).join('\n    ');
};
