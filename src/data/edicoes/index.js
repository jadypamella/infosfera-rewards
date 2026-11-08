// Every edition of the award. A new year is one more file in this folder, added to the list below.
import edicao2025 from './2025';
import edicao2026 from './2026';

export const edicoes = [edicao2026, edicao2025].sort((a, b) => b.ano - a.ano);
export const edicaoAtual = edicoes[0];

// Registration deadline of the current edition. After it, every "Inscrever Prática" button hides itself.
const PRAZO_INSCRICOES = new Date('2026-07-31T23:59:59-03:00');
export const inscricoesAbertas = Date.now() < PRAZO_INSCRICOES.getTime();

// Award levels, in display order, with the colour of their badge.
export const NIVEIS = {
  grande: { ordem: 0, cor: 'linear-gradient(90deg, #c99a2e, #e8c25a)' },
  destaque: { ordem: 1, cor: '#2d2e82' },
  mencao: { ordem: 2, cor: '#0e8a68' },
  finalista: { ordem: 3, cor: '#6b7280' },
};

// URL-safe name of a practice, for its page at /vencedores/<ano>/<slug>.
const slugify = (texto) => texto.split(':')[0].normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);

export const caminhoDaPratica = (ano, p) => `/vencedores/${ano}/${slugify(p.titulo)}`;

export const buscarPratica = (ano, slug) => {
  const edicao = edicoes.find((e) => e.ano === ano);
  const pratica = edicao?.praticas.find((p) => slugify(p.titulo) === slug);
  return pratica ? { edicao, pratica } : null;
};

const ordemDe =(p) => NIVEIS[p.nivel || 'finalista'].ordem;

export const praticasOrdenadas = (edicao) =>
  edicao.resultadoDivulgado ? [...edicao.praticas].sort((a, b) => ordemDe(a) - ordemDe(b)) : edicao.praticas;
