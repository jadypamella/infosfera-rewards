import { Box, Typography, Button } from '@mui/material';
import styles from './index.module.css';
import { EmojiEventsOutlined as EmojiEventsOutlinedIcon, ArrowForward as ArrowForwardIcon } from '../../icones';

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
          A <strong>edição 2027</strong> já recebe práticas e o cronograma será divulgado em breve. Cadastre sua prática na Plataforma Infosfera, alcance o Status Ouro e concorra ao reconhecimento nacional.
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
          Cadastrar Minha Prática
        </Button>
        <Typography className={styles.note}>Inscrição gratuita. Sem limite de práticas por órgão.</Typography>
      </Box>
    </Box>
  </Box>
);

export default CtaVerde;
