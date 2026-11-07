// Edição 2025, a primeira do Prêmio Infosfera. Só as práticas premiadas foram publicadas.
import fotoSenado    from '../../assets/premiados/SENADO FEDERAL.JPG';
import fotoMPFMA     from '../../assets/premiados/MPF MA.JPG';
import fotoTRERN     from '../../assets/premiados/TRE-RN.JPG';
import fotoSantana   from '../../assets/premiados/PREFEITURA DE SANTANA DO LIVRAMENTO.JPG';
import fotoCampoLargo from '../../assets/premiados/PREFEITURA DE CAMPO LARGO.JPG';
import fotoMGI       from '../../assets/premiados/MGI - Painel ID.JPG';
import fotoTRESP     from '../../assets/premiados/TRE - SP.JPG';
import fotoTREGO     from '../../assets/premiados/TRE - GO.JPG';
import fotoTCEPR     from '../../assets/premiados/TCE - PR.JPG';
import fotoRJ        from '../../assets/premiados/PREFEITURA DO RJ.JPG';
import fotoPinhais   from '../../assets/premiados/PREFEITURA DE PINHAIS.JPG';

const edicao2025 = {
  ano: 2025,
  listaLiberada: true,
  resultadoDivulgado: true,
  galeria: [],
  praticas: [
    { titulo: 'Transparência orientada por evidências: A evolução do Portal da Transparência Rio a partir de avaliações de desempenho', entidade: 'Prefeitura da Cidade do Rio de Janeiro', equipe: 'Kelly Ferreira Esch, Laura Fantti Davilla Serpa, Láisa Pontes Teixeira Lisboa Martins, Fernanda de Lima Pérez', fotoPremio: fotoRJ, premio: 'Grande Prêmio', nivel: 'grande' },
    { titulo: 'Normas.leg.br', entidade: 'Senado Federal', equipe: 'João Alberto de Oliveira Lima', fotoPremio: fotoSenado, premio: 'Referência em Boas Práticas', nivel: 'destaque' },
    { titulo: 'Investigação a partir de sistemas de informações das emendas parlamentares de saúde destinadas aos municípios maranhenses', entidade: 'Ministério Público Federal do Maranhão', equipe: 'Juraci Guimarães Junior', fotoPremio: fotoMPFMA, premio: 'Referência em Boas Práticas', nivel: 'destaque' },
    { titulo: 'Compartilhamento de Dados Interinstitucionais como Estratégia de Compliance Fiscal Cooperativo', entidade: 'Prefeitura Municipal de Pinhais/PR, Departamento de Rendas Mobiliárias da Secretaria Municipal de Planejamento, Finanças e Orçamento', equipe: 'Ricardo Shigueru Fujiwara, Denis Offmann, Givanildo dos Santos Lima, Fabrício Aparecido Gonçalves, Maristela de Oliveira Rivabem', fotoPremio: fotoPinhais, premio: 'Destaque Paraná', nivel: 'destaque' },
    { titulo: 'TRE-RN Simples Assim: Justiça para Você!', entidade: 'Tribunal Regional Eleitoral do Rio Grande do Norte', equipe: 'Andréa Carla Guedes Toscano Campos', fotoPremio: fotoTRERN, premio: 'Menção Honrosa', nivel: 'mencao' },
    { titulo: 'NEM: Núcleo de Estatística Municipal', entidade: 'Prefeitura Municipal de Sant\'Ana do Livramento/RS', equipe: 'Rafael Damasceno de Camargo, Bianca Borger Lussani, Felipe Gomes Madruga', fotoPremio: fotoSantana, premio: 'Menção Honrosa', nivel: 'mencao' },
    { titulo: 'Muralha Digital - CIOSP (Centro Integrado de Operações de Segurança Pública)', entidade: 'Prefeitura Municipal de Campo Largo/PR', equipe: 'Fabiano Arruda Bianchinho', fotoPremio: fotoCampoLargo, premio: 'Menção Honrosa', nivel: 'mencao' },
    { titulo: 'Painel ID: Dados, um caminho para a cidadania', entidade: 'Secretaria de Governo Digital / Ministério da Gestão e da Inovação em Serviços Públicos', equipe: 'Hudson Vinicius Mesquita, Simone Cabanelas Martinez, Thiara dos Santos Alves, Bianca Izumi Maeda, Beatriz Aleixo Bezerra de Sales', fotoPremio: fotoMGI, premio: 'Menção Honrosa', nivel: 'mencao' },
    { titulo: 'Inovação e Gestão no Poder Judiciário: Uma Abordagem Empírica com Inteligência Artificial Generativa para Otimização e Gestão de Riscos de Processos', entidade: 'Tribunal Regional Eleitoral de São Paulo', equipe: 'Luís Felipe de Oliveira Reis', fotoPremio: fotoTRESP, premio: 'Menção Honrosa', nivel: 'mencao' },
    { titulo: 'Boas Práticas na Gestão de Grupo de Trabalho Remoto para Análise de Processos Judiciais Antigos no TRE Goiás', entidade: 'Tribunal Regional Eleitoral de Goiás', equipe: 'Vitor Carneiro Ramos, Patrick Letouze, José Carlos Lucio Maia, Ilana Murici Ayres, Rodrigo de Melo Brustolin', fotoPremio: fotoTREGO, premio: 'Menção Honrosa', nivel: 'mencao' },
    { titulo: 'Painel e Indicador de Maturidade do Plano Plurianual das Entidades Municipais do Estado do Paraná', entidade: 'Tribunal de Contas do Estado do Paraná', equipe: 'Robson Fernandes Soares, Rafael Morais Gonçalves Ayres, Fabio Junior Damacena, Douglas Nascimento de Oliveira, Vinicius Garcia Pimenta', fotoPremio: fotoTCEPR, premio: 'Menção Honrosa', nivel: 'mencao' },
  ],
};

export default edicao2025;
