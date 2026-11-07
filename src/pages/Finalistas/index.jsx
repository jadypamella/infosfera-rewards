import { Link } from 'react-router-dom';
import { Box, Typography, Button, Chip } from '@mui/material';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import styles from '../Regulamento/index.module.css';
import bannerImage from '../../assets/banner.jpeg';

const PDF_URL = 'docs/premio-infosfera-2026-orientacoes-finalistas.pdf';
const TEMPLATE_URL = 'docs/premio-infosfera-2026-template-apresentacao.pptx';
const EMAIL = 'boaspraticas@infosfera.inf.br';



const ENAJUS_URL = 'https://enajus.org.br/programacao/';

const programacao = [
  { hora: '9h às 14h', t: 'Credenciamento e Espaço InfosferaCast', d: 'No local do evento. Identifique-se como Representante de Boa Prática. No espaço do InfosferaCast, os representantes gravam uma breve entrevista sobre a prática.' },
  { hora: '14h', t: 'Sessão de Boas Práticas', d: 'Apresentação das boas práticas finalistas em formato de pitch, de 5 a 6 minutos cada, com gravação.' },
  { hora: '16h', t: 'Cerimônia de Premiação', d: 'Entrega do Grande Prêmio Infosfera, dos Destaques Regional e Municipal e das Menções Honrosas.' },
  { hora: '18h', t: 'Coffee de Encerramento', d: 'Encerramento do Prêmio Infosfera 2026.' },
];


const pitch = [
  { n: '1', t: 'O Problema (Por Quê?)', d: 'O primeiro minuto descreve o desafio ou a necessidade que motivou a prática. Deixe claros o contexto e a relevância do problema.' },
  { n: '2', t: 'A Prática e os Resultados (O Quê?)', d: 'A maior parte do tempo (2 a 3 minutos) mostra a prática em ação, com resultados e evidências de impacto: melhoria do serviço, economia, satisfação. Enfatize o impacto social, econômico ou político.' },
  { n: '3', t: 'Transferibilidade e Futuro', d: 'No final, destaque a capacidade de a prática ser replicada, escalada e mantida, isto é, sua sustentabilidade.' },
];

const visuais = [
  'Conteúdo visual: use o máximo de gráficos, imagens e vídeos curtos que mostrem a prática em operação. O visual deve falar mais alto que o texto.',
  'Texto mínimo: reduza o texto dos slides a títulos e palavras-chave.',
  'Suporte técnico: haverá suporte para a projeção. Use o template oficial do evento para manter a padronização visual.',
];

const premios = [
  'Grande Prêmio Infosfera: à prática de maior expressão',
  'Prêmio Destaque Regional',
  'Prêmio Destaque Municipal',
  'Menções Honrosas',
];

const beneficios = [
  'Certificado de apresentação de boa prática (se apresentada em sessão prevista na programação)',
  'Certificado de premiação',
  'Divulgação no site do Prêmio Infosfera',
  'Divulgação em mídias sociais e nos canais do Infosfera',
  'Premiação com distinção e menção honrosa, conforme as categorias do Regulamento (artigo 17)',
];

const DownloadButtons = ({ onLight = false }) => (
  <Box className={styles.heroActions}>
    <Button variant="contained" size="large" href={PDF_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary} startIcon={<DownloadOutlinedIcon />}>
      Baixar Orientações
    </Button>
    <Button variant="outlined" size="large" href={TEMPLATE_URL} download className={styles.btnOutline} sx={onLight ? { color: '#2d2e82 !important', border: '2px solid #2d2e82 !important', '&:hover': { background: 'rgba(45,46,130,0.08) !important' } } : undefined} startIcon={<DownloadOutlinedIcon />}>
      Baixar Template
    </Button>
  </Box>
);

const CheckList = ({ items }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
    {items.map((item) => (
      <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
        <CheckCircleOutlineIcon sx={{ color: '#1abc9c', mt: '2px' }} />
        <Typography className={styles.presentationText} sx={{ m: 0 }}>{item}</Typography>
      </Box>
    ))}
  </Box>
);

