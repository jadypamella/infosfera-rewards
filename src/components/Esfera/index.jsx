import styles from './index.module.css';

// The award's mark: a sphere drawn from radial hairlines, like the "C" of the Infosfera logo.
const LINHAS = 144;
const raios = Array.from({ length: LINHAS }, (_, i) => {
  const angulo = (i / LINHAS) * Math.PI * 2;
  const onda = 0.5 + 0.5 * Math.sin(angulo * 3);
  const dentro = 118 - onda * 34;
  return {
    x1: 200 + Math.cos(angulo) * dentro,
    y1: 200 + Math.sin(angulo) * dentro,
    x2: 200 + Math.cos(angulo) * 192,
    y2: 200 + Math.sin(angulo) * 192,
  };
});

const Esfera = ({ ano, className = '' }) => (
  <div className={`${styles.esfera} ${className}`} aria-hidden="true">
    <svg viewBox="0 0 400 400" className={styles.anel}>
      <defs>
        <linearGradient id="esfera-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--esfera-a)" />
          <stop offset="1" stopColor="var(--esfera-b)" />
        </linearGradient>
      </defs>
      {raios.map((r, i) => (
        <line key={i} {...r} stroke="url(#esfera-grad)" strokeWidth="1.4" strokeLinecap="round" />
      ))}
    </svg>
    {ano && <span className={styles.ano}>{ano}</span>}
  </div>
);

export default Esfera;
