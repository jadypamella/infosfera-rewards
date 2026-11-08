import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import styles from './index.module.css';

const temaDoSistema = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Switches between the light theme and the dark one. Starts from the system setting
// and remembers an explicit choice for the next visit.
const ToggleTema = ({ className = '' }) => {
  const [tema, setTema] = useState(null);

  useEffect(() => {
    setTema(document.documentElement.dataset.theme || temaDoSistema());
  }, []);

  const alternar = () => {
    const novo = tema === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = novo;
    try { localStorage.setItem('tema', novo); } catch { /* private mode: the choice lasts this visit only */ }
    setTema(novo);
  };

  const escuro = tema === 'dark';
  return (
    <IconButton
      onClick={alternar}
      className={`${styles.botao} ${className}`}
      aria-label={escuro ? 'Usar tema claro' : 'Usar tema escuro'}
      title={escuro ? 'Tema claro' : 'Tema escuro'}
    >
      {escuro ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  );
};

export default ToggleTema;
