import { Box, Typography } from '@mui/material';

import { galeriaCerimonia } from '../../data/participantes2026';
import styles from './index.module.css';

const GaleriaCerimonia = () => (
  <Box component="section" id="fotos" className={styles.secao}>
    <Box className={styles.inner}>
      <Typography component="h2" className={styles.titulo}>Fotos da Cerimônia</Typography>
      <Box className={styles.linha} />
      <Typography className={styles.texto}>
        Prêmio Infosfera 2026, 5 de novembro, em Goiânia.
      </Typography>
      <Box className={styles.grade}>
        {galeriaCerimonia.map((src, i) => (
          <Box key={src} component="a" href={src} target="_blank" rel="noopener noreferrer" className={`${styles.foto} ${i === 0 ? styles.destaque : ''}`}>
            <img src={src} alt={`Cerimônia do Prêmio Infosfera 2026, foto ${i + 1}`} loading="lazy" />
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

export default GaleriaCerimonia;
