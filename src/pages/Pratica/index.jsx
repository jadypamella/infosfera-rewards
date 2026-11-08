import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import styles from '../Regulamento/index.module.css';
import { buscarPratica } from '../../data/edicoes';
import { Selo, SeloPremio } from '../../components/CardPratica';
import NotFound from '../NotFound';

const caixa = { bgcolor: '#fff', borderRadius: 4, boxShadow: 'var(--shadow-card)', overflow: 'hidden' };

const Linha = ({ rotulo, children }) => (
  <Typography sx={{ fontSize: 14, color: '#555', lineHeight: 1.6 }}>
    <strong style={{ color: '#333' }}>{rotulo}:</strong> {children}
  </Typography>
);

const Pratica = () => {
  const { ano, slug } = useParams();
  const achado = buscarPratica(Number(ano), slug);
  if (!achado) return <NotFound />;
  const { edicao, pratica: p } = achado;

  return (
    <Box className={styles.page} sx={{ pt: { xs: 12, md: 16 }, pb: 10 }}>
      <Box className={styles.container}>
        <Button component={Link} to="/vencedores" startIcon={<ArrowBackIcon />} sx={{ textTransform: 'none', color: '#2d2e82', fontWeight: 600, mb: 3, minHeight: 44 }}>
          Vencedores
        </Button>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' }, gap: 4, alignItems: 'start' }}>
          <Box>
            <Typography component="h1" sx={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: { xs: 22, md: 28 }, lineHeight: 1.3, color: '#333' }}>
              {p.titulo}
            </Typography>
            <Box className={styles.underline} sx={{ mb: 2.5 }} />
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2.5 }}>
              {edicao.resultadoDivulgado && <SeloPremio p={p} ano={edicao.ano} />}
              {p.esfera && <Selo label={p.esfera} cor={p.esferaCor} />}
              {p.status && <Selo label={p.status} cor={p.statusCor} />}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Linha rotulo="Entidade responsável">{p.entidade}</Linha>
              {p.equipe && <Linha rotulo="Equipe">{p.equipe}</Linha>}
              {p.categorias?.length > 0 && <Linha rotulo="Categorias da Gestão da Informação">{p.categorias.join(', ')}</Linha>}
              <Linha rotulo="Edição">Prêmio Infosfera {edicao.ano}{edicao.cerimonia?.local ? `, cerimônia em ${edicao.cerimonia.local}` : ''}</Linha>
            </Box>
            {p.link && (
              <Button href={p.link} target="_blank" rel="noopener noreferrer" variant="contained" endIcon={<OpenInNewIcon />} className={styles.btnPrimary} sx={{ mt: 3 }}>
                Ver a prática completa na Plataforma Infosfera
              </Button>
            )}
          </Box>

          {p.capa && (
            <Box sx={{ ...caixa, p: 2 }}>
              <Box component="img" src={p.capa} alt={`Capa da prática ${p.titulo}`} sx={{ width: '100%', display: 'block', borderRadius: 2 }} />
            </Box>
          )}
        </Box>

        {p.fotoPremio && (
          <Box sx={{ mt: 6 }}>
            <Typography component="h2" sx={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: '#333', mb: 2 }}>Entrega do prêmio</Typography>
            <Box sx={caixa}>
              <Box component="img" src={p.fotoPremio} alt={`Entrega do prêmio: ${p.titulo}`} sx={{ width: '100%', maxHeight: 560, objectFit: 'cover', display: 'block' }} />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Pratica;
