import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import styles from './index.module.css';
import { praticasOrdenadas } from '../../data/edicoes';
import CardPratica from '../CardPratica';
import GaleriaCerimonia from '../GaleriaCerimonia';

const PLATFORM_URL = 'https://boaspraticas.infosfera.inf.br/';

const onde = (cerimonia) => [cerimonia?.data, cerimonia?.local].filter(Boolean).join(' · ');

const fatos = (edicao) => {
  const { praticas, cerimonia, inscricoes, resultadoDivulgado } = edicao;
  const premiadas = praticas.filter((p) => p.premio).length;
  return [
    cerimonia && `Cerimônia · ${onde(cerimonia)}`,
    inscricoes && `${inscricoes} inscrições`,
    resultadoDivulgado ? `${premiadas} premiadas` : `${praticas.length} finalistas`,
  ].filter(Boolean);
};

const Destaque = ({ p, ano }) => (
  <Box
    component={p.link ? 'a' : 'div'}
    href={p.link}
    target={p.link ? '_blank' : undefined}
    rel={p.link ? 'noopener noreferrer' : undefined}
    className={styles.destaque}
  >
    <Box className={styles.destaqueFoto}>
      <img src={p.fotoPremio || p.capa} alt={`Entrega do Grande Prêmio: ${p.titulo}`} loading="lazy" />
    </Box>
    <Box className={styles.destaqueTexto}>
      <span className={styles.destaqueSelo}>Grande Prêmio {ano}</span>
      <Typography component="h3" className={styles.destaqueTitulo}>{p.titulo}</Typography>
      <Typography className={styles.destaqueEntidade}>{p.entidade}</Typography>
      {p.link && (
        <span className={styles.destaqueLink}>Conheça a prática <ArrowForwardIcon sx={{ fontSize: 18 }} /></span>
      )}
    </Box>
  </Box>
);

const SecaoEdicao = ({ edicao }) => {
  const { ano, listaLiberada, resultadoDivulgado, praticas, galeria, cerimonia } = edicao;
  const mostrar = listaLiberada && praticas.length > 0;
  const lista = praticasOrdenadas(edicao);
  const grande = resultadoDivulgado ? lista.find((p) => p.nivel === 'grande') : null;
  const demais = lista.filter((p) => p !== grande);

  return (
    <>
      <Box component="section" id={`edicao-${ano}`} className={styles.secao}>
        <Box className={styles.inner}>
          <header className={styles.cabecalho}>
            <Typography component="h2" className={styles.ano}>{ano}</Typography>
            <ul className={styles.fatos}>
              {fatos(edicao).map((f) => <li key={f}>{f}</li>)}
            </ul>
          </header>

          {!mostrar ? (
            <Box className={styles.aviso}>
              <Typography>
                A relação das boas práticas finalistas será divulgada aqui e na{' '}
                <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer">Plataforma Infosfera</a>. As distinções serão entregues na cerimônia{cerimonia ? ` de ${onde(cerimonia)}` : ''}.
              </Typography>
              <Button component={Link} to="/programacao" variant="contained" endIcon={<ArrowForwardIcon />} className={styles.botao}>
                Ver a Programação
              </Button>
            </Box>
          ) : (
            <>
              {grande && <Destaque p={grande} ano={ano} />}
              <Grid container spacing={3}>
                {demais.map((p) => (
                  <Grid key={`${p.entidade}-${p.titulo}`} size={{ xs: 12, sm: 6, md: 4 }}>
                    <CardPratica p={p} ano={ano} mostrarPremio={resultadoDivulgado} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Box>
      </Box>
      {mostrar && resultadoDivulgado && galeria?.length > 0 && <GaleriaCerimonia edicao={edicao} />}
    </>
  );
};

export default SecaoEdicao;
