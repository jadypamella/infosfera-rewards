import { useState, useEffect, useRef } from 'react';
import { Typography, Box, Grid, Card, CardContent, Stack, Button, Chip } from '@mui/material';

// Outlined icons - style matching boaspraticas.infosfera.inf.br
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

// Criteria icons
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';

// Steps icons
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Thematic icons (outlined)
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';

import styles from './index.module.css';
import bannerImage from '../../assets/banner.jpeg';
import CtaVerde from '../../components/CtaVerde';
import Countdown from '../../components/Countdown';
import labriskLogo from '../../assets/apoio/19.png';

// Realização — ordem dos arquivos: 1, 2, 3 (UFPR movida para Apoio, LabRisk entra)
const realizacaoLogoMap = {
  '1.jpg': { href: 'https://www.ufpr.br/portalufpr/noticias/categoria/infojus/', label: 'InfoJus UFPR' },
  '2.jpg': { href: 'https://ppggi.ufpr.br/', label: 'PPGGI UFPR' },
  '3.jpg': { href: 'https://ppga.unb.br/', label: 'PGAP UnB' },
};

// Apoio — excluidos: Doity (11.jpg), Giga (18.jpg), CRA-PR (13.jpg). UFPR adicionada (vem de realizacao/4.jpg)
const apoioLogoMap = {
  '1.jpg':  { href: 'https://www.mppr.mp.br/', label: 'Ministério Público do Paraná' },
  '10.jpg': { href: 'https://abissal.design/', label: 'Abissal Design Estratégico' },
  '12.jpg': { href: 'https://abades.com.br/', label: 'ABADES' },
  '14.jpg': { href: 'https://www.curitiba.pr.gov.br/', label: 'Prefeitura de Curitiba' },
  '15.jpg': { href: 'https://www.agenciacuritiba.com.br/', label: 'Agência Curitiba' },
  '16.jpg': { href: 'https://www.curitiba.pr.gov.br/', label: 'Você no Pinhão', large: true },
  '17.jpg': { href: 'https://www.tre-go.jus.br/', label: 'TRE Goiás' },
  '2.jpg':  { href: 'https://escolasuperior.mppr.mp.br/', label: 'Escola Superior do MPPR' },
  '3.jpg':  { href: 'https://www.gov.br/ibict/pt-br', label: 'IBICT' },
  '4.jpg':  { href: 'https://www.utfpr.edu.br/', label: 'UTFPR' },
  '5.jpg':  { href: 'https://www.cmc.pr.gov.br/', label: 'Câmara Municipal de Curitiba' },
  '6.jpg':  { href: 'https://www.cmc.pr.gov.br/escoladolegislativo/', label: 'Escola do Legislativo CMC' },
  '7.jpg':  { href: 'https://www.sebrae.com.br/', label: 'SEBRAE' },
  '8.jpg':  { href: 'https://www.ibepes.org.br/', label: 'IBEPES', large: true },
  '9.jpg':  { href: 'https://www.gov.br/capes/pt-br', label: 'CAPES' },
};

const realizacaoRaw = import.meta.glob('../../assets/realizacao/*.jpg', { eager: true, query: '?url', import: 'default' });
const apoioRaw = import.meta.glob('../../assets/apoio/*.jpg', { eager: true, query: '?url', import: 'default' });

const realizacaoLogos = [
  ...Object.entries(realizacaoRaw)
    .filter(([path]) => !path.endsWith('/4.jpg'))
    .map(([path, src]) => {
      const file = path.split('/').pop();
      return { src, ...(realizacaoLogoMap[file] || { href: '#', label: file }) };
    }),
  { src: labriskLogo, href: 'http://labrisk.unb.br/', label: 'LabRisk/UnB' },
];

// UFPR logo comes from realizacao/4.jpg (moved to apoio)
const ufprEntry = Object.entries(realizacaoRaw).find(([path]) => path.endsWith('/4.jpg'));
const ufprLogo = ufprEntry ? { src: ufprEntry[1], href: 'https://www.ufpr.br/', label: 'UFPR' } : null;

const apoioLogos = [
  ...Object.entries(apoioRaw)
    .filter(([path]) => !path.endsWith('/11.jpg') && !path.endsWith('/18.jpg') && !path.endsWith('/13.jpg'))
    .map(([path, src]) => {
      const file = path.split('/').pop();
      return { src, ...(apoioLogoMap[file] || { href: '#', label: file }) };
    }),
  ...(ufprLogo ? [ufprLogo] : []),
];

