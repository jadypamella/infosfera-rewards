import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Grid, Button, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import styles from '../Regulamento/index.module.css';
import bannerImage from '../../assets/banner.jpeg';
import { participantes2026, listaLiberada, resultadoDivulgado, ORDEM_PREMIO } from '../../data/participantes2026';
import GaleriaCerimonia from '../../components/GaleriaCerimonia';
import Edicao2025 from '../../components/Edicao2025';

const COR_PREMIO = {
  'Grande Prêmio Infosfera 2026': 'linear-gradient(90deg, #c99a2e, #e8c25a)',
  'Destaque Regional · Goiás': '#2d2e82',
  'Destaque Municipal': '#2d2e82',
  'Menção Honrosa': '#0e8a68',
};

const PLATFORM_URL = 'https://boaspraticas.infosfera.inf.br/';

const Selo = ({ label, cor }) => (
  <Box component="span" sx={{ bgcolor: cor || '#2d2e82', color: '#fff', fontSize: 12, fontWeight: 600, px: 1.5, py: 0.5, borderRadius: 999, lineHeight: 1.4 }}>
    {label}
  </Box>
);

const CardParticipante = ({ p }) => (
  <Card
    component="a"
    href={p.link}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      height: '100%', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit',
      borderRadius: 3, overflow: 'hidden', boxShadow: '0 4px 18px rgba(45,46,130,0.10)', transition: 'transform .2s, box-shadow .2s',
      '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 10px 28px rgba(45,46,130,0.18)' },
    }}
  >
    {resultadoDivulgado && (
      <Box sx={{ background: COR_PREMIO[p.premio] || '#6b7280', color: '#fff', fontWeight: 800, fontSize: 13, letterSpacing: '0.05em', textTransform: 'uppercase', px: 2.5, py: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
        <EmojiEventsIcon sx={{ fontSize: 18 }} /> {p.premio.includes('2026') ? p.premio : `2026 · ${p.premio || 'Finalista'}`}
      </Box>
    )}
    <Box sx={{ position: 'relative', aspectRatio: '3 / 2', flexShrink: 0, bgcolor: '#f3f5f9', borderBottom: '3px solid #1abc9c', overflow: 'hidden' }}>
      <Box component="img" src={p.fotoPremio || p.imagem} alt={p.fotoPremio ? `Entrega do prêmio: ${p.pratica}` : p.pratica} loading="lazy" sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: p.fotoPremio ? 'cover' : 'contain', objectPosition: 'center 65%' }} />
    </Box>
    <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1.5, p: 3 }}>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {p.esfera && <Selo label={p.esfera} cor={p.esferaCor} />}
        {p.status && <Selo label={p.status} cor={p.statusCor} />}
      </Box>
      <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 17, lineHeight: 1.35, color: '#2d2e82' }}>
        {p.pratica}
      </Typography>
      <Typography sx={{ fontSize: 14, color: '#555', lineHeight: 1.5 }}>
        <strong style={{ color: '#333' }}>Entidade responsável:</strong> {p.orgao}
      </Typography>
      {p.categorias?.length > 0 && (
        <Typography sx={{ fontSize: 13, color: '#2d2e82', lineHeight: 1.5 }}>
          {p.categorias.join(' · ')}
        </Typography>
      )}
      <Box sx={{ mt: 'auto', pt: 1, display: 'flex', alignItems: 'center', gap: 0.5, color: '#0e8a68', fontWeight: 700, fontSize: 14 }}>
        Conheça a prática <ArrowForwardIcon sx={{ fontSize: 18 }} />
      </Box>
    </CardContent>
  </Card>
);

const Participantes = () => {
  const { state } = useLocation();
  useEffect(() => {
    if (state?.secao) document.getElementById(state.secao)?.scrollIntoView({ behavior: 'smooth' });
  }, [state]);
  const mostrar = listaLiberada && participantes2026.length > 0;
  const lista = resultadoDivulgado
    ? [...participantes2026].sort((a, b) => ORDEM_PREMIO.indexOf(a.premio || '') - ORDEM_PREMIO.indexOf(b.premio || ''))
    : participantes2026;

  return (
    <Box className={styles.page}>

      <Box className={styles.hero} style={{ backgroundImage: `url(${bannerImage})` }}>
        <Box className={styles.heroOverlay} />
        <Box className={styles.heroContent}>
          <Chip label={resultadoDivulgado ? 'Edições 2026 e 2025' : 'Edição 2026 · Boas práticas finalistas'} className={styles.heroBadge} size="small" />
          <Typography className={styles.heroTitle}>Vencedores</Typography>
          <Typography className={styles.heroSubtitle}>
            As boas práticas de gestão da informação reconhecidas pelo Prêmio Infosfera, separadas por edição.
          </Typography>
        </Box>
      </Box>

      <Box className={styles.section}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>{resultadoDivulgado ? 'Edição 2026' : 'Boas Práticas Finalistas'}</Typography>
            <Box className={styles.underline} />
          </Box>

          {!mostrar ? (
            <Box className={styles.presentationBlock}>
              <Box className={styles.highlightBox}>
                <InfoOutlinedIcon sx={{ color: '#2d2e82' }} />
                <Typography variant="body2">
                  A relação das boas práticas finalistas será divulgada aqui e na{' '}
                  <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer">Plataforma Infosfera</a>{' '}
                  ao final do período de defeso eleitoral. As práticas serão apresentadas na Sessão de Boas Práticas e premiadas na cerimônia de 5 de novembro, em Goiânia.
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
                <Typography variant="body2">
                  {resultadoDivulgado
                    ? 'Resultado anunciado na cerimônia de 5 de novembro de 2026, em Goiânia. As práticas aparecem pela distinção recebida, e todas as nove foram selecionadas como finalistas entre as 113 inscrições.'
                    : 'As boas práticas finalistas estão listadas em ordem alfabética, sem indicação de categoria. As distinções serão anunciadas na cerimônia de 5 de novembro, em Goiânia.'}
                </Typography>
              </Box>
              <Grid container spacing={3}>
                {lista.map((p) => (
                  <Grid key={`${p.orgao}-${p.pratica}`} size={{ xs: 12, sm: 6, md: 4 }}>
                    <CardParticipante p={p} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Box>
      </Box>


      {resultadoDivulgado && <GaleriaCerimonia />}
      {resultadoDivulgado && <Edicao2025 />}
    </Box>
  );
};

export default Participantes;
