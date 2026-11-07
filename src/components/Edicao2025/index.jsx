import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

import styles from '../../pages/Regulamento/index.module.css';
import { categorias2025 } from '../../data/premiadas2025';

const COR = {
  grandePremio: 'linear-gradient(90deg, #c99a2e, #e8c25a)',
  boasPraticas: '#2d2e82',
  destaqueParana: '#2d2e82',
  mencoesHonrosas: '#0e8a68',
};

const praticas = Object.entries(categorias2025).flatMap(([chave, c]) =>
  c.vencedores.map((v) => ({ ...v, premio: c.titulo, cor: COR[chave] })));

const Edicao2025 = () => (
  <Box component="section" id="edicao-2025" className={styles.section} sx={{ bgcolor: '#f4f5fb' }}>
    <Box className={styles.container}>
      <Box className={styles.sectionHeader}>
        <Typography variant="h2" className={styles.sectionTitle}>Edição 2025</Typography>
        <Box className={styles.underline} />
      </Box>
      <Typography sx={{ textAlign: 'center', mb: 4, color: '#4b4c6b' }}>
        Práticas premiadas na primeira edição do Prêmio Infosfera, em 2025.
      </Typography>
      <Grid container spacing={3}>
        {praticas.map((p) => (
          <Grid key={p.nomes} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, overflow: 'hidden', boxShadow: '0 4px 18px rgba(45,46,130,0.10)' }}>
              <Box sx={{ background: p.cor, color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', px: 2.5, py: 1 }}>
                2025 · {p.premio}
              </Box>
              {p.foto && (
                <Box sx={{ position: 'relative', aspectRatio: '3 / 2', bgcolor: '#e9eaf5' }}>
                  <Box component="img" src={p.foto} alt={p.vinculo} loading="lazy" sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
                </Box>
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontWeight: 700, color: '#2d2e82', mb: 1.5, lineHeight: 1.35 }}>{p.nomes}</Typography>
                <Typography variant="body2" sx={{ color: '#4b4c6b' }}><strong>Entidade responsável:</strong> {p.vinculo}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default Edicao2025;
