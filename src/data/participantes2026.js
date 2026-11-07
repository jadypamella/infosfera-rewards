// Boas práticas finalistas do Prêmio Infosfera 2026, em ordem alfabética e sem indicação de categoria.
// Fonte: planilha enviada pela Ana em 30/10/2026. Capa, esfera, status e categorias vêm da Plataforma Infosfera.
// Premiações conforme a apresentação da cerimônia de 05/11/2026 ("Práticas para Prêmio - Com Categoria").
import img01 from '../assets/finalistas/01.jpg';
import img02 from '../assets/finalistas/02.jpg';
import img03 from '../assets/finalistas/03.jpg';
import img04 from '../assets/finalistas/04.jpg';
import img05 from '../assets/finalistas/05.jpg';
import img06 from '../assets/finalistas/06.jpg';
import img07 from '../assets/finalistas/07.jpg';
import img08 from '../assets/finalistas/08.jpg';
import img09 from '../assets/finalistas/09.jpg';
import img10 from '../assets/finalistas/10.jpg';

import foto_360 from '../assets/cerimonia/premio-360.jpg';
import foto_bem_estar from '../assets/cerimonia/premio-bem-estar.jpg';
import foto_bonito from '../assets/cerimonia/premio-bonito.jpg';
import foto_cascavel from '../assets/cerimonia/premio-cascavel.jpg';
import foto_ufpr from '../assets/cerimonia/premio-ufpr.jpg';
import foto_maria from '../assets/cerimonia/premio-maria.jpg';
import foto_paulo_afonso from '../assets/cerimonia/premio-paulo-afonso.jpg';
import foto_tce_ro from '../assets/cerimonia/premio-tce-ro.jpg';
import foto_copicola from '../assets/cerimonia/premio-copicola.jpg';
import galeria01 from '../assets/cerimonia/galeria-01.jpg';
import galeria02 from '../assets/cerimonia/galeria-02.jpg';
import galeria03 from '../assets/cerimonia/galeria-03.jpg';
import galeria04 from '../assets/cerimonia/galeria-04.jpg';
import galeria05 from '../assets/cerimonia/galeria-05.jpg';
import galeria06 from '../assets/cerimonia/galeria-06.jpg';
import galeria07 from '../assets/cerimonia/galeria-07.jpg';
import galeria08 from '../assets/cerimonia/galeria-08.jpg';
import galeria09 from '../assets/cerimonia/galeria-09.jpg';
import galeria10 from '../assets/cerimonia/galeria-10.jpg';
import galeria11 from '../assets/cerimonia/galeria-11.jpg';
import galeria12 from '../assets/cerimonia/galeria-12.jpg';
import galeria13 from '../assets/cerimonia/galeria-13.jpg';

