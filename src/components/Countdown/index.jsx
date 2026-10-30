import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './index.module.css';

const DEADLINE = new Date('2026-11-05T16:00:00-03:00');

const pad = (n) => String(n).padStart(2, '0');

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calc = () => {
      const diff = DEADLINE - Date.now();
      if (diff <= 0) return setTimeLeft(null);
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000)  / 60000),
        seconds: Math.floor((diff % 60000)    / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) return null;

  const units = [
    { value: timeLeft.days,    label: 'dias' },
    { value: timeLeft.hours,   label: 'horas' },
    { value: timeLeft.minutes, label: 'min' },
    { value: timeLeft.seconds, label: 'seg' },
  ];

  return (
    <Box className={styles.wrapper}>
      <Typography className={styles.label}>Cerimônia de premiação em</Typography>
      <Box className={styles.units}>
        {units.map(({ value, label }, i) => (
          <Box key={label} className={styles.unitGroup}>
            <Box className={styles.unitBox}>
              <Typography className={styles.unitValue}>{pad(value)}</Typography>
              <Typography className={styles.unitLabel}>{label}</Typography>
            </Box>
            {i < units.length - 1 && <Typography className={styles.sep}>:</Typography>}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Countdown;
