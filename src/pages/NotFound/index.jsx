import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import styles from './index.module.css';

const NotFound = () => (
  <Box className={styles.page}>
    <Box className={styles.content}>
      <Typography className={styles.code}>404</Typography>
      <Typography component="h1" className={styles.title}>Página não encontrada</Typography>
      <Typography className={styles.text}>
        O endereço que você acessou não existe. Conheça as boas práticas reconhecidas pelo Prêmio Infosfera na página de vencedores.
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
          component={Link}
          to="/vencedores"
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          className={styles.btnOutline}
        >
          Ver os Vencedores
        </Button>
      </Box>
    </Box>
  </Box>
);

export default NotFound;
