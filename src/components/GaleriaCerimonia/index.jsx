import { Box, Typography, Button } from '@mui/material';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';

import { galeriaCerimonia, ALBUM_FOTOS_URL } from '../../data/participantes2026';
import styles from './index.module.css';

const GaleriaCerimonia = () => (
  <Box component="section" id="fotos" className={styles.secao}>
    <Box className={styles.inner}>
      <Typography component="h2" className={styles.titulo}>Fotos da Cerimônia</Typography>
      <Box className={styles.linha} />
      <Typography className={styles.texto}>
        Prêmio Infosfera 2026, 5 de novembro, em Goiânia. O álbum completo está no Google Fotos, e quem esteve lá pode ver, comentar e enviar os próprios registros.
      </Typography>
      <Box className={styles.grade}>
        {galeriaCerimonia.map((src, i) => (
          <Box key={src} component="a" href={ALBUM_FOTOS_URL} target="_blank" rel="noopener noreferrer" className={`${styles.foto} ${i === 0 ? styles.destaque : ''}`}>
            <img src={src} alt={`Cerimônia do Prêmio Infosfera 2026, foto ${i + 1}`} loading="lazy" />
          </Box>
        ))}
      </Box>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button href={ALBUM_FOTOS_URL} target="_blank" rel="noopener noreferrer" variant="contained" size="large" startIcon={<PhotoLibraryOutlinedIcon />} className={styles.botao}>
          Ver o Álbum Completo e Enviar Fotos
        </Button>
      </Box>
    </Box>
  </Box>
);

export default GaleriaCerimonia;
