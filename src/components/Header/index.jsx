import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import styles from './index.module.css';
import logo from '../../assets/logo.png';
import ToggleTema from '../ToggleTema';
import { Menu as MenuIcon, Close as CloseIcon, ArrowForward as ArrowForwardIcon } from '../../icones';

const PLATFORM_URL = 'https://boaspraticas.infosfera.inf.br/';

const navItems = [
  { label: 'Sobre o Prêmio', path: '/' },
  // Event programme page: switched off until the 2027 agenda is out. To bring it back, fill src/pages/Finalistas with the 2027 data and uncomment (see src/App.jsx).
  // { label: 'Programação', path: '/programacao' },
  { label: 'Vencedores', path: '/vencedores' },
  { label: 'Regulamento', path: '/regulamento' },
  { label: 'Contato', path: '/contato' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  // Prerendered pages live in folders, so the path may end in a slash.
  const ativo = (path) => (location.pathname.replace(/(.)\/$/, '$1') === path);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <Box className={styles.toolbar}>
          {/* Logo */}
          <Link to="/" className={styles.logoLink}>
            <span role="img" aria-label="Logo Infosfera" className={styles.logo} style={{ '--logo': `url(${logo})` }} />
          </Link>

          {/* Nav desktop */}
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={scrollToTop}
                className={`${styles.navLink} ${ativo(item.path) ? styles.navLinkActive : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <Box className={styles.headerActions}>
            <ToggleTema />
            <Button
                variant="contained"
                href={PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
                endIcon={<ArrowForwardIcon sx={{ fontSize: '0.9rem !important' }} />}
              >
                Cadastre sua Prática
              </Button>

            {/* Hamburger mobile */}
            <IconButton
              className={styles.hamburger}
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Linha decorativa inferior */}
        <Box className={styles.headerAccentLine} />
      </header>

      {/* Drawer mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ className: styles.drawer }}
      >
        <Box className={styles.drawerHeader}>
          <span role="img" aria-label="Logo Infosfera" className={styles.drawerLogo} style={{ '--logo': `url(${logo})` }} />
          <IconButton onClick={() => setDrawerOpen(false)} className={styles.drawerClose} aria-label="Fechar menu">
            <CloseIcon />
          </IconButton>
        </Box>

        <List className={styles.drawerNav}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={() => { setDrawerOpen(false); scrollToTop(); }}
                className={`${styles.drawerItem} ${ativo(item.path) ? styles.drawerItemActive : ''}`}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

                <Box className={styles.drawerCta}>
          <Button
            variant="contained"
            fullWidth
            href={PLATFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            endIcon={<ArrowForwardIcon />}
            onClick={() => setDrawerOpen(false)}
          >
            Cadastre sua Prática
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
