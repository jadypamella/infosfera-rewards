import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import styles from '../Regulamento/index.module.css';
import bannerImage from '../../assets/banner.jpeg';
import { noticias } from '../../data/naMidia';

const edicoes = [...new Set(noticias.map((n) => n.edicao))].sort((a, b) => b - a);

const NaMidia = () => (
  <Box className={styles.page}>
    <Box className={styles.hero} style={{ backgroundImage: `url(${bannerImage})` }}>
      <Box className={styles.heroOverlay} />
      <Box className={styles.heroContent}>
        <Typography className={styles.heroTitle}>Infosfera na Mídia</Typography>
        <Typography className={styles.heroSubtitle}>Notícias e publicações sobre o Prêmio Infosfera.</Typography>
      </Box>
    </Box>
    {edicoes.map((ano) => (
      <Box key={ano} className={styles.section}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Edição {ano}</Typography>
            <Box className={styles.underline} />
          </Box>
          <Grid container spacing={3}>
            {noticias.filter((n) => n.edicao === ano).map((n) => (
              <Grid key={n.url} size={{ xs: 12, md: 6 }}>
                <Card component="a" href={n.url} target="_blank" rel="noopener noreferrer" sx={{ display: 'block', height: '100%', textDecoration: 'none', borderRadius: 3, boxShadow: '0 4px 18px rgba(45,46,130,0.10)', '&:hover': { boxShadow: '0 10px 28px rgba(45,46,130,0.18)' } }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#0e8a68', mb: 1 }}>{n.veiculo}</Typography>
                    <Typography sx={{ fontWeight: 700, color: '#2d2e82', lineHeight: 1.35, mb: 1.5 }}>{n.titulo}</Typography>
                    <Typography variant="body2" sx={{ color: '#4b4c6b', display: 'flex', alignItems: 'center', gap: 0.5 }}>Ler a notícia <OpenInNewIcon sx={{ fontSize: 16 }} /></Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    ))}
  </Box>
);

export default NaMidia;
