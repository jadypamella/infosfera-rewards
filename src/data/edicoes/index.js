// Every edition of the award. A new year is one more file in this folder, added to the list below.
import edicao2025 from './2025';
import edicao2026 from './2026';

export const edicoes = [edicao2026, edicao2025].sort((a, b) => b.ano - a.ano);
export const edicaoAtual = edicoes[0];


// Award levels, in display order, with the colour of their badge.
export const NIVEIS = {
  grande: { ordem: 0, cor: 'linear-gradient(90deg, #c99a2e, #e8c25a)' },
  destaque: { ordem: 1, cor: '#1b7fae' },
  mencao: { ordem: 2, cor: '#0e8a68' },
  finalista: { ordem: 3, cor: '#6b7280' },
};

const ordemDe = (p) => NIVEIS[p.nivel || 'finalista'].ordem;

export const praticasOrdenadas = (edicao) =>
  edicao.resultadoDivulgado ? [...edicao.praticas].sort((a, b) => ordemDe(a) - ordemDe(b)) : edicao.praticas;
