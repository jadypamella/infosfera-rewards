import { Box } from '@mui/material';

const Divisor = () => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '2.5rem',
  }}>
    <Box sx={{
      width: '80px',
      height: '3px',
      borderRadius: '0 0 3px 3px',
      background: 'linear-gradient(90deg, var(--luz-tinta), var(--luz-esfera))',
    }} />
  </Box>
);

export default Divisor;
