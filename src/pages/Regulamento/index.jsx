import { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Button, Chip, Accordion, AccordionSummary, AccordionDetails, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CtaVerde from '../../components/CtaVerde';
import { Link } from 'react-router-dom';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

import styles from './index.module.css';
import bannerImage from '../../assets/banner.jpeg';

const PLATFORM_URL = 'https://boaspraticas.infosfera.inf.br/';

const objetivos = [
  'Identificar práticas de gestão da informação que contribuam para o aprimoramento e modernização da gestão pública.',
  'Combater o isolamento de boas ideias, fomentando uma cultura nacional de compartilhamento.',
  'Fomentar a replicabilidade de boas práticas entre órgãos e instâncias federativas.',
  'Servir de instrumento de reconhecimento nacional e repositório de memória institucional e técnica.',
];

const elegibilidade = [
  { titulo: 'Instituições Esferas e Poderes Públicos', desc: 'Órgãos e entidades dos Poderes Executivo, Legislativo e Judiciário em todos os níveis: Federal, Estadual, Distrital e Municipal.', icon: <AssignmentOutlinedIcon sx={{ fontSize: 28, color: '#2d2e82' }} /> },
  { titulo: 'Estrutura Administrativa e Controle', desc: 'Administração Direta e Indireta, incluindo autarquias, fundações, empresas públicas, consórcios e sistemas de controle como Tribunais de Contas.', icon: <PolicyOutlinedIcon sx={{ fontSize: 28, color: '#2d2e82' }} /> },
  { titulo: 'Funções Essenciais à Justiça', desc: 'Instituições fundamentais como o Ministério Público, Advocacia Pública e Defensoria Pública de todo o país.', icon: <GavelOutlinedIcon sx={{ fontSize: 28, color: '#2d2e82' }} /> },
  { titulo: 'Consórcios e Entidades', desc: 'Consórcios públicos, entidades da administração indireta, fundações e empresas públicas vinculadas.', icon: <GroupsOutlinedIcon sx={{ fontSize: 28, color: '#2d2e82' }} /> },
];

const temas = [
  { letra: 'A', titulo: 'Governança Digital e Eficiência', desc: 'Transformação digital, interoperabilidade, modernização da máquina pública e inovação em serviços públicos.', exemplos: 'Governança Eletrônica; Interoperabilidade; Compliance Digital.', icon: <PolicyOutlinedIcon sx={{ fontSize: 32, color: '#2d2e82' }} /> },
  { letra: 'B', titulo: 'Gestão Estratégica da Informação', desc: 'Estruturação de dados, uso de IA e políticas públicas baseadas em evidências.', exemplos: 'Inteligência de Dados Públicos; Gestão do Conhecimento; IA e Ética no Setor Público.', icon: <BarChartOutlinedIcon sx={{ fontSize: 32, color: '#2d2e82' }} /> },
  { letra: 'C', titulo: 'Transparência e Integridade', desc: 'Publicidade das ações governamentais, acesso democrático à informação e controle social.', exemplos: 'Transparência Digital; Inclusão Digital; Acessibilidade.', icon: <VisibilityOutlinedIcon sx={{ fontSize: 32, color: '#2d2e82' }} /> },
  { letra: 'D', titulo: 'Preservação Digital e Memória Institucional', desc: 'Salvaguarda do patrimônio informacional público digital e acesso de longo prazo a registros históricos.', exemplos: 'Preservação da Memória Institucional; Curadoria Digital; Gestão de Documentos Arquivísticos.', icon: <ArchiveOutlinedIcon sx={{ fontSize: 32, color: '#2d2e82' }} /> },
  { letra: 'E', titulo: 'Segurança e Resiliência', desc: 'Proteção do ecossistema público contra ameaças, integridade e confidencialidade dos dados.', exemplos: 'Segurança Cibernética; Confidencialidade; Gestão de Riscos.', icon: <SecurityOutlinedIcon sx={{ fontSize: 32, color: '#2d2e82' }} /> },
  { letra: 'F', titulo: 'Outros Temas Correlatos', desc: 'Projetos aderentes aos objetivos do Prêmio que não estejam nas categorias anteriores.', exemplos: 'Cidades Inteligentes; Sustentabilidade Digital; Tecnologias Emergentes.', icon: <DevicesOutlinedIcon sx={{ fontSize: 32, color: '#2d2e82' }} /> },
];

const criterios = [
  { num: '1', titulo: 'Relevância e Qualidade Técnica', peso: '3,5', icon: <AssignmentOutlinedIcon sx={{ fontSize: 64, color: '#2d2e82' }} />, desc: 'Pertinência da solução frente aos problemas identificados e robustez metodológica. Avalia alinhamento com os eixos temáticos, coerência entre objetivos e meios, grau de inovação em relação aos processos tradicionais e conformidade técnica com padrões éticos e normativos.' },
  { num: '2', titulo: 'Impacto e Resultados', peso: '4,0', icon: <TrendingUpOutlinedIcon sx={{ fontSize: 64, color: '#2d2e82' }} />, desc: 'Eficácia da prática e benefícios gerados para a administração e para o cidadão. Com base em comprovação documental, avalia indicadores de desempenho, ganhos de eficiência (redução de tempo, custos ou burocracia) e melhoria na qualidade dos serviços prestados.' },
  { num: '3', titulo: 'Replicabilidade e Sustentabilidade', peso: '3,0', icon: <AutorenewOutlinedIcon sx={{ fontSize: 64, color: '#2d2e82' }} />, desc: 'Capacidade da prática de ser transferida ou adaptada para outros órgãos ou contextos federativos. Avalia viabilidade financeira, técnica e institucional a longo prazo, e se a iniciativa possui governança que garanta continuidade além do ciclo de seus idealizadores.' },
];

const categorias = [
  { icon: <EmojiEventsOutlinedIcon sx={{ fontSize: 40, color: '#fff' }} />, titulo: 'Grande Prêmio Infosfera', desc: 'Distinção máxima concedida à prática com maior pontuação global absoluta no ranking geral, independentemente do eixo temático ou esfera federativa.', highlight: true },
  { icon: <PlaceOutlinedIcon sx={{ fontSize: 40, color: '#2d2e82' }} />, titulo: 'Destaque Regional (Goiás)', desc: 'Distinção à prática de maior pontuação técnica entre as instituições sediadas no Estado de Goiás, anfitrião do evento.' },
  { icon: <LocationCityOutlinedIcon sx={{ fontSize: 40, color: '#2d2e82' }} />, titulo: 'Destaque Municipal', desc: 'Distinção exclusiva para iniciativas de Prefeituras, Secretarias Municipais ou autarquias municipais.' },
  { icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 40, color: '#2d2e82' }} />, titulo: 'Menções Honrosas', desc: 'Até 7 práticas finalistas de mérito excepcional em criatividade, baixo custo de implementação ou superação de desafios tecnológicos complexos.' },
  { icon: <StarsOutlinedIcon sx={{ fontSize: 40, color: '#2d2e82' }} />, titulo: 'Referência em Boa Prática', desc: 'Categoria especial para iniciativas de notório impacto nacional que não tenham ingressado pelo fluxo regular de inscrição. Escolha discricionária da Comissão.' },
  { icon: <PublicOutlinedIcon sx={{ fontSize: 40, color: '#2d2e82' }} />, titulo: 'Escolha Popular', desc: 'Votação pública digital após a divulgação dos finalistas técnicos. A única categoria acumulável com as demais previstas neste regulamento.' },
];

