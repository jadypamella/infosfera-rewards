import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './index.module.css';

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
        aria-label="Inscrever prática no Prêmio Infosfera"
      >
        Inscrever Prática
      </Button>
    </Box>
  );
};

export default FloatingCTA;
