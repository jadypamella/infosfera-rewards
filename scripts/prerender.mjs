// Writes one static HTML file per page after the build, so crawlers and answer
// engines that do not run JavaScript still read the content, the head tags and the
// structured data. Also writes sitemap.xml and llms.txt from the same page list.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(raiz, 'dist');
const ssr = join(raiz, 'dist-ssr');

const { render, cabecalho, PAGINAS, ALIASES, PAGINA_404, SITE_URL, llmsTxt } = await import(
  pathToFileURL(join(ssr, 'entry-server.js')).href
);
const modelo = await readFile(join(dist, 'index.html'), 'utf8');

const montar = (url, pagina, canonico) => modelo
  .replace('<!--app-head-->', cabecalho(pagina, canonico))
  .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);

const gravar = async (arquivo, html) => {
  await mkdir(dirname(arquivo), { recursive: true });
  await writeFile(arquivo, html);
};

for (const pagina of PAGINAS) {
  await gravar(join(dist, pagina.path, 'index.html'), montar(pagina.path, pagina));
}
for (const [alias, destino] of Object.entries(ALIASES)) {
  const pagina = PAGINAS.find((p) => p.path === destino);
  await gravar(join(dist, alias, 'index.html'), montar(alias, pagina, destino));
}
await gravar(join(dist, '404.html'), montar('/pagina-inexistente', PAGINA_404));

const hoje = new Date().toISOString().slice(0, 10);
const urls = PAGINAS.map((p) => `  <url><loc>${SITE_URL}${p.path}</loc><lastmod>${hoje}</lastmod></url>`).join('\n');
await writeFile(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
await writeFile(join(dist, 'llms.txt'), llmsTxt());

await rm(ssr, { recursive: true, force: true });
console.log(`prerender: ${PAGINAS.length} páginas, ${Object.keys(ALIASES).length} alias, 404, sitemap.xml e llms.txt`);
