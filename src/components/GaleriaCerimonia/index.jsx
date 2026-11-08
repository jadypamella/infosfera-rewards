import { Box, Typography } from '@mui/material';

import styles from './index.module.css';

const GaleriaCerimonia = ({ edicao }) => {
  const { ano, galeria } = edicao;
  const legenda = `Prêmio Infosfera ${ano}`;

  return (
    <Box component="section" id={`fotos-${ano}`} className={styles.secao}>
      <Box className={styles.inner}>
        <Typography component="h2" className={styles.titulo}>Fotos da Cerimônia {ano}</Typography>
        <Box className={styles.linha} />
        <Typography className={styles.texto}>{legenda}.</Typography>
        <Box className={styles.grade}>
          {galeria.map((src, i) => (
            <Box key={src} component="a" href={src} target="_blank" rel="noopener noreferrer" className={`${styles.foto} ${i === 0 ? styles.destaque : ''}`}>
              <img src={src} alt={`Cerimônia do Prêmio Infosfera ${ano}, foto ${i + 1}`} loading="lazy" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GaleriaCerimonia;