const PLATFORM_URL = 'https://boaspraticas.infosfera.inf.br/';

const Home = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardId = entry.target.dataset.id;
          setVisibleCards((prev) => new Set(prev).add(cardId));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cardRefs.current.forEach((card) => { if (card) observer.observe(card); });
    return () => observer.disconnect();
  }, []);



  const whoCanParticipate = [
    { icon: CorporateFareOutlinedIcon, title: 'Instituições Esferas e Poderes Públicos', desc: 'Órgãos e entidades dos Poderes Executivo, Legislativo e Judiciário em todos os níveis: Federal, Estadual, Distrital e Municipal.' },
    { icon: AccountBalanceOutlinedIcon, title: 'Estrutura Administrativa e Controle', desc: 'Administração Direta e Indireta, incluindo autarquias, fundações, empresas públicas, consórcios e sistemas de controle como Tribunais de Contas.' },
    { icon: GavelOutlinedIcon, title: 'Funções Essenciais à Justiça', desc: 'Instituições fundamentais como o Ministério Público, Advocacia Pública e Defensoria Pública de todo o país.' },
  ];

  const checkItems = [
    { num: '1', icon: <AssignmentOutlinedIcon sx={{ fontSize: 72, color: '#2d2e82' }} />, title: 'Relevância e Qualidade Técnica', text: 'Pertinência da solução frente aos problemas identificados, robustez metodológica, e alinhamento com os eixos temáticos, grau de inovação, conformidade técnica e normativa.', weight: '3,5' },
    { num: '2', icon: <TrendingUpOutlinedIcon sx={{ fontSize: 72, color: '#2d2e82' }} />, title: 'Impacto e Resultados', text: 'Eficácia da prática e benefícios gerados. Valor público com indicadores de desempenho, ganhos de eficiência e melhoria na qualidade dos processos ou serviços prestados.', weight: '4,0' },
    { num: '3', icon: <AutorenewOutlinedIcon sx={{ fontSize: 72, color: '#2d2e82' }} />, title: 'Replicabilidade e Sustentabilidade', text: 'Capacidade da prática de ser transferida ou adaptada para outros contextos e condições de continuidade no tempo.', weight: '3,0' },
  ];

  const howToSteps = [
    { num: '1', icon: <MoveToInboxOutlinedIcon sx={{ fontSize: 72, color: '#2d2e82' }} />, title: 'Plataforma de Boas Práticas', desc: 'Sua porta de entrada. Cadastre sua prática em boaspraticas.infosfera.inf.br. Gratuito e sem limite de submissões por órgão.' },
    { num: '2', icon: <VerifiedOutlinedIcon sx={{ fontSize: 72, color: '#2d2e82' }} />, title: 'Regra Fundamental', desc: 'Detalhe resultados e impacto para desbloquear a elegibilidade. A prática precisa atingir o Status Ouro na plataforma.' },
    { num: '3', icon: <CheckCircleOutlineIcon sx={{ fontSize: 72, color: '#2d2e82' }} />, title: 'Confirme o Interesse', desc: 'Após análise de admissibilidade (1–15 ago), confirme formalmente a participação na fase competitiva do Prêmio.' },
    { num: '4', icon: <EmojiEventsIcon sx={{ fontSize: 72, color: '#2d2e82' }} />, title: 'Reconhecimento', desc: 'Prêmio Infosfera de Boas Práticas em Gestão da Informação na Esfera Pública. Cerimônia em novembro de 2026, Goiânia/GO.' },
  ];

  const tematicas = [
    { title: 'Governança Digital e Eficiência', icon: <PolicyOutlinedIcon sx={{ fontSize: 40, color: '#2d2e82' }} />, desc: 'Exemplos: transformação digital, interoperabilidade, inovação em serviços públicos.' },
    { title: 'Gestão Estratégica da Informação', icon: <BarChartOutlinedIcon sx={{ fontSize: 40, color: '#2d2e82' }} />, desc: 'Exemplos: inteligência de dados, IA no setor público, gestão do conhecimento.' },
    { title: 'Transparência e Integridade', icon: <VisibilityOutlinedIcon sx={{ fontSize: 40, color: '#2d2e82' }} />, desc: 'Exemplos: transparência digital, inclusão digital, compliance governamental.' },
    { title: 'Preservação Digital e Memória Institucional', icon: <ArchiveOutlinedIcon sx={{ fontSize: 40, color: '#2d2e82' }} />, desc: 'Exemplos: memória institucional, curadoria de acervos, gestão de documentos digitais.' },
    { title: 'Segurança e Resiliência', icon: <SecurityOutlinedIcon sx={{ fontSize: 40, color: '#2d2e82' }} />, desc: 'Exemplos: segurança cibernética, confidencialidade, integridade de dados.' },
    { title: 'Outros Temas Correlatos', icon: <DevicesOutlinedIcon sx={{ fontSize: 40, color: '#2d2e82' }} />, desc: 'Exemplos: inovação em processos, cidades inteligentes, sustentabilidade digital.' },
  ];

  const awardCategories = [
    { icon: <EmojiEventsOutlinedIcon sx={{ fontSize: 44, color: '#fff' }} />, title: 'Grande Prêmio Infosfera', desc: 'A prática com maior pontuação global absoluta: o melhor da gestão da informação na esfera pública em 2026.', highlight: true },
    { icon: <PlaceOutlinedIcon sx={{ fontSize: 44, color: '#2d2e82' }} />, title: 'Destaque Regional (Goiás)', desc: 'Maior pontuação técnica entre instituições sediadas no Estado de Goiás, anfitrião do evento.' },
    { icon: <LocationCityOutlinedIcon sx={{ fontSize: 44, color: '#2d2e82' }} />, title: 'Destaque Municipal', desc: 'Distinção exclusiva para prefeituras, secretarias municipais e autarquias municipais.' },
    { icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 44, color: '#2d2e82' }} />, title: 'Menções Honrosas', desc: 'Até 7 práticas finalistas de mérito excepcional: criatividade, baixo custo ou superação tecnológica.' },
    { icon: <StarsOutlinedIcon sx={{ fontSize: 44, color: '#2d2e82' }} />, title: 'Referência em Boa Prática', desc: 'Categoria especial para iniciativas de notório impacto nacional fora do fluxo regular.' },
    { icon: <PublicOutlinedIcon sx={{ fontSize: 44, color: '#2d2e82' }} />, title: 'Escolha Popular', desc: 'Votação pública digital após divulgação dos finalistas. Única categoria acumulável com as demais.' },
  ];

  const timeline = [
    { period: '1 abr – 31 jul', label: 'Inscrições abertas', active: true },
    { period: '1–15 ago', label: 'Análise de admissibilidade', active: false },
    { period: '1–30 ago', label: 'Avaliação de mérito', active: false },
    { period: '10 set', label: 'Divulgação dos finalistas', active: false },
    { period: '5–9 out', label: 'Aclamação Pública', active: false },
    { period: '5 nov', label: 'Cerimônia · Goiânia/GO', active: false },
  ];

  const cardIds = useRef({
    sobre1: 'card-sobre-1', sobre2: 'card-sobre-2',
    ...whoCanParticipate.reduce((acc, _, i) => ({ ...acc, [`who-${i}`]: `who-${i}` }), {}),
    premiacao: 'premiacao-card',
    ...awardCategories.reduce((acc, _, i) => ({ ...acc, [`award-${i}`]: `award-${i}` }), {}),
    ...tematicas.reduce((acc, _, i) => ({ ...acc, [`tema-${i}`]: `tema-${i}` }), {}),
    ...howToSteps.reduce((acc, _, i) => ({ ...acc, [`step-${i}`]: `step-${i}` }), {}),
    ...checkItems.reduce((acc, _, i) => ({ ...acc, [`crit-${i}`]: `crit-${i}` }), {}),
  });

  return (
    <Box className={styles.homePage}>

      {/* ── HERO ── */}
      <Box className={styles.heroBanner} style={{ backgroundImage: `url(${bannerImage})` }}>
        <Box className={styles.heroOverlay} />
        <Box className={`${styles.contentContainer} ${styles.heroContentWrapper}`}>
          <Box className={styles.heroContent}>
            <Box className={styles.heroTextBlock}>
              <Chip label="Inscrições abertas · 1 abr – 31 jul 2026" className={styles.heroBadge} size="small" />
              <Typography className={styles.heroTitlePart1}>Prêmio Infosfera</Typography>
              <Typography className={styles.heroTitlePart2}>Boas Práticas em Gestão da Informação na Esfera Pública</Typography>
              <Typography className={styles.heroDescription}>
                Reconhecimento nacional de servidores, equipes e órgãos que transformam a administração pública por meio do desenvolvimento e aplicação de boas práticas em gestão da informação. Cerimônia em <strong>novembro de 2026 · Goiânia/GO</strong>.
              </Typography>
              <Box className={styles.heroActions}>
                <Button variant="contained" size="large" href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className={styles.heroCta} endIcon={<ArrowForwardIcon />}>
                  Inscreva sua prática agora
                </Button>
              </Box>
              <Countdown />
            </Box>
            <Box className={styles.heroDivider} />
          </Box>
        </Box>
      </Box>

      {/* ── SOBRE O PRÊMIO ── */}
      <Box className={styles.section}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Sobre o Prêmio</Typography>
            <Box className={styles.titleUnderline} />
          </Box>
          <Grid container spacing={3} columns={{ xs: 1, md: 4 }}>
            <Grid size={{ xs: 1, md: 2 }}>
              <Card ref={(el) => (cardRefs.current[0] = el)} data-id={cardIds.current.sobre1} className={`${styles.infoCard} ${visibleCards.has(cardIds.current.sobre1) ? styles.visible : ''}`}>
                <Box className={styles.cardAccentBar} />
                <CardContent sx={{ p: '2rem !important' }}>
                  <Box className={styles.cardHeader}>
                    <Box className={styles.cardIconWrapper}><StarOutlineIcon sx={{ fontSize: 28, color: '#2d2e82' }} /></Box>
                    <Typography variant="h3" className={styles.cardTitle}>O Reconhecimento</Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 600, mb: 1 }}>O Prêmio Infosfera celebra inovação comprovada na gestão pública.</Typography>
                  <Typography sx={{ color: '#555', lineHeight: 1.7 }}>Uma iniciativa do Núcleo de Pesquisa em Informação, Direito e Sociedade (Infojus/UFPR) e do Laboratório de Riscos, Privacidade, Segurança da Informação e Crises (LabRisk/UnB) para identificar e premiar solenemente práticas que transformam a administração pública brasileira, de pilotos a soluções plenamente estabelecidas.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 1, md: 2 }}>
              <Card ref={(el) => (cardRefs.current[1] = el)} data-id={cardIds.current.sobre2} className={`${styles.infoCard} ${visibleCards.has(cardIds.current.sobre2) ? styles.visible : ''}`}>
                <Box className={`${styles.cardAccentBar} ${styles.accentSecondary}`} />
                <CardContent sx={{ p: '2rem !important' }}>
                  <Box className={styles.cardHeader}>
                    <Box className={styles.cardIconWrapper}><LightbulbOutlinedIcon sx={{ fontSize: 28, color: '#1abc9c' }} /></Box>
                    <Typography variant="h3" className={styles.cardTitle}>A Missão</Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 600, mb: 1 }}>Combater o isolamento de boas ideias e criar um repositório nacional de referências.</Typography>
                  <Typography sx={{ color: '#555', lineHeight: 1.7 }}>Fomentamos a replicabilidade de práticas de sucesso, servindo como instrumento de reconhecimento e memória institucional técnica para todo o setor público.</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* ── QUEM PODE PARTICIPAR ── */}
      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Quem Pode Participar</Typography>
            <Box className={styles.titleUnderline} />
            <Typography className={styles.sectionSubtitle}>
              Qualquer órgão ou entidade da Administração Pública, direta ou indireta, em todos os níveis federativos pode se inscrever.
            </Typography>
          </Box>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            {whoCanParticipate.map((item, index) => {
              const Icon = item.icon;
              const id = cardIds.current[`who-${index}`];
              return (
                <Box key={index} sx={{ flex: 1 }}>
                  <Card ref={(el) => (cardRefs.current[2 + index] = el)} data-id={id} className={`${styles.categoryCard} ${visibleCards.has(id) ? styles.visible : ''}`}>
                    <CardContent sx={{ p: '2rem !important' }}>
                      <Box className={styles.categoryIconWrapper}><Icon sx={{ fontSize: 32, color: '#2d2e82' }} /></Box>
                      <Typography variant="h6" className={styles.categoryTitle}>{item.title}</Typography>
                      <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.65 }}>{item.desc}</Typography>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Stack>
          <Box className={styles.participationNote}>
            <Typography variant="body2"><strong>Inscrição gratuita e ilimitada:</strong> cada órgão pode submeter quantas práticas quiser. As 3 com maior pontuação técnica avançam para a fase competitiva.</Typography>
          </Box>
        </Box>
      </Box>

      {/* COMO SE INSCREVER - layout de círculos */}
      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Como se Inscrever</Typography>
            <Box className={styles.titleUnderline} />
            <Typography className={styles.sectionSubtitle}>
              A inclusão de uma prática na Plataforma de Boas Práticas é a porta de entrada para o reconhecimento por meio do Prêmio Infosfera.
            </Typography>
          </Box>

          <Box className={styles.circleStepsRow}>
            {howToSteps.map((step, index) => {
              const id = cardIds.current[`step-${index}`];
              return (
                <Box
                  key={index}
                  ref={(el) => (cardRefs.current[5 + index] = el)}
                  data-id={id}
                  className={`${styles.circleStep} ${visibleCards.has(id) ? styles.visible : ''}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <Box className={styles.circleStepTop}>
                    <Box className={styles.circleStepBadge}>{step.num}</Box>
                    <Box className={styles.circleStepRing}>{step.icon}</Box>
                  </Box>
                  <Typography className={styles.circleStepTitle}>{step.title}</Typography>
                  <Typography className={styles.circleStepDesc}>{step.desc}</Typography>
                </Box>
              );
            })}
          </Box>

          <Box className={styles.ctaCenter}>
            <Button
              variant="outlined"
              size="large"
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutlinePrimary}
              endIcon={<ArrowForwardIcon />}
            >
              Cadastre sua prática e participe!
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ── CRONOGRAMA ── */}
      <Box className={`${styles.section} ${styles.sectionDark}`}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>Cronograma 2026</Typography>
            <Box className={styles.titleUnderline} />
            <Typography className={`${styles.sectionSubtitle} ${styles.sectionSubtitleLight}`}>
              Fique atento às datas. As inscrições encerram em <strong>31 de julho de 2026</strong>.
            </Typography>
          </Box>
          <Box className={styles.timelineWrapper}>
            {timeline.map((item, index) => (
              <Box key={index} className={`${styles.timelineItem} ${item.active ? styles.timelineActive : ''}`}>
                <Box className={styles.timelineDot}><CalendarMonthOutlinedIcon sx={{ fontSize: 20 }} /></Box>
                <Box className={styles.timelineContent}>
                  <Typography className={styles.timelinePeriod}>{item.period}</Typography>
                  <Typography className={styles.timelineLabel}>{item.label}</Typography>
                </Box>
                {index < timeline.length - 1 && <Box className={styles.timelineConnector} />}
              </Box>
            ))}
          </Box>
          <Box className={styles.ctaCenter}>
            <Button variant="outlined" size="large" href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className={styles.heroCtaOutline} endIcon={<ArrowForwardIcon />}>
              Inscreva sua prática
            </Button>
          </Box>
        </Box>
      </Box>

      {/* CRITÉRIOS DE AVALIAÇÃO - layout de círculos */}
      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Critérios de Avaliação</Typography>
            <Box className={styles.titleUnderline} />
            <Typography className={styles.sectionSubtitle}>
              Para garantir uma seleção justa e criteriosa, a Comissão Julgadora se baseia nos seguintes pilares:
            </Typography>
          </Box>

          <Box className={styles.circleStepsRow}>
            {checkItems.map((item, index) => {
              const id = cardIds.current[`crit-${index}`];
              return (
                <Box
                  key={index}
                  ref={(el) => (cardRefs.current[9 + index] = el)}
                  data-id={id}
                  className={`${styles.circleStep} ${visibleCards.has(id) ? styles.visible : ''}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <Box className={styles.circleStepTop}>
                    <Box className={styles.circleStepBadge}>{item.num}</Box>
                    <Box className={styles.circleStepRing}>{item.icon}</Box>
                  </Box>
                  <Typography className={styles.circleStepTitle}>{item.title}</Typography>
                  <Typography className={styles.circleStepDesc}>{item.text}</Typography>
                  <Chip label={`Peso ${item.weight}`} size="small" className={styles.weightChip} />
                </Box>
              );
            })}
          </Box>

          <Box className={styles.ctaCenter} sx={{ mt: 5 }}>
            <Card
              ref={(el) => (cardRefs.current[12] = el)}
              data-id={cardIds.current.premiacao}
              className={`${styles.highlightCard} ${visibleCards.has(cardIds.current.premiacao) ? styles.visible : ''}`}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: '2.5rem !important' }}>
                <EmojiEventsOutlinedIcon sx={{ fontSize: 64, mb: 1.5, color: 'white' }} />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, color: 'white' }}>A Cerimônia</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.75)', mb: 1 }}>
                  Premiação durante o <strong style={{ color: 'white' }}>EnAJUS, o Encontro de Administração da Justiça</strong>.
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', color: 'white' }}>5 de novembro de 2026 · Goiânia/GO</Typography>
                <Button variant="outlined" href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" endIcon={<ArrowForwardIcon />} sx={{ mt: 2.5, borderColor: 'rgba(255,255,255,0.5)', color: 'white', textTransform: 'none', borderRadius: '50px', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  Quero participar
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>

      {/* ── CATEGORIAS DE PREMIAÇÃO ── */}
      <Box className={styles.section}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Categorias de Premiação</Typography>
            <Box className={styles.titleUnderline} />
            <Typography className={styles.sectionSubtitle}>
              Uma prática pode ser reconhecida em uma das seguintes categorias (não cumulativas, exceto a Escolha Popular):
            </Typography>
          </Box>
          <Grid container spacing={3} columns={{ xs: 1, md: 3 }}>
            {awardCategories.map((award, index) => {
              const id = cardIds.current[`award-${index}`];
              return (
                <Grid key={index} size={{ xs: 1, md: 1 }}>
                  <Card ref={(el) => (cardRefs.current[13 + index] = el)} data-id={id} className={`${styles.awardCard} ${award.highlight ? styles.awardCardHighlight : ''} ${visibleCards.has(id) ? styles.visible : ''}`}>
                    <CardContent sx={{ p: '2rem !important' }}>
                      <Box className={`${styles.awardIconWrapper} ${award.highlight ? styles.awardIconHighlight : ''}`}>{award.icon}</Box>
                      <Typography className={`${styles.awardTitle} ${award.highlight ? styles.awardTitleHighlight : ''}`}>{award.title}</Typography>
                      <Typography className={`${styles.awardDesc} ${award.highlight ? styles.awardDescHighlight : ''}`}>{award.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>

      {/* ── EIXOS TEMÁTICOS ── */}
      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Eixos Temáticos</Typography>
            <Box className={styles.titleUnderline} />
            <Typography className={styles.sectionSubtitle}>
              Iniciativas relacionadas aos seguintes eixos são elegíveis. Projetos aderentes ao propósito geral também são aceitos.
            </Typography>
          </Box>
          <Grid container spacing={3} columns={{ xs: 1, md: 3 }}>
            {tematicas.map((item, index) => {
              const id = cardIds.current[`tema-${index}`];
              return (
                <Grid size={{ xs: 1, md: 1 }} key={item.title}>
                  <Card ref={(el) => (cardRefs.current[19 + index] = el)} data-id={id} className={`${styles.tematicaCard} ${visibleCards.has(id) ? styles.visible : ''}`}>
                    <Box className={styles.tematicaIconWrapper}>{item.icon}</Box>
                    <Typography className={styles.themeCardTitle}>{item.title}</Typography>
                    <Typography className={styles.themeCardDesc}>{item.desc}</Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>

      
      <CtaVerde />

      {/* ── REALIZAÇÃO ── */}
      <Box className={styles.section}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Realização</Typography>
            <Box className={styles.titleUnderline} />
          </Box>
          <Grid container spacing={3} columns={{ xs: 1, md: 4 }} className={styles.logoGridContainer}>
            {realizacaoLogos.map((logo, index) => (
              <Grid size={{ xs: 1, md: 1 }} key={index}>
                <Box
                  component="a"
                  href={logo.href}
                  target={logo.href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={styles.logoWrapper}
                  sx={{ textDecoration: 'none', cursor: logo.href !== '#' ? 'pointer' : 'default' }}
                >
                  <img src={logo.src} alt={logo.label} loading="lazy" className={styles.logoImage} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* ── APOIO ── */}
      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Apoio</Typography>
            <Box className={styles.titleUnderline} />
          </Box>
          <Grid container spacing={2} columns={{ xs: 12 }} className={styles.logoGridContainer}>
            {apoioLogos.map((logo, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box
                  component="a"
                  href={logo.href}
                  target={logo.href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={styles.logoWrapper}
                  sx={{ textDecoration: 'none', cursor: logo.href !== '#' ? 'pointer' : 'default' }}
                >
                  <img src={logo.src} alt={logo.label} className={`${styles.logoImage} ${logo.large ? styles.logoImageLarge : ''}`} />
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box className={styles.supporterNote}>
            <Typography variant="body2">
              Quer ser um apoiador institucional? <a href="#/contato" className={styles.supporterLink}>Entre em contato</a>.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
