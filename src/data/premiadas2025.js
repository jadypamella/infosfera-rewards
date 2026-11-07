// Práticas premiadas na edição 2025, usadas em Vencedores 2025 e na página de finalistas
import fotoSenado    from '../assets/premiados/SENADO FEDERAL.JPG';
import fotoMPFMA     from '../assets/premiados/MPF MA.JPG';
import fotoTRERN     from '../assets/premiados/TRE-RN.JPG';
import fotoSantana   from '../assets/premiados/PREFEITURA DE SANTANA DO LIVRAMENTO.JPG';
import fotoCampoLargo from '../assets/premiados/PREFEITURA DE CAMPO LARGO.JPG';
import fotoMGI       from '../assets/premiados/MGI - Painel ID.JPG';
import fotoTRESP     from '../assets/premiados/TRE - SP.JPG';
import fotoTREGO     from '../assets/premiados/TRE - GO.JPG';
import fotoTCEPR     from '../assets/premiados/TCE - PR.JPG';
import fotoRJ        from '../assets/premiados/PREFEITURA DO RJ.JPG';
import fotoPinhais   from '../assets/premiados/PREFEITURA DE PINHAIS.JPG';

export const categorias2025 = {
  grandePremio: {
    titulo: 'Grande Prêmio',
    descricao: 'Descrição do grande prêmio.',
    vencedores: [
      { 
        nomes: 'Transparência orientada por evidências: A evolução do Portal da Transparência Rio a partir de avaliações de desempenho', 
        projeto: 'Kelly Ferreira Esch, Laura Fantti Davilla Serpa, Láisa Pontes Teixeira Lisboa Martins, Fernanda de Lima Pérez', 
        vinculo: 'Prefeitura da Cidade do Rio de Janeiro',
      foto: fotoRJ,
      }
    ]
  },
  boasPraticas: {
    titulo: 'Referência em Boas Práticas',
    descricao: 'Descrição do prêmio de boas práticas.',
    vencedores: [
      {
        nomes: 'Normas.leg.br',
        projeto: 'João Alberto de Oliveira Lima',
        vinculo: 'Senado Federal',
        foto: fotoSenado,
      },
      {
        nomes: 'Investigação a partir de sistemas de informações das emendas parlamentares de saúde destinadas aos municípios maranhenses',
        projeto: 'Juraci Guimarães Junior',
        vinculo: 'Ministério Público Federal do Maranhão',
        foto: fotoMPFMA,
      }
    ]
  },
  destaqueParana: {
    titulo: 'Destaque Paraná',
    descricao: 'Descrição do prêmio Destaque Paraná.',
    vencedores: [
      { 
        nomes: 'Compartilhamento de Dados Interinstitucionais como Estratégia de Compliance Fiscal Cooperativo', 
        projeto: 'Ricardo Shigueru Fujiwara, Denis Offmann, Givanildo dos Santos Lima, Fabrício Aparecido Gonçalves, Maristela de Oliveira Rivabem', 
        vinculo: 'Prefeitura Municipal de Pinhais/PR, Departamento de Rendas Mobiliárias da Secretaria Municipal de Planejamento, Finanças e Orçamento',
      foto: fotoPinhais,
      }
    ]
  },
  mencoesHonrosas: {
    titulo: 'Menções Honrosas',
    descricao: 'Descrição para as menções honrosas.',
    vencedores: [
      { nomes: 'Projeto - TRE-RN Simples Assim: Justiça para Você!', projeto: 'Andréa Carla Guedes Toscano Campos', vinculo: 'Tribunal Regional Eleitoral do Rio Grande do Norte', foto: fotoTRERN },
      { nomes: 'NEM: Núcleo de Estatística Municipal', projeto: 'Rafael Damasceno de Camargo, Bianca Borger Lussani, Felipe Gomes Madruga', vinculo: 'Prefeitura Municipal de Sant\'Ana do Livramento/RS', foto: fotoSantana },
      { nomes: 'Muralha Digital - CIOSP (Centro Integrado de Operações de Segurança Pública)', projeto: 'Fabiano Arruda Bianchinho', vinculo: 'Prefeitura Municipal de Campo Largo/PR', foto: fotoCampoLargo },
      { nomes: 'Painel ID: Dados, um caminho para a cidadania', projeto: 'Hudson Vinicius Mesquita, Simone Cabanelas Martinez, Thiara dos Santos Alves, Bianca Izumi Maeda, Beatriz Aleixo Bezerra de Sales', vinculo: 'Secretaria de Governo Digital / Ministério da Gestão e da Inovação em Serviços Públicos', foto: fotoMGI },
      { nomes: 'Inovação e Gestão no Poder Judiciário: Uma Abordagem Empírica com Inteligência Artificial Generativa para Otimização e Gestão de Riscos de Processos', projeto: 'Luís Felipe de Oliveira Reis', vinculo: 'Tribunal Regional Eleitoral de São Paulo', foto: fotoTRESP },
      { nomes: 'Boas Práticas na Gestão de Grupo de Trabalho Remoto para Análise de Processos Judiciais Antigos no TRE Goiás', projeto: 'Vitor Carneiro Ramos, Patrick Letouze, José Carlos Lucio Maia, Ilana Murici Ayres, Rodrigo de Melo Brustolin', vinculo: 'Tribunal Regional Eleitoral de Goiás', foto: fotoTREGO },
      { nomes: 'Painel e Indicador de Maturidade do Plano Plurianual das Entidades Municipais do Estado do Paraná', projeto: 'Robson Fernandes Soares, Rafael Morais Gonçalves Ayres, Fabio Junior Damacena, Douglas Nascimento de Oliveira, Vinicius Garcia Pimenta', vinculo: 'Tribunal de Contas do Estado do Paraná', foto: fotoTCEPR },
    ]
  }
};
