import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';

import { edicaoAtual, praticasOrdenadas } from '../../data/edicoes';
import Esfera from '../Esfera';
import styles from './index.module.css';

const AnuncioFinalistas = () => {
  const { ano, praticas, listaLiberada, resultadoDivulgado, galeria, cerimonia, inscricoes } = edicaoAtual;
  if (!listaLiberada || praticas.length === 0) return null;

  const grande = praticas.find((p) => p.nivel === 'grande');
  const temFotos = resultadoDivulgado && galeria.length > 0;
  const pecas = temFotos ? galeria.slice(0, 10) : praticas.map((p) => p.capa).filter(Boolean);
  const naCerimonia = [cerimonia?.data, cerimonia?.local && `em ${cerimonia.local}`].filter(Boolean).join(', ');

  return (
    <Box component="section" className={styles.anuncio}>
      <Box className={styles.inner}>
        <Box className={styles.texto}>
          <Box className={styles.selo}>
            <EmojiEventsOutlinedIcon sx={{ fontSize: 18 }} /> {resultadoDivulgado ? `Resultado ${ano}` : `Finalistas ${ano}`}
          </Box>
          <Typography component="h1" className={styles.titulo}>
            {resultadoDivulgado ? `Conheça as práticas premiadas do Prêmio Infosfera ${ano}` : `Conheça as ${praticas.length} boas práticas finalistas`}
          </Typography>
          <Typography className={styles.subtitulo}>
            {resultadoDivulgado && grande
              ? `O Grande Prêmio Infosfera ${ano} foi para "${grande.titulo.split(':')[0]}". Veja todas as distinções entregues na cerimônia de ${naCerimonia}${temFotos ? ' e as fotos do evento' : ''}.`
              : `Selecionadas pela Comissão Julgadora${inscricoes ? ` entre as ${inscricoes} inscrições desta edição` : ''}. As premiadas serão anunciadas na cerimônia de ${naCerimonia}.`}
          </Typography>
          <Button component={Link} to="/vencedores" variant="contained" size="large" endIcon={<ArrowForwardIcon />} className={styles.botao}>
            {resultadoDivulgado ? 'Ver as Premiadas' : 'Ver os Finalistas'}
          </Button>
          {temFotos && (
            <Button component={Link} to="/vencedores" state={{ secao: `fotos-${ano}` }} variant="outlined" size="large" startIcon={<PhotoLibraryOutlinedIcon />} className={styles.botaoSecundario}>
              Fotos da Cerimônia
            </Button>
          )}
        </Box>

        <Box className={styles.palco}>
          <Esfera className={styles.esferaFundo} total={inscricoes || praticas.length} premiadas={resultadoDivulgado ? praticasOrdenadas(edicaoAtual).filter((p) => p.premio) : []} />
          <Box component={Link} to="/vencedores" className={styles.mosaico} aria-label={resultadoDivulgado ? 'Ver as premiadas' : 'Ver os finalistas'}>
            {pecas.map((src, i) => (
              <Box key={src} className={styles.peca}>
                <img src={src} alt={temFotos ? `Cerimônia do Prêmio Infosfera ${ano}, foto ${i + 1}` : praticas[i].titulo} loading="lazy" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AnuncioFinalistas;