const cronograma = [
  { periodo: '1 abr – 31 jul', atividade: 'Período de submissão e cadastramento na Plataforma Infosfera.', ativo: true },
  { periodo: '1–15 ago', atividade: 'Análise de Admissibilidade e Validação de Interesse.', ativo: false },
  { periodo: '1–30 ago', atividade: 'Avaliação de Mérito pela Comissão Julgadora.', ativo: false },
  { periodo: '10 set', atividade: 'Divulgação dos Resultados Oficiais e comunicação aos finalistas.', ativo: false },
  { periodo: '25 set', atividade: 'Data limite para confirmação de participação presencial.', ativo: false },
  { periodo: '5–9 out', atividade: 'Fase de Aclamação Pública em ambiente digital.', ativo: false },
  { periodo: '5 nov', atividade: 'Sessão de Boas Práticas e Cerimônia de Premiação em Goiânia/GO.', ativo: false },
];

const faqs = [
  { p: 'Preciso pagar para participar?', r: 'Não. A participação é gratuita e voluntária. Não há taxa de inscrição, e o Prêmio não concede remuneração, prêmios em espécie ou benefícios financeiros diretos.' },
  { p: 'Quantas práticas minha instituição pode submeter?', r: 'Ilimitadas na plataforma. Contudo, apenas as 3 práticas com maior pontuação técnica de cada instituição avançam para a fase competitiva do Prêmio.' },
  { p: 'O que é o Status Ouro?', r: 'É o nível máximo de completude de cadastro na Plataforma de Boas Práticas. Exige o preenchimento completo de todos os campos e a anexação de evidências que comprovem resultados e impacto real da prática. Sem o Status Ouro, a prática não é admissível ao Prêmio.' },
  { p: 'Práticas em fase de piloto podem participar?', r: 'Sim. São aceitos diferentes níveis de maturidade, de pilotos a iniciativas plenamente estabelecidas, desde que a prática apresente resultados práticos e mensuráveis e possua cadastro com Status Ouro na Plataforma de Boas Práticas.' },
  { p: 'Uma prática pode ganhar em mais de uma categoria?', r: 'Não, salvo a categoria Escolha Popular. Vigora o princípio da não cumulatividade: uma prática não pode ser premiada em mais de uma categoria regular, prevalecendo a de maior hierarquia.' },
  { p: 'Uma prática vencedora na edição anterior pode participar?', r: 'Práticas premiadas nas categorias principais na edição imediatamente anterior precisam aguardar um intervalo de uma edição. Quem recebeu Menção Honrosa ou foi mapeado como Referência pode concorrer normalmente.' },
  { p: 'O que acontece se a prática for finalista, mas a instituição não comparecer à cerimônia?', r: 'A premiação será cancelada para aquela prática. A presença institucional na cerimônia em Goiânia é condição obrigatória para receber o troféu e o certificado. O Comitê pode transferir a honraria para a prática seguinte no ranking.' },
  { p: 'Como funciona a Escolha Popular?', r: 'Após a divulgação dos finalistas técnicos, abre-se votação pública digital. A Comissão Julgadora homologa o resultado e pode invalidar votações com uso de bots, impulsionamento pago ou condutas antiéticas.' },
  { p: 'Cabem recursos das decisões da Comissão Julgadora?', r: 'Não. As decisões da Comissão têm natureza estritamente técnica e soberana. Não cabe recurso administrativo quanto ao mérito da avaliação, pontuação ou classificação final.' },
  { p: 'Quem não pode participar?', r: 'Membros do Comitê Executivo, da Comissão Julgadora e seus parentes até segundo grau são impedidos de submeter práticas ao Prêmio.' },
];

