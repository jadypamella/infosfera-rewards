import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { OpenInNew as OpenInNewIcon } from '../../icones';

const NoticiasMidia = ({ noticias, mostrarEdicao = false }) => (
  <Grid container spacing={3}>
    {noticias.map((n) => (
      <Grid key={n.url} size={{ xs: 12, md: 6 }}>
        <Card component="a" href={n.url} target="_blank" rel="noopener noreferrer" sx={{ display: 'block', height: '100%', textDecoration: 'none', borderRadius: 3, overflow: 'hidden', boxShadow: '0 4px 18px var(--luz-sombra)', transition: 'transform .2s, box-shadow .2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 10px 28px var(--luz-sombra)' } }}>
          {n.imagem && (
            <Box sx={{ position: 'relative', aspectRatio: '16 / 9', bgcolor: 'var(--luz-nevoa-2)' }}>
              <Box component="img" src={n.imagem} alt="" loading="lazy" sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          )}
          <CardContent sx={{ p: 3 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--luz-esfera-texto)', mb: 1 }}>
              {mostrarEdicao ? `${n.edicao} · ${n.veiculo}` : n.veiculo}
            </Typography>
            <Typography sx={{ fontWeight: 700, color: 'var(--luz-tinta)', lineHeight: 1.35, mb: 1.5 }}>{n.titulo}</Typography>
            <Box sx={{ color: 'var(--luz-texto-suave)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 0.5 }}>
              Ler a notícia <OpenInNewIcon sx={{ fontSize: 16 }} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default NoticiasMidia;