export const participantes2026 = [
  { pratica: "360 Anápolis", orgao: "Secretaria de Governo (SEGOV) da Prefeitura Municipal de Anápolis (GO)", link: "https://boaspraticas.infosfera.inf.br/praticas/360-anapolis/", imagem: img01, esfera: "Municipal", esferaCor: "#53bd9d", status: "Em Expansão", statusCor: "#0d6efd", categorias: ["Governança Eletrônica", "Interoperabilidade de Sistemas", "Gestão do Conhecimento Organizacional"], premio: "Menção Honrosa", fotoPremio: foto_360 },
  { pratica: "Bem Estar Animal - Gestão Inteligente da Informação para a Proteção Animal e a Saúde Pública", orgao: "Prefeitura Municipal de Senador Canedo (GO), por meio da Secretaria Municipal de Bem-Estar Animal (SEMBEA)", link: "https://boaspraticas.infosfera.inf.br/praticas/bem-estar-animal-gestao-inteligente-da-informacao-para-a-protecao-animal-e-a-saude-publica/", imagem: img02, esfera: "Municipal", esferaCor: "#53bd9d", status: "Operação Contínua", statusCor: "#198754", categorias: ["Transparência Digital", "Inclusão Digital e Acessibilidade", "Inovação em Serviços Públicos Digitais"], premio: "Destaque Regional · Goiás", fotoPremio: foto_bem_estar },
  { pratica: "Cadastro Inteligente de Veículos Autopropelidos e Bicicletas Elétricas: Gestão de Dados para uma Mobilidade Urbana Segura e Sustentável em Bonito/MS", orgao: "Prefeitura Municipal de Bonito – MS, por meio do Departamento Municipal de Transporte e Trânsito (DEMTRAT)", link: "https://boaspraticas.infosfera.inf.br/praticas/cadastro-inteligente-de-veiculos-autopropelidos-e-bicicletas-eletricas-gestao-de-dados-para-uma-mobilidade-urbana-segura-e-sustentavel-em-bonito-ms/", imagem: img03, esfera: "Municipal", esferaCor: "#53bd9d", status: "Operação Contínua", statusCor: "#198754", categorias: ["Inteligência de Dados Públicos", "Inovação em Serviços Públicos Digitais", "Transformação Digital e Modelagem de Processos"], premio: "Menção Honrosa", fotoPremio: foto_bonito },
  { pratica: "Cascavel.App: plataforma digital própria para gestão da informação, transparência e serviços da rede municipal de ensino de Cascavel (PR)", orgao: "Município de Cascavel (PR), por meio da Secretaria Municipal de Educação (SEMED)", link: "https://boaspraticas.infosfera.inf.br/praticas/cascavel-app-plataforma-digital-propria-para-gestao-da-informacao-transparencia-e-servicos-da-rede-municipal-de-ensino-de-cascavel-pr/", imagem: img04, esfera: "Municipal", esferaCor: "#53bd9d", status: "Em Expansão", statusCor: "#0d6efd", categorias: ["Transparência Digital", "Inovação em Serviços Públicos Digitais", "Transformação Digital e Modelagem de Processos"], premio: "Menção Honrosa", fotoPremio: foto_cascavel },
  { pratica: "Inteligência de Dados e Modelagem Preditiva na Gestão Universitária: O Observatório de Dados de Evasão e Baixa Procura da UFPR como Ferramenta de Apoio à Decisão", orgao: "Universidade Federal do Paraná (UFPR), CECD/PROPLAD (Coordenadoria de Estatística e Ciência de Dados)", link: "https://boaspraticas.infosfera.inf.br/praticas/inteligencia-de-dados-e-modelagem-preditiva-na-gestao-universitaria-o-observatorio-de-dados-de-evasao-e-baixa-procura-da-ufpr-como-ferramenta-de-apoio-a-decisao/", imagem: img05, esfera: "Federal", esferaCor: "#493b63", status: "Operação Contínua", statusCor: "#198754", categorias: ["Transparência Digital", "Segurança Cibernética"], premio: "Grande Prêmio Infosfera 2026", fotoPremio: foto_ufpr },
  { pratica: "MarIA: Assistente de Atendimento Digital da Defensoria Pública do Estado do Rio de Janeiro", orgao: "Defensoria Pública do Estado do Rio de Janeiro (DPERJ), através da Secretaria de Governança Digital e Inovação (SEGOV)", link: "https://boaspraticas.infosfera.inf.br/praticas/maria-assistente-de-atendimento-digital-da-defensoria-publica-do-estado-do-rio-de-janeiro/", imagem: img06, esfera: "Estadual", esferaCor: "#996f4d", status: "Em Expansão", statusCor: "#0d6efd", categorias: ["Inclusão Digital e Acessibilidade", "Inovação em Serviços Públicos Digitais", "Transformação Digital e Modelagem de Processos", "Inteligência Artificial e Ética no Setor Público"], premio: "Menção Honrosa", fotoPremio: foto_maria },
  { pratica: "Monitoramento Nacional de Despesas com Shows", orgao: "Ministério Público de Contas do Estado de São Paulo Rede MPContas", link: "https://boaspraticas.infosfera.inf.br/praticas/monitoramento-nacional-de-despesas-com-shows/", imagem: img07, esfera: "Interfederativo", esferaCor: "#66374d", status: "Em Expansão", statusCor: "#0d6efd", categorias: ["Transparência Digital", "Inteligência de Dados Públicos", "Inovação em Serviços Públicos Digitais"], premio: "" },
  { pratica: "Panorama Municipal de Paulo Afonso: plataforma integrada de inteligência de dados e informações geoespaciais para o planejamento e a gestão pública municipal", orgao: "Município de Paulo Afonso/BA, por meio da Secretaria Municipal de Planejamento Estratégico (SEPLANE)", link: "https://boaspraticas.infosfera.inf.br/praticas/panorama-municipal-de-paulo-afonso-plataforma-integrada-de-inteligencia-de-dados-e-informacoes-geoespaciais-para-o-planejamento-e-a-gestao-publica-municipal/", imagem: img08, esfera: "Municipal", esferaCor: "#53bd9d", status: "Operação Contínua", statusCor: "#198754", categorias: ["Transparência Digital", "Inteligência de Dados Públicos", "Interoperabilidade de Sistemas"], premio: "Destaque Municipal", fotoPremio: foto_paulo_afonso },
  { pratica: "Plataforma de Inteligência Territorial para Avaliação e Aprimoramento de Políticas Públicas Baseadas em Evidências", orgao: "Tribunal de Contas do Estado de Rondônia (TCE-RO), por meio da Secretaria Especial de Projetos Especiais em Políticas Públicas (SEPEPP)", link: "https://boaspraticas.infosfera.inf.br/praticas/plataforma-de-inteligencia-territorial-para-avaliacao-e-aprimoramento-de-politicas-publicas-baseadas-em-evidencias/", imagem: img09, esfera: "Estadual", esferaCor: "#996f4d", status: "Em Expansão", statusCor: "#0d6efd", categorias: ["Transparência Digital", "Inteligência de Dados Públicos", "Interoperabilidade de Sistemas"], premio: "Menção Honrosa", fotoPremio: foto_tce_ro },
  { pratica: "Programa CopiCola: Gestão do Conhecimento para Identificação, Sistematização e Disseminação de Inovações na Prefeitura de São Paulo", orgao: "Laboratório de Inovação Pública da Prefeitura de São Paulo (Lab11)", link: "https://boaspraticas.infosfera.inf.br/praticas/programa-copicola-gestao-do-conhecimento-para-identificacao-sistematizacao-e-disseminacao-de-inovacoes-na-prefeitura-de-sao-paulo/", imagem: img10, esfera: "Municipal", esferaCor: "#53bd9d", status: "Em Expansão", statusCor: "#0d6efd", categorias: ["Gestão do Conhecimento Organizacional"], premio: "Menção Honrosa", fotoPremio: foto_copicola },
];

// true quando a lista puder ser exibida (fim do defeso eleitoral).
export const listaLiberada = true;

// true depois da cerimônia: mostra as distinções e ordena as premiadas primeiro.
export const resultadoDivulgado = true;

export const ORDEM_PREMIO = ['Grande Prêmio Infosfera 2026', 'Destaque Regional · Goiás', 'Destaque Municipal', 'Menção Honrosa', ''];

export const ALBUM_FOTOS_URL = 'https://photos.app.goo.gl/2UetLeMztuVEya5y9';

// Fotos da cerimônia de 05/11/2026 (pasta do Drive da organização).
export const galeriaCerimonia = [galeria01, galeria02, galeria03, galeria04, galeria05, galeria06, galeria07, galeria08, galeria09, galeria10, galeria11, galeria12, galeria13];