const Regulamento = () => {
  const [expanded, setExpanded] = useState(false);
  const handleAccordion = (panel) => (_, isExpanded) => setExpanded(isExpanded ? panel : false);

  return (
    <Box className={styles.page}>

      {/* HERO */}
      <Box className={styles.hero} style={{ backgroundImage: `url(${bannerImage})` }}>
        <Box className={styles.heroOverlay} />
        <Box className={styles.heroContent}>
          <Chip label="Edição 2026 · Inscrições abertas até 31 jul" className={styles.heroBadge} size="small" />
          <Typography className={styles.heroTitle}>Regulamento do Prêmio</Typography>
          <Typography className={styles.heroSubtitle}>Tudo o que você precisa saber para participar e concorrer ao reconhecimento nacional em gestão da informação pública.</Typography>
          <Box className={styles.heroActions}>
            <Button variant="contained" size="large" href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary} endIcon={<ArrowForwardIcon />}>
              Inscrever Minha Prática
            </Button>
            <Button
              variant="outlined"
              size="large"
              className={styles.btnOutline}
              onClick={() => document.getElementById('cronograma')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Cronograma
            </Button>
          </Box>
          <Typography className={styles.heroNote}>Inscrição gratuita. Sem limite de práticas por órgão.</Typography>
        </Box>
      </Box>

      {/* APRESENTAÇÃO */}
      <Box className={styles.section}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Sobre o Regulamento</Typography>
            <Box className={styles.underline} />
          </Box>
          <Box className={styles.presentationBlock}>
            <Typography className={styles.presentationText}>
              O <strong>Prêmio Infosfera de Boas Práticas em Gestão da Informação na Esfera Pública</strong> é uma iniciativa do Infojus.UFPR e do LabRisk/UnB, com apoio de parceiros institucionais. O regulamento desta edição foi submetido para aprovação do Comitê Executivo em março de 2026 e rege integralmente o processo seletivo.
            </Typography>
            <Typography className={styles.presentationText}>
              A cerimônia de premiação ocorre em <strong>novembro de 2026</strong>, em Goiânia/GO, durante o Encontro de Administração da Justiça (EnAJUS).
            </Typography>
            <Box className={styles.highlightBox}>
              <InfoOutlinedIcon sx={{ color: '#2d2e82', fontSize: 20, flexShrink: 0, mt: '2px' }} />
              <Typography variant="body2">
                A inscrição é feita exclusivamente pela <strong>Plataforma Infosfera de Boas Práticas</strong>. Não são aceitas submissões por outro meio ou fora do prazo.
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Button
                component={Link}
                to="/regulamento-integra"
                variant="contained"
                startIcon={<DescriptionOutlinedIcon />}
                className={styles.btnPrimary}
              >
                Ler o Regulamento na Íntegra
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* OBJETIVOS */}
      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Objetivos do Prêmio</Typography>
            <Box className={styles.underline} />
            <Typography className={styles.sectionSubtitle}>O Prêmio Infosfera 2026 foi criado para disseminar e reconhecer solenemente servidores, equipes e entidades que aplicam boas práticas de gestão da informação.</Typography>
          </Box>
          <Grid container spacing={3} columns={{ xs: 1, md: 2 }}>
            {objetivos.map((obj, i) => (
              <Grid size={{ xs: 1, md: 1 }} key={i}>
                <Box className={styles.objetivoItem}>
                  <Box className={styles.objetivoNum}>{i + 1}</Box>
                  <Typography className={styles.objetivoText}>{obj}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* ELEGIBILIDADE */}
      <Box className={styles.section}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Quem Pode Participar</Typography>
            <Box className={styles.underline} />
            <Typography className={styles.sectionSubtitle}>Podem participar órgãos e entidades da Administração Direta e Indireta, de todos os poderes e níveis federativos.</Typography>
          </Box>
          <Grid container spacing={3} columns={{ xs: 1, md: 2 }}>
            {elegibilidade.map((item, i) => (
              <Grid size={{ xs: 1, md: 1 }} key={i}>
                <Card className={styles.eligCard}>
                  <CardContent sx={{ p: '1.75rem !important' }}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <Box className={styles.eligIcon}>{item.icon}</Box>
                      <Box>
                        <Typography className={styles.eligTitle}>{item.titulo}</Typography>
                        <Typography className={styles.eligDesc}>{item.desc}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box className={styles.alertBox}>
            <CheckCircleOutlineIcon sx={{ color: '#2d2e82', fontSize: 20, flexShrink: 0 }} />
            <Typography variant="body2">
              <strong>Impedimento:</strong> membros do Comitê Executivo, da Comissão Julgadora e seus parentes até segundo grau não podem submeter práticas ao Prêmio.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* COMO SE INSCREVER */}
      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Como se Inscrever</Typography>
            <Box className={styles.underline} />
            <Typography className={styles.sectionSubtitle}>O processo é simples e inteiramente gratuito. Siga os passos abaixo.</Typography>
          </Box>
          <Box className={styles.stepsRow}>
            {[
              { n: '1', t: 'Acesse a Plataforma', d: 'Entre em boaspraticas.infosfera.inf.br e crie ou acesse sua conta institucional. Todas as práticas cadastradas na plataforma estão automaticamente inscritas no Prêmio.' },
              { n: '2', t: 'Alcance o Status Ouro', d: 'Preencha todos os campos do cadastro e anexe evidências que comprovem resultados e impacto real da prática. O Status Ouro é condição obrigatória de admissibilidade.' },
              { n: '3', t: 'Confirme o Interesse', d: 'Entre 1 e 15 de agosto, a equipe de curadoria verifica a admissibilidade. As práticas elegíveis recebem comunicação oficial para confirmar participação na fase competitiva.' },
              { n: '4', t: 'Concorra e seja reconhecido', d: 'A Comissão Julgadora avalia as práticas finalistas. Em novembro, a cerimônia de premiação acontece presencialmente em Goiânia/GO, durante o EnAJUS.' },
            ].map((step, i) => (
              <Box key={i} className={styles.stepItem}>
                <Box className={styles.stepBadge}>{step.n}</Box>
                <Box className={styles.stepBody}>
                  <Typography className={styles.stepTitle}>{step.t}</Typography>
                  <Typography className={styles.stepDesc}>{step.d}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className={styles.ctaCenter}>
            <Button variant="contained" size="large" href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary} endIcon={<ArrowForwardIcon />}>
              Acessar a Plataforma e Cadastrar Prática
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ADMISSIBILIDADE */}
      <Box className={styles.section}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Condições de Admissibilidade</Typography>
            <Box className={styles.underline} />
            <Typography className={styles.sectionSubtitle}>Para concorrer ao Prêmio, a prática precisa atender a todos os requisitos abaixo.</Typography>
          </Box>
          <Grid container spacing={3} columns={{ xs: 1, md: 3 }}>
            {[
              { t: 'Eixo Temático', d: 'A prática deve estar vinculada a um ou mais dos eixos temáticos do Prêmio (Anexo I). Propostas aderentes ao propósito geral também são aceitas.' },
              { t: 'Resultados Mensuráveis', d: 'A prática deve apresentar resultados práticos e mensuráveis. São admitidos diferentes níveis de maturidade, de piloto a plenamente estabelecida.' },
              { t: 'Status Ouro na Plataforma', d: 'A prática deve ter o cadastro Status Ouro na Plataforma Infosfera de Boas Práticas até a data limite de inscrição. Práticas meramente conceituais ou em fase de planejamento não são admissíveis.' },
            ].map((item, i) => (
              <Grid size={{ xs: 1, md: 1 }} key={i}>
                <Card className={styles.admissCard}>
                  <CardContent sx={{ p: '1.75rem !important' }}>
                    <Box className={styles.admissNum}>{i + 1}</Box>
                    <Typography className={styles.admissTitle}>{item.t}</Typography>
                    <Typography className={styles.admissDesc}>{item.d}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* EIXOS TEMÁTICOS */}
      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Eixos Temáticos Elegíveis</Typography>
            <Box className={styles.underline} />
            <Typography className={styles.sectionSubtitle}>A lista não é exaustiva. Projetos aderentes ao propósito geral do Prêmio também são aceitos.</Typography>
          </Box>
          <Grid container spacing={3} columns={{ xs: 1, md: 3 }}>
            {temas.map((tema) => (
              <Grid size={{ xs: 1, md: 1 }} key={tema.letra}>
                <Card className={styles.temaCard}>
                  <CardContent sx={{ p: '1.75rem !important' }}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', mb: 1.25 }}>
                      <Box className={styles.temaIconBox}>{tema.icon}</Box>
                      <Box>
                        <Chip label={`Eixo ${tema.letra}`} size="small" className={styles.temaChip} />
                        <Typography className={styles.temaTitle}>{tema.titulo}</Typography>
                      </Box>
                    </Box>
                    <Typography className={styles.temaDesc}>{tema.desc}</Typography>
                    <Typography className={styles.temaExemplos}><strong>Exemplos:</strong> {tema.exemplos}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* CRITÉRIOS DE JULGAMENTO */}
      <Box className={styles.section}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Critérios de Julgamento</Typography>
            <Box className={styles.underline} />
            <Typography className={styles.sectionSubtitle}>A avaliação é conduzida pela Comissão Julgadora com base em três critérios ponderados.</Typography>
          </Box>
          <Box className={styles.criteriosRow}>
            {criterios.map((c) => (
              <Box key={c.num} className={styles.criterioItem}>
                <Box className={styles.criterioTop}>
                  <Box className={styles.criterioBadge}>{c.num}</Box>
                  <Box className={styles.criterioRing}>{c.icon}</Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                  <Chip label={`Peso ${c.peso}`} size="small" className={styles.pesoChip} />
                </Box>
                <Typography className={styles.criterioTitle}>{c.titulo}</Typography>
                <Typography className={styles.criterioDesc}>{c.desc}</Typography>
              </Box>
            ))}
          </Box>
          <Box className={styles.alertBox} sx={{ mt: 4 }}>
            <InfoOutlinedIcon sx={{ color: '#2d2e82', fontSize: 20, flexShrink: 0 }} />
            <Typography variant="body2">
              Em caso de empate, prevalece a prática com maior nota no critério de maior peso. Se o empate persistir, o Comitê Executivo decide com base no histórico e no tempo de implementação da prática.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* CATEGORIAS */}
      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Categorias de Premiação</Typography>
            <Box className={styles.underline} />
            <Typography className={styles.sectionSubtitle}>Uma prática pode ser reconhecida em uma das categorias abaixo. Não há acúmulo entre categorias regulares, exceto a Escolha Popular.</Typography>
          </Box>
          <Grid container spacing={3} columns={{ xs: 1, md: 3 }}>
            {categorias.map((cat, i) => (
              <Grid size={{ xs: 1, md: 1 }} key={i}>
                <Card className={`${styles.catCard} ${cat.highlight ? styles.catCardHighlight : ''}`}>
                  <CardContent sx={{ p: '2rem !important', textAlign: 'center' }}>
                    <Box className={`${styles.catIconBox} ${cat.highlight ? styles.catIconHighlight : ''}`}>{cat.icon}</Box>
                    <Typography className={`${styles.catTitle} ${cat.highlight ? styles.catTitleHighlight : ''}`}>{cat.titulo}</Typography>
                    <Typography className={`${styles.catDesc} ${cat.highlight ? styles.catDescHighlight : ''}`}>{cat.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* CRONOGRAMA */}
      <Box id="cronograma" className={`${styles.section} ${styles.sectionDark}`}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>Cronograma 2026</Typography>
            <Box className={styles.underline} />
            <Typography className={`${styles.sectionSubtitle} ${styles.sectionSubtitleLight}`}>Fique atento às datas. As inscrições encerram em <strong>31 de julho de 2026</strong>.</Typography>
          </Box>
          <Box className={styles.timelineWrapper}>
            {cronograma.map((item, i) => (
              <Box key={i} className={`${styles.timelineItem} ${item.ativo ? styles.timelineActive : ''}`}>
                <Box className={styles.timelineDot}>
                  <CalendarMonthOutlinedIcon sx={{ fontSize: 20 }} />
                </Box>
                <Box className={styles.timelineContent}>
                  <Typography className={styles.timelinePeriod}>{item.periodo}</Typography>
                  <Typography className={styles.timelineLabel}>{item.atividade}</Typography>
                </Box>
                {i < cronograma.length - 1 && <Box className={styles.timelineConnector} />}
              </Box>
            ))}
          </Box>
          <Box className={styles.ctaCenter}>
            <Button variant="outlined" size="large" href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className={styles.btnOutlineLight} endIcon={<ArrowForwardIcon />}>
              Garantir Minha Vaga Agora
            </Button>
          </Box>
        </Box>
      </Box>

      {/* RESULTADOS E CERIMÔNIA */}
      <Box className={styles.section}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Resultados e Cerimônia</Typography>
            <Box className={styles.underline} />
          </Box>
          <Grid container spacing={3} columns={{ xs: 1, md: 3 }}>
            {[
              { t: 'Divulgação dos Finalistas', d: 'A lista oficial de finalistas é divulgada nos canais da Plataforma Infosfera até 10 de setembro de 2026. A comunicação serve como convocação formal para a cerimônia.', icon: <VerifiedOutlinedIcon sx={{ fontSize: 32, color: '#2d2e82' }} /> },
              { t: 'Obrigações dos Finalistas', d: 'Presença institucional na cerimônia; apresentação técnica na Sessão de Boas Práticas; e participação na cerimônia solene de premiação. O não cumprimento implica desclassificação.', icon: <GroupsOutlinedIcon sx={{ fontSize: 32, color: '#2d2e82' }} /> },
              { t: 'Cerimônia de Premiação', d: '5 de novembro de 2026, em Goiânia/GO, durante o EnAJUS. Os finalistas apresentam suas práticas e recebem troféu e certificado correspondente à categoria vencedora.', icon: <EmojiEventsOutlinedIcon sx={{ fontSize: 32, color: '#2d2e82' }} /> },
            ].map((item, i) => (
              <Grid size={{ xs: 1, md: 1 }} key={i}>
                <Card className={styles.resultCard}>
                  <CardContent sx={{ p: '1.75rem !important' }}>
                    <Box className={styles.resultIcon}>{item.icon}</Box>
                    <Typography className={styles.resultTitle}>{item.t}</Typography>
                    <Typography className={styles.resultDesc}>{item.d}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* COMISSÃO JULGADORA */}
      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Comissão Julgadora</Typography>
            <Box className={styles.underline} />
            <Typography className={styles.sectionSubtitle}>Composta por profissionais de notório saber com experiência em inovação pública, tecnologia da informação, ciência de dados e administração pública.</Typography>
          </Box>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            {[
              { t: 'Composição', d: 'De 3 a 5 membros titulares, em número ímpar para assegurar o equilíbrio nas deliberações. A atuação é considerada prestação de serviço público relevante e não é remunerada.' },
              { t: 'Imparcialidade', d: 'Avaliadores com vínculo funcional ou colaborativo com órgãos que tenham práticas concorrentes estão impedidos. Conflito de interesse deve ser declarado imediatamente.' },
              { t: 'Sigilo', d: 'Os membros mantêm sigilo sobre todas as informações, notas parciais e deliberações internas até a publicação oficial dos resultados e realização da cerimônia.' },
            ].map((item, i) => (
              <Box key={i} sx={{ flex: 1 }}>
                <Card className={styles.comissaoCard}>
                  <CardContent sx={{ p: '1.75rem !important' }}>
                    <Typography className={styles.comissaoTitle}>{item.t}</Typography>
                    <Typography className={styles.comissaoDesc}>{item.d}</Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* ÉTICA E PROPRIEDADE */}
      <Box className={styles.section}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Ética e Propriedade</Typography>
            <Box className={styles.underline} />
          </Box>
          <Grid container spacing={3} columns={{ xs: 1, md: 2 }}>
            {[
              { t: 'Declaração de Originalidade', d: 'Ao confirmar interesse na fase II, o participante declara a originalidade das informações e a inexistência de conflitos. Plágio, omissão de autoria ou falsidade ideológica implicam desclassificação e revogação de eventuais prêmios.' },
              { t: 'Tecnologias e Parcerias', d: 'Se a prática envolver tecnologias de terceiros ou parcerias público-privadas, o proponente deve possuir as autorizações necessárias para a publicidade e disseminação da solução na Plataforma Infosfera.' },
              { t: 'Direito de Imagem e Uso', d: 'Ao se inscrever, o participante cede ao Prêmio Infosfera o direito de uso de som, imagem e voz captados durante o evento, para fins de divulgação, publicações técnicas e memória histórica, conforme a Lei n. 9.610/1998.' },
              { t: 'Revogação de Premiações', d: 'A Comissão pode revogar premiações já concedidas caso sejam descobertas irregularidades tardias, mediante processo administrativo sumário com direito de manifestação do órgão envolvido.' },
            ].map((item, i) => (
              <Grid size={{ xs: 1, md: 1 }} key={i}>
                <Box className={styles.eticaItem}>
                  <Box className={styles.eticaBar} />
                  <Box sx={{ flex: 1 }}>
                    <Typography className={styles.eticaTitle}>{item.t}</Typography>
                    <Typography className={styles.eticaDesc}>{item.d}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* FAQ */}
      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.container}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Perguntas Frequentes</Typography>
            <Box className={styles.underline} />
            <Typography className={styles.sectionSubtitle}>Dúvidas comuns sobre o regulamento do Prêmio Infosfera 2026.</Typography>
          </Box>
          <Box className={styles.faqList}>
            {faqs.map((faq, i) => (
              <Accordion
                key={i}
                expanded={expanded === `faq-${i}`}
                onChange={handleAccordion(`faq-${i}`)}
                className={styles.faqItem}
                disableGutters
                elevation={0}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#2d2e82' }} />} className={styles.faqQuestion}>
                  <Typography className={styles.faqQuestionText}>{faq.p}</Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.faqAnswer}>
                  <Typography>{faq.r}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>

      
      {/* Botão regulamento na íntegra — fim da página */}
      <Box sx={{ background: '#f7f8fc', py: 4, textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
        <Button
          component={Link}
          to="/regulamento-integra"
          variant="contained"
          startIcon={<DescriptionOutlinedIcon />}
          className={styles.btnPrimary}
        >
          Ler o Regulamento na Íntegra
        </Button>
      </Box>

      <CtaVerde />

    </Box>
  );
};

export default Regulamento;
