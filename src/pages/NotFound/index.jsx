import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import styles from './index.module.css';

const PLATFORM_URL = 'https://boaspraticas.infosfera.inf.br/';

const NotFound = () => (
  <Box className={styles.page}>
    <Box className={styles.content}>
      <Typography className={styles.code}>404</Typography>
      <Typography className={styles.title}>Página não encontrada</Typography>
      <Typography className={styles.text}>
        O endereço que você acessou não existe. Mas as inscrições para o Prêmio Infosfera 2026 estão abertas!
      </Typography>
      <Box className={styles.actions}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          startIcon={<HomeOutlinedIcon />}
          className={styles.btnPrimary}
        >
          Voltar ao Início
        </Button>
        <Button
          href={PLATFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          className={styles.btnOutline}
        >
          Inscrever Prática
        </Button>
      </Box>
    </Box>
  </Box>
);

export default NotFound;
