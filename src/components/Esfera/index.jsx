import { useState } from 'react';

import styles from './index.module.css';

// The award's mark, drawn from data: one radial line per registered practice,
// with the awarded ones lit. Pointing at a lit line names its practice.
const COR_NIVEL = { grande: 'var(--luz-ouro)', destaque: 'var(--luz-ceu)', mencao: 'var(--luz-esfera)' };

const geometria = (total) => Array.from({ length: total }, (_, i) => {
  const angulo = (i / total) * Math.PI * 2 - Math.PI / 2;
  const onda = 0.5 + 0.5 * Math.sin(angulo * 3);
  const dentro = 120 - onda * 34;
  return {
    x1: 200 + Math.cos(angulo) * dentro,
    y1: 200 + Math.sin(angulo) * dentro,
    x2: 200 + Math.cos(angulo) * 192,
    y2: 200 + Math.sin(angulo) * 192,
  };
});

// Spreads the awarded practices evenly around the sphere.
const posicoes = (total, quantas) => Array.from({ length: quantas }, (_, k) => Math.round(((k + 0.5) * total) / quantas) % total);

const Esfera = ({ ano, total = 144, premiadas = [], interativa = false, className = '' }) => {
  const [ativa, setAtiva] = useState(null);
  const linhas = geometria(total);
  const acesas = new Map(posicoes(total, premiadas.length).map((pos, k) => [pos, premiadas[k]]));
  const destaque = ativa === null ? null : acesas.get(ativa);

  return (
    <div className={`${styles.esfera} ${interativa ? styles.interativa : ''} ${className}`} aria-hidden={!interativa}>
      <svg viewBox="0 0 400 400" className={styles.anel}>
        <defs>
          <linearGradient id="esfera-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--luz-esfera)" />
            <stop offset="1" stopColor="var(--luz-ceu)" />
          </linearGradient>
        </defs>
        {linhas.map((l, i) => {
          const p = acesas.get(i);
          return (
            <line
              key={i}
              {...l}
              className={p ? styles.acesa : styles.linha}
              style={{ '--i': i, ...(p && { stroke: COR_NIVEL[p.nivel] }) }}
              stroke={p ? undefined : 'url(#esfera-grad)'}
              tabIndex={p && interativa ? 0 : undefined}
              aria-label={p && interativa ? `${p.premio}: ${p.titulo}` : undefined}
              onMouseEnter={p && interativa ? () => setAtiva(i) : undefined}
              onFocus={p && interativa ? () => setAtiva(i) : undefined}
              onMouseLeave={p && interativa ? () => setAtiva(null) : undefined}
              onBlur={p && interativa ? () => setAtiva(null) : undefined}
            />
          );
        })}
      </svg>
      <div className={styles.centro}>
        {destaque ? (
          <>
            <span className={styles.premio}>{destaque.premio}</span>
            <span className={styles.nome}>{destaque.titulo.split(':')[0]}</span>
          </>
        ) : (
          ano && <span className={styles.ano}>{ano}</span>
        )}
      </div>
    </div>
  );
};

export default Esfera;
