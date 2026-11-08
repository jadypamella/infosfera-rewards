import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import styles from '../../pages/Regulamento/index.module.css';
import { praticasOrdenadas } from '../../data/edicoes';
import CardPratica from '../CardPratica';
import GaleriaCerimonia from '../GaleriaCerimonia';

const PLATFORM_URL = 'https://boaspraticas.infosfera.inf.br/';

const onde = (cerimonia) => [cerimonia?.data && `em ${cerimonia.data}`, cerimonia?.local && `em ${cerimonia.local}`].filter(Boolean).join(', ');

const nota = (edicao) => {
  const { praticas, cerimonia, inscricoes, resultadoDivulgado } = edicao;
  const selecao = inscricoes ? ` entre as ${inscricoes} inscrições` : '';
  if (!resultadoDivulgado) {
    return `As ${praticas.length} boas práticas finalistas${selecao} estão em ordem alfabética, sem indicação de categoria. As distinções serão anunciadas na cerimônia ${onde(cerimonia)}.`;
  }
  const local = cerimonia ? `Resultado anunciado na cerimônia ${onde(cerimonia)}. ` : '';
  const finalistas = inscricoes ? `, e todas as ${praticas.length} foram selecionadas como finalistas${selecao}` : '';
  return `${local}As práticas aparecem pela distinção recebida${finalistas}.`;
};

const SecaoEdicao = ({ edicao, alternada }) => {
  const { ano, listaLiberada, resultadoDivulgado, praticas, galeria, cerimonia } = edicao;
  const mostrar = listaLiberada && praticas.length > 0;

  return (
    <>
      <Box component="section" id={`edicao-${ano}`} className={styles.section} sx={alternada ? { borderTop: '1px solid #e5e7eb' } : undefined}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Edição {ano}</Typography>
            <Box className={styles.underline} />
          </Box>

          {!mostrar ? (
            <Box className={styles.presentationBlock}>
              <Box className={styles.highlightBox}>
                <InfoOutlinedIcon sx={{ color: '#2d2e82' }} />
                <Typography variant="body2">
                  A relação das boas práticas finalistas será divulgada aqui e na{' '}
                  <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer">Plataforma Infosfera</a>. As distinções serão entregues na cerimônia {onde(cerimonia)}.
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Button component={Link} to="/programacao" variant="contained" size="large" className={styles.btnPrimary} endIcon={<ArrowForwardIcon />}>
                  Ver a Programação
                </Button>
              </Box>
            </Box>
          ) : (
            <>
              <Box className={styles.highlightBox} sx={{ mb: 4 }}>
                <InfoOutlinedIcon sx={{ color: '#2d2e82' }} />
                <Typography variant="body2">{nota(edicao)}</Typography>
              </Box>
              <Grid container spacing={3}>
                {praticasOrdenadas(edicao).map((p) => (
                  <Grid key={`${p.entidade}-${p.titulo}`} size={{ xs: 12, sm: 6, md: 4 }}>
                    <CardPratica p={p} ano={ano} mostrarPremio={resultadoDivulgado} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Box>
      </Box>
      {mostrar && resultadoDivulgado && galeria?.length > 0 && <GaleriaCerimonia edicao={edicao} />}
    </>
  );
};

export default SecaoEdicao;
