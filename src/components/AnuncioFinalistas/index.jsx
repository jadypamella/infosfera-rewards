import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

import { participantes2026, listaLiberada } from '../../data/participantes2026';
import styles from './index.module.css';

const AnuncioFinalistas = () => {
  if (!listaLiberada || participantes2026.length === 0) return null;

  return (
    <Box component="section" className={styles.anuncio}>
      <Box className={styles.inner}>
        <Box className={styles.texto}>
          <Box className={styles.selo}>
            <EmojiEventsOutlinedIcon sx={{ fontSize: 18 }} /> Finalistas 2026
          </Box>
          <Typography component="h2" className={styles.titulo}>
            Conheça as {participantes2026.length} boas práticas finalistas
          </Typography>
          <Typography className={styles.subtitulo}>
            Selecionadas pela Comissão Julgadora entre as 113 inscrições desta edição. As premiadas serão anunciadas na cerimônia de 5 de novembro, em Goiânia.
          </Typography>
          <Button component={Link} to="/participantes" variant="contained" size="large" endIcon={<ArrowForwardIcon />} className={styles.botao}>
            Ver os Finalistas
          </Button>
        </Box>

        <Box component={Link} to="/participantes" className={styles.mosaico} aria-label="Ver os finalistas">
          {participantes2026.map((p) => (
            <Box key={p.pratica} className={styles.peca}>
              <img src={p.imagem} alt={p.pratica} loading="lazy" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AnuncioFinalistas;