const Finalistas = () => (
  <Box className={styles.page}>

    <Box className={styles.hero} style={{ backgroundImage: `url(${bannerImage})` }}>
      <Box className={styles.heroOverlay} />
      <Box className={styles.heroContent}>
        <Chip label="Edição 2026 · Cerimônia em 5 de novembro" className={styles.heroBadge} size="small" />
        <Typography component="h1" className={styles.heroTitle}>Programação e Orientações aos Finalistas</Typography>
        <Typography className={styles.heroSubtitle}>Programação do dia 5 de novembro e orientações para os representantes das boas práticas finalistas sobre a Sessão de Boas Práticas e a Cerimônia de Premiação, em Goiânia.</Typography>
        <DownloadButtons />
      </Box>
    </Box>

    <Box className={styles.section}>
      <Box className={styles.container}>
        <Box className={styles.sectionHeader}>
          <Typography variant="h2" className={styles.sectionTitle}>Parabéns pela Seleção</Typography>
          <Box className={styles.underline} />
        </Box>
        <Box className={styles.presentationBlock}>
          <Typography className={styles.presentationText}>
            A Comissão Organizadora do Prêmio Infosfera 2026 parabeniza você e a sua organização pela seleção da boa prática como finalista desta edição, resultado de um criterioso processo de avaliação baseado nos critérios do Regulamento.
          </Typography>
          <Box className={styles.highlightBox}>
            <InfoOutlinedIcon sx={{ color: '#2d2e82' }} />
            <Typography variant="body2">
              As apresentações das boas práticas finalistas e a cerimônia de premiação são <strong>exclusivamente presenciais</strong>, requisito regimental para a outorga do Prêmio.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>

    <Box className={`${styles.section} ${styles.sectionLight}`}>
      <Box className={styles.container}>
        <Box className={styles.sectionHeader}>
          <Typography variant="h2" className={styles.sectionTitle}>Programação · 5 de Novembro de 2026</Typography>
          <Box className={styles.underline} />
          <Typography className={styles.sectionSubtitle}>SJ Premium Hotels Goiânia. Rua 22, 122, St. Oeste, Goiânia (GO).</Typography>
        </Box>
        <Box className={styles.stepsRow}>
          {programacao.map((item) => (
            <Box key={item.hora} className={styles.stepItem}>
              <Box className={styles.stepBadge} sx={{ width: 'auto !important', minWidth: 116, px: 1.5, borderRadius: '24px !important', whiteSpace: 'nowrap' }}>{item.hora}</Box>
              <Box className={styles.stepBody}>
                <Typography className={styles.stepTitle}>{item.t}</Typography>
                <Typography className={styles.stepDesc}>{item.d}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Typography className={styles.sectionSubtitle} sx={{ mt: 4, textAlign: 'center' }}>
          O Prêmio acontece durante o EnAJUS. Veja a <a href={ENAJUS_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#2d2e82', fontWeight: 700, textDecoration: 'underline' }}>programação completa do EnAJUS</a>.
        </Typography>
      </Box>
    </Box>

    <Box className={styles.section}>
      <Box className={styles.container}>
        <Box className={styles.sectionHeader}>
          <Typography variant="h2" className={styles.sectionTitle}>1. Credenciamento</Typography>
          <Box className={styles.underline} />
        </Box>
        <Box className={styles.presentationBlock}>
          <Typography className={styles.presentationText}>
            Chegue com antecedência ao início da sessão de apresentações, para localizar a sala e testar o material de projeção. O credenciamento acontece no local do evento, das 9h às 14h.
          </Typography>
          <Typography className={styles.presentationText}>
            <strong>Identificação:</strong> na mesa de credenciamento, identifique-se como Representante de Boa Prática selecionada para o Prêmio Infosfera 2026. Isso agiliza a retirada do material e a orientação para a sala.
          </Typography>
          <Box className={styles.highlightBox}>
            <InfoOutlinedIcon sx={{ color: '#2d2e82' }} />
            <Typography variant="body2">
              O Ecossistema Infosfera inclui o <strong>InfosferaCast</strong>. Os representantes de cada prática serão direcionados ao espaço do podcast para uma breve entrevista e apresentação sucinta da prática.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>

    <Box className={`${styles.section} ${styles.sectionLight}`}>
      <Box className={styles.container}>
        <Box className={styles.sectionHeader}>
          <Typography variant="h2" className={styles.sectionTitle}>2. Sessão de Apresentação</Typography>
          <Box className={styles.underline} />
          <Typography className={styles.sectionSubtitle}>A prática é apresentada em formato de pitch: uma narrativa envolvente de 5 a 6 minutos, feita por um único representante, que valide o valor, a efetividade e o futuro da iniciativa.</Typography>
        </Box>
        <Box className={styles.stepsRow}>
          {pitch.map((step) => (
            <Box key={step.n} className={styles.stepItem}>
              <Box className={styles.stepBadge}>{step.n}</Box>
              <Box className={styles.stepBody}>
                <Typography className={styles.stepTitle}>{step.t}</Typography>
                <Typography className={styles.stepDesc}>{step.d}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className={styles.presentationBlock} sx={{ mt: 4 }}>
          <Typography className={styles.presentationText}><strong>Uso de recursos visuais</strong></Typography>
          <CheckList items={visuais} />
          <Typography className={styles.presentationText} sx={{ mt: 3 }}>
            <strong>Gravação:</strong> a sessão, aberta ao público, é gravada. O pitch, apoiado em apresentação PowerPoint, será disponibilizado nas mídias sociais e nos canais do Infosfera e do InfosferaCast, e todo o material será compartilhado com os representantes.
          </Typography>
          <Box className={styles.highlightBox}>
            <MailOutlineIcon sx={{ color: '#2d2e82' }} />
            <Typography variant="body2">
              <strong>Envio da apresentação:</strong> nos moldes do template oficial, até <strong>4 de novembro de 2026</strong>, nos formatos PPTX e PDF, para <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>

    <Box className={styles.section}>
      <Box className={styles.container}>
        <Box className={styles.sectionHeader}>
          <Typography variant="h2" className={styles.sectionTitle}>3. Cerimônia de Premiação</Typography>
          <Box className={styles.underline} />
          <Typography className={styles.sectionSubtitle}>Os representantes das práticas finalistas são esperados em 5 de novembro, a partir das 16h. Ao final, às 18h, há um coffee de encerramento. Antes de entrar no auditório, procure a equipe de organização.</Typography>
        </Box>
        <Box className={styles.presentationBlock}>
          <Typography className={styles.presentationText}>Conforme o artigo 17 do Regulamento, serão concedidos:</Typography>
          <CheckList items={premios} />
        </Box>
      </Box>
    </Box>

    <Box className={`${styles.section} ${styles.sectionLight}`}>
      <Box className={styles.container}>
        <Box className={styles.sectionHeader}>
          <Typography variant="h2" className={styles.sectionTitle}>4. Benefícios e Certificação</Typography>
          <Box className={styles.underline} />
          <Typography className={styles.sectionSubtitle}>Autores e coautores das boas práticas finalistas terão direito a:</Typography>
        </Box>
        <Box className={styles.presentationBlock}>
          <CheckList items={beneficios} />
        </Box>
      </Box>
    </Box>

    <Box className={styles.section}>
      <Box className={styles.container}>
        <Box className={styles.sectionHeader}>
          <Typography variant="h2" className={styles.sectionTitle}>5. Dúvidas</Typography>
          <Box className={styles.underline} />
          <Typography className={styles.sectionSubtitle}>
            Escreva para <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. A lista de finalistas está na página <Link to="/vencedores">Vencedores</Link>.
          </Typography>
        </Box>
        <Box className={styles.ctaCenter}>
          <DownloadButtons onLight />
        </Box>
      </Box>
    </Box>

  </Box>
);

export default Finalistas;
