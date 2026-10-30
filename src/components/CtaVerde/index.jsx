import { Box, Typography, Button } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './index.module.css';

const PLATFORM_URL = 'https://boaspraticas.infosfera.inf.br/';

const CtaVerde = () => (
  <Box className={styles.section}>
    <Box className={styles.container}>
      <Box className={styles.block}>
        <EmojiEventsOutlinedIcon className={styles.icon} />
        <Typography variant="h3" className={styles.title}>
          Pronto para participar?
        </Typography>
        <Typography className={styles.text}>
          As inscrições estão abertas de <strong>1 de abril a 31 de julho de 2026</strong>. Cadastre sua prática na Plataforma Infosfera, alcance o Status Ouro e concorra ao reconhecimento nacional.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href={PLATFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
          endIcon={<ArrowForwardIcon />}
        >
          Inscrever Minha Prática Agora
        </Button>
        <Typography className={styles.note}>Inscrição gratuita. Sem limite de práticas por órgão.</Typography>
      </Box>
    </Box>
  </Box>
);

export default CtaVerde;
