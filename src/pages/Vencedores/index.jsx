import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import styles from './index.module.css';
import { edicoes } from '../../data/edicoes';
import SecaoEdicao from '../../components/SecaoEdicao';
import Esfera from '../../components/Esfera';

const totalPremiadas = edicoes.reduce((n, e) => n + e.praticas.filter((p) => p.premio).length, 0);

const Vencedores = () => {
  const { state } = useLocation();
  useEffect(() => {
    if (state?.secao) document.getElementById(state.secao)?.scrollIntoView({ behavior: 'smooth' });
  }, [state]);

  const irPara = (ano) => document.getElementById(`edicao-${ano}`)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Box className={styles.page}>
      <Box component="section" className={styles.hero}>
        <Box className={styles.heroTexto}>
          <span className={styles.eyebrow}>Prêmio Infosfera · Vencedores</span>
          <Typography component="h1" className={styles.titulo}>
            Quem transformou a informação pública em <em>resultado</em>
          </Typography>
          <Typography className={styles.lead}>
            {totalPremiadas} boas práticas premiadas em {edicoes.length} edições, de prefeituras, tribunais, universidades e defensorias de todo o país.
          </Typography>
        </Box>
        <Esfera ano={edicoes[0].ano} className={styles.esfera} />
      </Box>

      <nav className={styles.anos} aria-label="Edições">
        {edicoes.map((e) => (
          <button key={e.ano} type="button" className={styles.ano} onClick={() => irPara(e.ano)}>
            {e.ano}
          </button>
        ))}
      </nav>

      {edicoes.map((edicao) => (
        <SecaoEdicao key={edicao.ano} edicao={edicao} />
      ))}
    </Box>
  );
};

export default Vencedores;
