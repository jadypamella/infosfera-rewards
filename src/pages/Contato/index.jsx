import { useState } from 'react';
import { Typography, Box, Card, CardContent, TextField, Button } from '@mui/material';
import CtaVerde from '../../components/CtaVerde';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

import styles from './index.module.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construir o mailto com os dados do formulário
    const mailtoLink = `mailto:contato@infosfera.inf.br?subject=${encodeURIComponent(formData.assunto)}&body=${encodeURIComponent(
      `Nome: ${formData.nome}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.mensagem}`
    )}`;
    
    // Abrir o cliente de e-mail
    window.location.href = mailtoLink;
  };

  return (
    <Box className={styles.contatoPage}>
      {/* Banner */}
      {/* Seção de Contato */}
      <Box className={styles.section}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" component="h1" className={styles.sectionTitle}>
              Entre em Contato
            </Typography>
            <Box className={styles.titleUnderline} />
            <Typography className={styles.sectionSubtitle}>
              Tem alguma dúvida sobre o Prêmio Infosfera? Estamos aqui para ajudar!
            </Typography>
          </Box>

          <Box className={styles.contentWrapper}>
            {/* Card de Informações */}
            <Card className={styles.infoCard}>
              <CardContent>
                <Box className={styles.iconWrapper}>
                  <EmailIcon sx={{ fontSize: 60 }} />
                </Box>
                <Typography variant="h5" component="h2" className={styles.infoTitle}>
                  Fale Conosco
                </Typography>
                <Typography className={styles.infoText}>
                  Envie sua mensagem através do formulário ao lado ou entre em contato diretamente pelo e-mail:
                </Typography>
                <Box className={styles.emailBox}>
                  <Typography className={styles.emailText}>
                    <a href="mailto:contato@infosfera.inf.br" className={styles.emailLink}>
                      contato@infosfera.inf.br
                    </a>
                  </Typography>
                </Box>
                <Typography className={styles.responseTime}>
                  Responderemos o mais breve possível
                </Typography>
              </CardContent>
            </Card>

            {/* Formulário de Contato */}
            <Card className={styles.formCard}>
              <CardContent>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <TextField
                    fullWidth
                    required
                    name="nome"
                    label="Nome completo"
                    variant="outlined"
                    value={formData.nome}
                    onChange={handleChange}
                    className={styles.textField}
                  />

                  <TextField
                    fullWidth
                    required
                    name="email"
                    label="Seu e-mail"
                    type="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.textField}
                  />

                  <TextField
                    fullWidth
                    required
                    name="assunto"
                    label="Assunto"
                    variant="outlined"
                    value={formData.assunto}
                    onChange={handleChange}
                    className={styles.textField}
                  />

                  <TextField
                    fullWidth
                    required
                    name="mensagem"
                    label="Mensagem"
                    variant="outlined"
                    multiline
                    rows={6}
                    value={formData.mensagem}
                    onChange={handleChange}
                    className={styles.textField}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    className={styles.submitButton}
                    fullWidth
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
      
      <CtaVerde />
    </Box>
  );
};

export default Contato;