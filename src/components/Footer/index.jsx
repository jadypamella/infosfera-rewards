import { Box, Container, Typography, Link, IconButton, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import styles from './index.module.css';
import logo from '../../assets/logo.png';

const socials = [
  {
    icon: <InstagramIcon />,
    label: 'Instagram',
    href: 'https://www.instagram.com/infosferabr',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/infosferabr/',
  },
];

const Footer = () => {
  return (
    <Box component="footer" className={styles.footer}>
      <Container maxWidth="lg">
        <Box className={styles.footerTop}>
          <Box className={styles.footerBrand}>
            <img src={logo} alt="Logo Infosfera" className={styles.footerLogo} />
            <Typography className={styles.footerTagline}>
              Gestão da Informação na Esfera Pública
            </Typography>
          </Box>

          <Box className={styles.footerLinks}>
            <Box className={styles.socialRow}>
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="none"
                  className={styles.socialItem}
                >
                  <IconButton color="inherit" aria-label={`Acessar ${s.label} do Prêmio Infosfera`} className={styles.iconButton}>
                    {s.icon}
                  </IconButton>
                  <Typography className={styles.socialLabel}>{s.label}</Typography>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider className={styles.footerDivider} />

        <Box className={styles.footerBottom}>
          <Typography variant="caption" className={styles.footerCopy}>
            © {new Date().getFullYear()} INFOJUS · Núcleo de Pesquisa em Informação, Direito e Sociedade · UFPR
          </Typography>
          <Typography variant="caption" className={styles.footerCopyRight}>
            Todos os direitos reservados
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
