import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

import { participantes2026, listaLiberada, resultadoDivulgado, galeriaCerimonia } from '../../data/participantes2026';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import styles from './index.module.css';

const AnuncioFinalistas = () => {
  if (!listaLiberada || participantes2026.length === 0) return null;

  const grande = participantes2026.find((p) => p.premio?.startsWith('Grande'));
  const pecas = resultadoDivulgado ? galeriaCerimonia.slice(0, 10) : participantes2026.map((p) => p.imagem);

  return (
    <Box component="section" className={styles.anuncio}>
      <Box className={styles.inner}>
        <Box className={styles.texto}>
          <Box className={styles.selo}>
            <EmojiEventsOutlinedIcon sx={{ fontSize: 18 }} /> {resultadoDivulgado ? 'Resultado 2026' : 'Finalistas 2026'}
          </Box>
          <Typography component="h2" className={styles.titulo}>
            {resultadoDivulgado ? 'Conheça as práticas premiadas do Prêmio Infosfera 2026' : `Conheça as ${participantes2026.length} boas práticas finalistas`}
          </Typography>
          <Typography className={styles.subtitulo}>
            {resultadoDivulgado && grande
              ? `O Grande Prêmio Infosfera 2026 foi para "${grande.pratica.split(':')[0]}", da UFPR. Veja todas as distinções entregues na cerimônia de 5 de novembro, em Goiânia, e as fotos do evento.`
              : 'Selecionadas pela Comissão Julgadora entre as 113 inscrições desta edição. As premiadas serão anunciadas na cerimônia de 5 de novembro, em Goiânia.'}
          </Typography>
          <Button component={Link} to="/participantes" variant="contained" size="large" endIcon={<ArrowForwardIcon />} className={styles.botao}>
            {resultadoDivulgado ? 'Ver as Premiadas' : 'Ver os Finalistas'}
          </Button>
          {resultadoDivulgado && (
            <Button component={Link} to="/participantes" state={{ secao: 'fotos' }} variant="outlined" size="large" startIcon={<PhotoLibraryOutlinedIcon />} className={styles.botaoSecundario}>
              Fotos da Cerimônia
            </Button>
          )}
        </Box>

        <Box component={Link} to="/participantes" className={styles.mosaico} aria-label="Ver os finalistas">
          {pecas.map((src, i) => (
            <Box key={src} className={styles.peca}>
              <img src={src} alt={resultadoDivulgado ? `Cerimônia do Prêmio Infosfera 2026, foto ${i + 1}` : participantes2026[i].pratica} loading="lazy" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AnuncioFinalistas;
