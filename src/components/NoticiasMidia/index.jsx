import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const NoticiasMidia = ({ noticias, mostrarEdicao = false }) => (
  <Grid container spacing={3}>
    {noticias.map((n) => (
      <Grid key={n.url} size={{ xs: 12, md: 6 }}>
        <Card component="a" href={n.url} target="_blank" rel="noopener noreferrer" sx={{ display: 'block', height: '100%', textDecoration: 'none', borderRadius: 4, overflow: 'hidden', boxShadow: 'var(--shadow-card)', transition: 'transform .2s, box-shadow .2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 10px 28px rgba(45,46,130,0.18)' } }}>
          {n.imagem && (
            <Box sx={{ position: 'relative', aspectRatio: '16 / 9', bgcolor: '#e9eaf5' }}>
              <Box component="img" src={n.imagem} alt="" loading="lazy" sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          )}
          <CardContent sx={{ p: 3 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#0e8a68', mb: 1 }}>
              {mostrarEdicao ? `${n.edicao} · ${n.veiculo}` : n.veiculo}
            </Typography>
            <Typography sx={{ fontWeight: 700, color: '#2d2e82', lineHeight: 1.35, mb: 1.5 }}>{n.titulo}</Typography>
            <Box sx={{ color: '#4b4c6b', fontSize: 14, display: 'flex', alignItems: 'center', gap: 0.5 }}>
              Ler a notícia <OpenInNewIcon sx={{ fontSize: 16 }} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default NoticiasMidia;
