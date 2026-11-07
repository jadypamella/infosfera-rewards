import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Chip } from '@mui/material';

import styles from '../Regulamento/index.module.css';
import bannerImage from '../../assets/banner.jpeg';
import { edicoes } from '../../data/edicoes';
import SecaoEdicao from '../../components/SecaoEdicao';

const anos = edicoes.map((e) => e.ano).join(' e ').replace(/ e (?=.* e )/g, ', ');

const Vencedores = () => {
  const { state } = useLocation();
  useEffect(() => {
    if (state?.secao) document.getElementById(state.secao)?.scrollIntoView({ behavior: 'smooth' });
  }, [state]);

  return (
    <Box className={styles.page}>
      <Box className={styles.hero} style={{ backgroundImage: `url(${bannerImage})` }}>
        <Box className={styles.heroOverlay} />
        <Box className={styles.heroContent}>
          <Chip label={`Edições ${anos}`} className={styles.heroBadge} size="small" />
          <Typography component="h1" className={styles.heroTitle}>Vencedores</Typography>
          <Typography className={styles.heroSubtitle}>
            As boas práticas de gestão da informação reconhecidas pelo Prêmio Infosfera, separadas por edição.
          </Typography>
        </Box>
      </Box>

      {edicoes.map((edicao, i) => (
        <SecaoEdicao key={edicao.ano} edicao={edicao} alternada={i % 2 === 1} />
      ))}
    </Box>
  );
};

export default Vencedores;
