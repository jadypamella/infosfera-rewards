// Single source for what search engines and answer engines read about each page:
// the head tags, the structured data, the sitemap and llms.txt are all built from here.
import { edicoes, edicaoAtual, praticasOrdenadas } from '../data/edicoes';

export const SITE_URL = 'https://premio.infosfera.inf.br';
export const PLATAFORMA_URL = 'https://boaspraticas.infosfera.inf.br/';
export const IMAGEM_SOCIAL = `${SITE_URL}/og-image.jpg`;

const anos = edicoes.map((e) => e.ano).sort().join(' e ');

export const PAGINAS = [
  {
    path: '/',
    titulo: 'Prêmio Infosfera: Boas Práticas em Informação Pública',
    descricao: `Prêmio nacional que reconhece boas práticas de gestão da informação no setor público. Veja as premiadas de ${edicaoAtual.ano} e cadastre a sua prática.`,
  },
  {
    path: '/vencedores/',
    titulo: `Vencedores do Prêmio Infosfera ${anos}`,
    descricao: 'Grande Prêmio, Destaques e Menções Honrosas de cada edição do Prêmio Infosfera, com o órgão responsável e o link de cada boa prática.',
  },
  {
    path: '/programacao/',
    titulo: `Programação da Cerimônia do Prêmio Infosfera ${edicaoAtual.ano}`,
    descricao: `Programação de ${edicaoAtual.cerimonia.data} em ${edicaoAtual.cerimonia.local} e orientações aos finalistas sobre a Sessão de Boas Práticas e a Cerimônia de Premiação.`,
  },
  {
    path: '/regulamento/',
    titulo: 'Regulamento do Prêmio Infosfera',
    descricao: 'Quem pode participar, categorias, critérios de avaliação e etapas do Prêmio Infosfera. Inscrição gratuita e sem limite de práticas por órgão.',
  },
  {
    path: '/regulamento-integra/',
    titulo: 'Regulamento do Prêmio Infosfera na Íntegra',
    descricao: 'Texto completo do regulamento do Prêmio Infosfera de Boas Práticas em Gestão da Informação Pública, com todas as cláusulas e prazos.',
  },
  {
    path: '/na-midia/',
    titulo: 'Prêmio Infosfera na Mídia',
    descricao: 'Notícias e publicações sobre o Prêmio Infosfera e as boas práticas premiadas em gestão da informação pública.',
  },
  {
    path: '/contato/',
    titulo: 'Contato do Prêmio Infosfera',
    descricao: 'Fale com a organização do Prêmio Infosfera por e-mail ou pelas redes sociais para tirar dúvidas sobre inscrição, regulamento e cerimônia.',
  },
];

// Routes that render the same content as another page point their canonical there.
export const ALIASES = { '/finalistas': '/programacao/' };

export const PAGINA_404 = {
  path: '/404',
  titulo: 'Página não encontrada · Prêmio Infosfera',
  descricao: 'O endereço acessado não existe no site do Prêmio Infosfera. Volte para a página inicial para ver as premiadas e o regulamento.',
  noindex: true,
};

const semBarra = (path) => (path.length > 1 ? path.replace(/\/$/, '') : path);

export const paginaDe = (pathname) => {
  const alvo = ALIASES[semBarra(pathname)] || pathname;
  return PAGINAS.find((p) => semBarra(p.path) === semBarra(alvo)) || PAGINA_404;
};

const organizacao = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#infosfera`,
  name: 'Infosfera',
  url: PLATAFORMA_URL,
  email: 'contato@infosfera.inf.br',
  sameAs: ['https://www.instagram.com/infosferabr', 'https://www.linkedin.com/company/infosferabr/'],
};

const premiadas = (edicao) => praticasOrdenadas(edicao).filter((p) => p.premio);

const listaDePremiadas = (edicao) => ({
  '@type': 'ItemList',
  name: `Práticas premiadas no Prêmio Infosfera ${edicao.ano}`,
  itemListElement: premiadas(edicao).map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      name: p.titulo,
      url: p.link,
      award: `${p.premio}, Prêmio Infosfera ${edicao.ano}`,
      creator: { '@type': 'GovernmentOrganization', name: p.entidade },
    },
  })),
});

export const dadosEstruturados = (pagina) => {
  const grafo = [
    organizacao,
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#site`,
      url: `${SITE_URL}/`,
      name: 'Prêmio Infosfera',
      inLanguage: 'pt-BR',
      publisher: { '@id': `${SITE_URL}/#infosfera` },
    },
    {
      '@type': 'WebPage',
      url: `${SITE_URL}${pagina.path}`,
      name: pagina.titulo,
      description: pagina.descricao,
      isPartOf: { '@id': `${SITE_URL}/#site` },
      inLanguage: 'pt-BR',
    },
  ];
  if (pagina.path === '/vencedores/') {
    edicoes.filter((e) => e.resultadoDivulgado).forEach((e) => grafo.push(listaDePremiadas(e)));
  }
  return { '@context': 'https://schema.org', '@graph': grafo };
};

// Plain-text summary for language models, served as /llms.txt.
export const llmsTxt = () => {
  const linhas = [
    '# Prêmio Infosfera',
    '',
    '> Prêmio nacional que reconhece boas práticas de gestão da informação no setor público brasileiro, organizado pela Infosfera. A inscrição é gratuita e feita na Plataforma Infosfera de Boas Práticas.',
    '',
    '## Páginas',
    '',
    ...PAGINAS.map((p) => `- [${p.titulo}](${SITE_URL}${p.path}): ${p.descricao}`),
    `- [Plataforma Infosfera de Boas Práticas](${PLATAFORMA_URL}): onde as práticas são cadastradas e publicadas.`,
  ];
  edicoes.forEach((e) => {
    const lista = e.resultadoDivulgado ? premiadas(e) : e.praticas;
    if (!e.listaLiberada || lista.length === 0) return;
    linhas.push('', `## Edição ${e.ano}`, '');
    if (e.cerimonia) linhas.push(`Cerimônia em ${e.cerimonia.data}, ${e.cerimonia.local}.${e.inscricoes ? ` ${e.inscricoes} práticas inscritas.` : ''}`, '');
    lista.forEach((p) => linhas.push(`- ${p.premio ? `${p.premio}: ` : ''}${p.link ? `[${p.titulo}](${p.link})` : p.titulo}, ${p.entidade}`));
  });
  return `${linhas.join('\n')}\n`;
};
