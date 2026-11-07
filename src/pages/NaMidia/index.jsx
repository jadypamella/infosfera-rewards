import { Box, Typography } from '@mui/material';

import styles from '../Regulamento/index.module.css';
import bannerImage from '../../assets/banner.jpeg';
import { noticias } from '../../data/naMidia';
import NoticiasMidia from '../../components/NoticiasMidia';

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
          <NoticiasMidia noticias={noticias.filter((n) => n.edicao === ano)} />
        </Box>
      </Box>
    ))}
  </Box>
);

export default NaMidia;
