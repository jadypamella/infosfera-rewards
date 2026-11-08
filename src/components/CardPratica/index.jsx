import { Link } from 'react-router-dom';
import { Box, Typography, Card, CardContent } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import { NIVEIS, caminhoDaPratica } from '../../data/edicoes';

export const Selo = ({ label, cor }) => (
  <Box component="span" sx={{ bgcolor: cor || '#2d2e82', color: '#fff', fontSize: 13, fontWeight: 500, px: 1.75, py: 0.4, borderRadius: '30px', lineHeight: 1.4 }}>
    {label}
  </Box>
);

export const SeloPremio = ({ p, ano }) => (
  <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, background: NIVEIS[p.nivel || 'finalista'].cor, color: '#fff', fontSize: 13, fontWeight: 600, px: 1.75, py: 0.4, borderRadius: '30px', lineHeight: 1.4 }}>
    <EmojiEventsIcon sx={{ fontSize: 15 }} /> {ano} · {p.premio || 'Finalista'}
  </Box>
);

const CardPratica = ({ p, ano, mostrarPremio }) => {
  const imagem = p.fotoPremio || p.capa;

  return (
    <Card
      component={Link}
      to={caminhoDaPratica(ano, p)}
      sx={{
        height: '100%', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit',
        borderRadius: 'var(--radius-card)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', transition: 'transform .2s, box-shadow .2s',
        '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' },
      }}
    >
      {imagem && (
        <Box sx={{ position: 'relative', aspectRatio: '3 / 2', flexShrink: 0, bgcolor: '#f3f5f9', overflow: 'hidden' }}>
          <Box
            component="img"
            src={imagem}
            alt={p.fotoPremio ? `Entrega do prêmio: ${p.titulo}` : p.titulo}
            loading="lazy"
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: p.fotoPremio ? 'cover' : 'contain', objectPosition: 'center 40%' }}
          />
        </Box>
      )}
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1.25, p: 3 }}>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {mostrarPremio && <SeloPremio p={p} ano={ano} />}
          {p.esfera && <Selo label={p.esfera} cor={p.esferaCor} />}
          {p.status && <Selo label={p.status} cor={p.statusCor} />}
        </Box>
        <Typography component="h3" sx={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 17, lineHeight: 1.35, color: '#333' }}>
          {p.titulo}
        </Typography>
        <Typography sx={{ fontSize: 14, color: '#555', lineHeight: 1.5 }}>
          <strong style={{ color: '#333' }}>Entidade responsável:</strong> {p.entidade}
        </Typography>
        <Box sx={{ mt: 'auto', pt: 1, display: 'flex', alignItems: 'center', gap: 0.5, color: '#2d2e82', fontWeight: 700, fontSize: 14 }}>
          Ver a ficha da prática <ArrowForwardIcon sx={{ fontSize: 18 }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardPratica;
