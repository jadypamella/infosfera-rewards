import { Box, Typography, Card, CardContent } from '@mui/material';

import { NIVEIS } from '../../data/edicoes';
import { ArrowForward as ArrowForwardIcon, EmojiEvents as EmojiEventsIcon } from '../../icones';

// Badge fills come from the platform data and some are light, so the text colour
// follows the fill: dark ink on light fills, white on dark ones (WCAG luminance).
const luminancia = (hex) => {
  const [r, g, b] = hex.match(/[0-9a-f]{2}/gi).map((h) => {
    const v = parseInt(h, 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const TINTA_SELO = '#14153d';
const textoSobre = (cor) => {
  if (!/^#[0-9a-f]{6}$/i.test(cor)) return '#fff';
  const l = luminancia(cor);
  return (l + 0.05) / (luminancia(TINTA_SELO) + 0.05) > 1.05 / (l + 0.05) ? TINTA_SELO : '#fff';
};

const Selo = ({ label, cor }) => (
  <Box component="span" sx={{ bgcolor: cor || 'var(--luz-botao)', color: cor ? textoSobre(cor) : 'var(--luz-botao-texto)', fontSize: 12, fontWeight: 600, px: 1.5, py: 0.5, borderRadius: 999, lineHeight: 1.4 }}>
    {label}
  </Box>
);

const comLink = (link) => (link
  ? { component: 'a', href: link, target: '_blank', rel: 'noopener noreferrer' }
  : {});

const CardPratica = ({ p, ano, mostrarPremio }) => {
  const nivel = NIVEIS[p.nivel || 'finalista'];
  const imagem = p.fotoPremio || p.capa;

  return (
    <Card
      {...comLink(p.link)}
      sx={{
        height: '100%', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit',
        borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px var(--luz-sombra)', transition: 'transform .2s, box-shadow .2s',
        ...(p.link && { '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 10px 28px var(--luz-sombra)' } }),
      }}
    >
      {mostrarPremio && (
        <Box sx={{ background: nivel.cor, color: '#fff', fontWeight: 800, fontSize: 13, letterSpacing: '0.05em', textTransform: 'uppercase', px: 2.5, py: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
          <EmojiEventsIcon sx={{ fontSize: 18 }} /> {ano} · {p.premio || 'Finalista'}
        </Box>
      )}
      {imagem && (
        <Box sx={{ position: 'relative', aspectRatio: '3 / 2', flexShrink: 0, bgcolor: 'var(--luz-nevoa-2)', borderBottom: '3px solid var(--luz-esfera)', overflow: 'hidden' }}>
          <Box
            component="img"
            src={imagem}
            alt={p.fotoPremio ? `Entrega do prêmio: ${p.titulo}` : p.titulo}
            loading="lazy"
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: p.fotoPremio ? 'cover' : 'contain', objectPosition: 'center 40%' }}
          />
        </Box>
      )}
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1.5, p: 3 }}>
        {(p.esfera || p.status) && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {p.esfera && <Selo label={p.esfera} cor={p.esferaCor} />}
            {p.status && <Selo label={p.status} cor={p.statusCor} />}
          </Box>
        )}
        <Typography component="h3" sx={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, lineHeight: 1.35, color: 'var(--luz-tinta)' }}>
          {p.titulo}
        </Typography>
        <Typography sx={{ fontSize: 14, color: 'var(--luz-texto)', lineHeight: 1.5 }}>
          <strong style={{ color: 'var(--luz-tinta)' }}>Entidade responsável:</strong> {p.entidade}
        </Typography>
        {p.equipe && (
          <Typography sx={{ fontSize: 13, color: 'var(--luz-texto)', lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--luz-tinta)' }}>Equipe:</strong> {p.equipe}
          </Typography>
        )}
        {p.categorias?.length > 0 && (
          <Typography sx={{ fontSize: 13, color: 'var(--luz-tinta)', lineHeight: 1.5 }}>
            {p.categorias.join(' · ')}
          </Typography>
        )}
        {p.link && (
          <Box sx={{ mt: 'auto', pt: 1, display: 'flex', alignItems: 'center', gap: 0.5, color: 'var(--luz-esfera-texto)', fontWeight: 700, fontSize: 14 }}>
            Conheça a prática <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CardPratica;
