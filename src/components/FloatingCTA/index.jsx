import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import styles from './index.module.css';
import { ArrowForward as ArrowForwardIcon } from '../../icones';

const PLATFORM_URL = 'https://boaspraticas.infosfera.inf.br/';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box className={`${styles.wrapper} ${visible ? styles.visible : ''}`}>
      <Button
        variant="contained"
        href={PLATFORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        endIcon={<ArrowForwardIcon />}
        className={styles.btn}
        aria-label="Cadastrar prática na Plataforma Infosfera"
      >
        Cadastre sua Prática
      </Button>
    </Box>
  );
};

export default FloatingCTA;
