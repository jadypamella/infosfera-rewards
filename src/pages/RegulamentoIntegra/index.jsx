import { useEffect } from 'react';
import { Box, Typography, Divider, Chip } from '@mui/material';
import CtaVerde from '../../components/CtaVerde';
import styles from './index.module.css';

const Art = ({ children }) => <Typography component="div" className={styles.article}>{children}</Typography>;
const Par = ({ children }) => <Typography component="div" className={styles.paragrafo}>{children}</Typography>;
const Sec = ({ title, children }) => (
  <Box className={styles.section}>
    <Typography variant="h2" className={styles.sectionTitle}>{title}</Typography>
    <Box className={styles.articles}>{children}</Box>
  </Box>
);

const RegulamentoIntegra = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);
  return (
    <>
    <Box className={styles.page}>
      <Box className={styles.container}>

        <Box className={styles.header}>
          <Chip label="Aprovado em 18/03" className={styles.chip} size="small" />
          <Typography variant="h1" className={styles.title}>Prêmio Infosfera 2026</Typography>
          <Typography className={styles.subtitle}>
            Regulamento do Prêmio Infosfera de Boas Práticas em Gestão da Informação na Esfera Pública - Edição 2026
          </Typography>
          <Typography className={styles.preamble}>
            O Núcleo de Pesquisa em Informações, Direito e Sociedade da Universidade Federal do Paraná (Infojus.UFPR) e o Laboratório de Riscos, Privacidade, Segurança e Crises da Universidade de Brasília (LabRisk/UnB), com o apoio de seus parceiros institucionais, por meio da Comissão Executiva do Prêmio Infosfera de Boas Práticas em Gestão da Informação na Esfera Pública, doravante denominado Prêmio Infosfera, tornam público o regulamento da edição de 2026.
          </Typography>
        </Box>

        <Divider className={styles.divider} />

        <Sec title="Disposições Preliminares">
          <Art>Art. 1º. O Prêmio Infosfera 2026 terá abrangência em todo o território nacional.</Art>
          <Art>Art. 2º. A cerimônia de premiação da edição de 2026 será realizada na cidade de Goiânia, Goiás, no mês de novembro, durante o Encontro de Administração da Justiça (EnAJUS), em parceria autônoma e independente.</Art>
        </Sec>

        <Sec title="Objetivos">
          <Art>Art. 3º. O Prêmio Infosfera 2026 é uma iniciativa criada com o propósito de disseminar e reconhecer solenemente servidores, equipes e entidades responsáveis por aplicar boas práticas de gestão da informação, contribuindo para o aprimoramento e modernização da gestão pública.</Art>
          <Art>
            Art. 4º. São objetivos estratégicos da premiação:
            <ul>
              <li>Identificar práticas em uso de gestão da informação que contribuam para o aprimoramento e modernização da gestão pública;</li>
              <li>Mitigar o isolamento de boas ideias, fomentando uma cultura nacional de compartilhamento;</li>
              <li>Fomentar a replicabilidade de boas práticas;</li>
              <li>Servir de instrumento de reconhecimento nacional e como repositório de memória institucional e técnica de práticas em uso.</li>
            </ul>
          </Art>
        </Sec>

        <Sec title="Elegibilidade">
          <Art>Art. 5º. Poderão participar do Prêmio Infosfera 2026 órgãos e entidades da Administração Direta e Indireta, dos Poderes Executivo, Legislativo e Judiciário, bem como das funções essenciais à Justiça (Ministério Público, Advocacia Pública e Defensoria Pública), e dos sistemas de controle externo (Tribunais de Contas), em todos os níveis federativos — União, Estados, Distrito Federal e Municípios — compreendendo autarquias, fundações, empresas públicas, sociedades de economia mista e consórcios públicos.</Art>
          <Art>Art. 6º. É vedada a participação de membros do Comitê Executivo ou da Comissão Julgadora, bem como de seus parentes de até segundo grau.</Art>
        </Sec>

        <Sec title="Inscrições">
          <Art>
            Art. 7º. A inscrição dar-se-á exclusivamente via Plataforma Infosfera de Boas Práticas (<a href="https://boaspraticas.infosfera.inf.br/" target="_blank" rel="noopener noreferrer" style={{color:'var(--luz-tinta)'}}>https://boaspraticas.infosfera.inf.br/</a>) até a data limite prevista no cronograma oficial do Prêmio (Anexo 2).
            <Par>§ 1º. Todas as práticas cadastradas na Plataforma estarão automaticamente inscritas no Prêmio Infosfera 2026.</Par>
            <Par>§ 2º. Não serão aceitas inscrições fora do prazo ou realizadas por qualquer outro meio que não seja a Plataforma Infosfera de Boas Práticas.</Par>
          </Art>
          <Art>Art. 8º. Cada órgão ou entidade poderá cadastrar um número ilimitado de práticas na Plataforma Infosfera de Boas Práticas, contudo, apenas as 3 (três) práticas de maior pontuação técnica da respectiva instituição estarão habilitadas para avançar para a fase competitiva do Prêmio.</Art>
        </Sec>

        <Sec title="Admissibilidade ao Prêmio e Temáticas">
          <Art>
            Art. 9º. Para concorrer ao Prêmio, as práticas inscritas devem estar obrigatoriamente vinculadas a um ou mais dos eixos temáticos indicados no Anexo I.
            <Par>Parágrafo único. A lista de temas e subtemas do Anexo I não é exaustiva, podendo ser admitidas submissões em assuntos diversos, desde que aderentes ao propósito geral do Prêmio.</Par>
          </Art>
          <Art>
            Art. 10. São condições adicionais de admissibilidade de práticas ao Prêmio:
            <ul>
              <li>Apresentar resultados práticos e mensuráveis, sendo admitidos diferentes níveis de maturidade de operação (de piloto a plenamente estabelecidas);</li>
              <li>Possuir status de Cadastro Ouro na Plataforma Infosfera de Boas Práticas até a data limite da inscrição, o que se refere à existência de evidências exaustivas que comprovem resultados e o impacto real da prática.</li>
            </ul>
            <Par>Parágrafo único. Práticas consideradas meramente conceituais ou em fase inicial de planejamento não serão admissíveis ao Prêmio, visto que a essência da premiação é o reconhecimento das iniciativas aplicadas e comprovadas.</Par>
          </Art>
        </Sec>

        <Sec title="Comissão Julgadora">
          <Art>
            Art. 11. A Comissão Julgadora será composta por profissionais de notório saber, experiência acadêmica ou aplicada nos campos da inovação pública, tecnologia da informação, ciência de dados, administração pública ou áreas correlatas, designados por ato do Comitê Executivo.
            <Par>§ 1º. Para assegurar o equilíbrio e a celeridade nas deliberações, a Comissão terá composição ímpar, variando de 03 (três) a 05 (cinco) membros titulares.</Par>
            <Par>§ 2º. A atuação na Comissão Julgadora é considerada prestação de serviço público relevante, não sendo remunerada a qualquer título.</Par>
          </Art>
          <Art>
            Art. 12. As decisões da Comissão Julgadora possuem natureza estritamente técnica e soberana.
            <Par>Parágrafo Único. Não caberá recurso administrativo quanto ao mérito da avaliação, pontuação ou classificação final das práticas, dada a natureza discricionária e técnica do julgamento.</Par>
          </Art>
          <Art>Art. 13. A atuação dos avaliadores será pautada pelos princípios constitucionais da impessoalidade, moralidade e probidade administrativa.</Art>
          <Art>
            Art. 14. Para garantir a isenção durante o processo de seleção de premiados, é vedada a participação de avaliadores que possuam vínculo funcional ou colaborativo com órgãos que tenham práticas concorrentes nas categorias sob sua avaliação.
            <Par>§ 1º. Caso o avaliador identifique qualquer conflito de interesses, alinhamento prévio ou relação de parentesco com os responsáveis por projeto sob sua análise, deverá declarar-se impedido de imediato.</Par>
            <Par>§ 2º. O impedimento de um avaliador em determinada prática não o inabilita para a avaliação das demais, desde que não haja contaminação da imparcialidade.</Par>
          </Art>
          <Art>Art. 15. Os membros da Comissão Julgadora obrigam-se a manter o mais estrito sigilo sobre todas as informações e documentos a que tiverem acesso durante o processo de avaliação.</Art>
          <Art>
            Art. 16. São deveres de cautela e confidencialidade dos avaliadores:
            <ul>
              <li>Salvaguardar a integridade das informações recebidas durante o processo de julgamento, impedindo o acesso de terceiros não autorizados;</li>
              <li>Não reproduzir, extrair ou divulgar dados presentes na Plataforma Infosfera de Boas Práticas para finalidades alheias ao escopo da avaliação;</li>
              <li>Abster-se de utilizar informações privilegiadas obtidas durante o certame em benefício próprio ou de outrem;</li>
              <li>Manter o sigilo sobre as notas parciais e deliberações internas até a publicação oficial dos resultados e cerimônia de premiação.</li>
            </ul>
          </Art>
        </Sec>

        <Sec title="Categorias de Premiação">
          <Art>
            Art. 17. O Prêmio Infosfera 2026 será estruturado por meio de um sistema de distinções de mérito, observada a pontuação técnica final e a natureza jurídica do órgão proponente, nas seguintes categorias:
            <ul>
              <li><strong>Grande Prêmio Infosfera:</strong> distinção máxima concedida à prática que obtiver a maior pontuação global absoluta no ranking geral, independentemente do eixo temático ou da esfera federativa, sendo considerada a solução de maior impacto e excelência da edição;</li>
              <li><strong>Destaque Regional (Goiás):</strong> distinção outorgada à prática de maior pontuação técnica entre as instituições sediadas no Estado de Goiás, com o objetivo de valorizar a inovação no ente federativo anfitrião do evento;</li>
              <li><strong>Destaque Municipal:</strong> distinção destinada exclusivamente a iniciativas desenvolvidas no âmbito de Prefeituras, Secretarias Municipais ou autarquias municipais, visando reconhecer a capilaridade da inovação no nível local;</li>
              <li><strong>Menções Honrosas:</strong> distinções de reconhecimento técnico atribuídas a até 07 (sete) práticas finalistas que, embora não tenham atingido o topo do ranking global, demonstram mérito excepcional em critérios específicos, tais como criatividade disruptiva, baixo custo de implementação ou superação de desafios tecnológicos complexos.</li>
            </ul>
            <Par>Parágrafo único. Vigora o princípio da não cumulatividade, pelo qual uma única prática não poderá ser premiada em mais de uma categoria, devendo prevalecer, quando for o caso, a premiação de maior hierarquia.</Par>
          </Art>
        </Sec>

        <Sec title="Reconhecimentos Especiais">
          <Art>
            Art. 18. A categoria Referência em Boa Prática possui natureza excepcional e atua como instrumento de indução estratégica e mapeamento livre pela Comissão Julgadora.
            <Par>§ 1º. Esta categoria destina-se a laurear iniciativas de notório impacto nacional ou colaborativo que, embora exemplares, não tenham ingressado via fluxo regular de inscrição na Plataforma.</Par>
            <Par>§ 2º. A escolha nesta categoria é discricionária da Comissão, baseando-se em mapeamento ativo de mercado, literatura técnica e evidências públicas de sucesso.</Par>
            <Par>§ 3º. As práticas assim reconhecidas serão convidadas a compor o acervo da Plataforma Infosfera, servindo de modelo de replicabilidade para as demais instituições.</Par>
          </Art>
          <Art>
            Art. 19. A critério do Comitê Executivo, poderá ser instituída a distinção de Escolha Popular (Aclamação Pública), realizada em ambiente digital oficial após a divulgação dos finalistas técnicos.
            <Par>§ 1º. A concessão desta distinção é independente das notas técnicas, mas sujeita à homologação da Comissão Julgadora.</Par>
            <Par>§ 2º. A Comissão reserva-se o direito de invalidar a votação popular de determinada prática caso identifique o uso de mecanismos artificiais (bots), impulsionamento pago ou condutas que firam a ética do processo de premiação.</Par>
            <Par>§ 3º. Esta é a única categoria passível de acúmulo com as demais previstas neste Regulamento.</Par>
          </Art>
        </Sec>

        <Sec title="Critérios de Julgamento">
          <Art>
            Art. 20. A avaliação será baseada nos seguintes critérios e pesos:
            <Box component="table" sx={{width:'100%',borderCollapse:'collapse',mt:2,fontSize:'0.9rem',display:'block',overflowX:'auto'}}>
              <Box component="thead">
                <Box component="tr" sx={{background:'var(--luz-nevoa-2)'}}>
                  {['Critério','Descrição','Peso'].map(h => (
                    <Box key={h} component="th" sx={{padding:'0.75rem 1rem',textAlign:'left',borderBottom:'2px solid var(--luz-tinta)',fontWeight:700,color:'var(--luz-tinta)',whiteSpace:'nowrap'}}>{h}</Box>
                  ))}
                </Box>
              </Box>
              <Box component="tbody">
                <Box component="tr" sx={{'&:hover':{background:'var(--luz-nevoa)'},borderBottom:'1px solid var(--luz-linha)'}}>
                  <Box component="td" sx={{padding:'0.75rem 1rem',fontWeight:600,verticalAlign:'top',minWidth:'200px'}}>Relevância e Qualidade Técnica</Box>
                  <Box component="td" sx={{padding:'0.75rem 1rem',color:'var(--luz-texto)',verticalAlign:'top'}}>Avalia a pertinência da solução frente aos problemas identificados e a robustez metodológica da prática. Analisa-se o alinhamento da iniciativa com os eixos temáticos do Prêmio, a coerência entre os objetivos propostos e os meios utilizados, o grau de inovação em relação aos processos tradicionais da gestão pública e a conformidade técnica da solução com padrões éticos e normativos.</Box>
                  <Box component="td" sx={{padding:'0.75rem 1rem',textAlign:'center',fontWeight:700,color:'var(--luz-tinta)',verticalAlign:'top'}}>3,5</Box>
                </Box>
                <Box component="tr" sx={{'&:hover':{background:'var(--luz-nevoa)'},borderBottom:'1px solid var(--luz-linha)'}}>
                  <Box component="td" sx={{padding:'0.75rem 1rem',fontWeight:600,verticalAlign:'top'}}>Impacto e Resultados</Box>
                  <Box component="td" sx={{padding:'0.75rem 1rem',color:'var(--luz-texto)',verticalAlign:'top'}}>Avalia a eficácia da prática e os benefícios gerados para a administração e para o cidadão. Analisa-se, com base em comprovação documental do impacto gerado, a entrega de valor público por meio de indicadores ou evidências de desempenho, ganhos de eficiência (redução de tempo, custos ou burocracia), melhoria na qualidade dos serviços prestados, entre outros.</Box>
                  <Box component="td" sx={{padding:'0.75rem 1rem',textAlign:'center',fontWeight:700,color:'var(--luz-tinta)',verticalAlign:'top'}}>4,0</Box>
                </Box>
                <Box component="tr" sx={{'&:hover':{background:'var(--luz-nevoa)'}}}>
                  <Box component="td" sx={{padding:'0.75rem 1rem',fontWeight:600,verticalAlign:'top'}}>Replicabilidade e Sustentabilidade</Box>
                  <Box component="td" sx={{padding:'0.75rem 1rem',color:'var(--luz-texto)',verticalAlign:'top'}}>Avalia o potencial de escala e a continuidade da iniciativa no tempo. Analisa-se a capacidade de a prática ser transferida ou adaptada para outros órgãos ou contextos federativos, bem como a sua viabilidade financeira, técnica e institucional a longo prazo, observando se a iniciativa possui governança estabelecida que garanta sua manutenção além do ciclo de seus idealizadores.</Box>
                  <Box component="td" sx={{padding:'0.75rem 1rem',textAlign:'center',fontWeight:700,color:'var(--luz-tinta)',verticalAlign:'top'}}>3,0</Box>
                </Box>
              </Box>
            </Box>
          </Art>
          <Art>
            Art. 21. No caso de empate na pontuação final, o desempate será realizado de forma sucessiva, em favor da prática que obtiver a maior nota nos critérios de maior peso.
            <Par>Parágrafo único. Persistindo o empate, a decisão caberá soberanamente ao Comitê Executivo, mediante análise do histórico da prática e do tempo de implementação.</Par>
          </Art>
        </Sec>

        <Sec title="Etapas">
          <Art>
            Art. 22. O processo de seleção dos premiados observará o seguinte rito procedimental, de caráter sucessivo e eliminatório:
            <ul>
              <li><strong>Fase de Admissibilidade:</strong> Verificação técnica pela equipe de curadoria da Plataforma para confirmar se a prática atingiu o cadastro Status Ouro, mediante o preenchimento de campos e anexação de evidências.</li>
              <li><strong>Validação de Interesse:</strong> Comunicação oficial para que as práticas com status Ouro confirmem, em prazo definido em cronograma, o interesse em participar da etapa competitiva do Prêmio Infosfera 2026.</li>
              <li><strong>Avaliação de Mérito:</strong> Avaliação por parte da Comissão Julgadora, atribuição de notas conforme os critérios previstos neste Regulamento e divulgação das práticas finalistas.</li>
              <li><strong>Aclamação Pública:</strong> Participação em votação pública (conforme o Art. 19).</li>
              <li><strong>Apresentação e Cerimônia de Premiação:</strong> participação das práticas finalistas em atividades presenciais de premiação.</li>
            </ul>
          </Art>
        </Sec>

        <Sec title="Resultados e Premiação">
          <Art>
            Art. 23. A lista oficial de finalistas será divulgada nos canais da Plataforma Infosfera até o prazo estabelecido no cronograma oficial.
            <Par>Parágrafo único. A comunicação oficial aos finalistas servirá como convocação formal para a participação nas atividades presenciais de premiação em Goiânia/GO.</Par>
          </Art>
          <Art>
            Art. 24. A concessão do prêmio e a entrega das honrarias estão condicionadas ao cumprimento integral das seguintes obrigações por parte do órgão ou entidade finalista:
            <ul>
              <li><strong>Presença Institucional:</strong> Estar presente na cerimônia em Goiânia, na data designada no mês de novembro de 2026, representado por autor(es) da prática ou representante legal formalmente constituído;</li>
              <li><strong>Difusão de Conhecimento:</strong> Realizar a apresentação técnica da prática (exposição oral ou demonstração) na "Sessão de Boas Práticas" do evento, conforme orientações de tempo e formato a serem enviadas oportunamente;</li>
              <li><strong>Protocolo Solene:</strong> Participar da cerimônia solene de premiação para o recebimento do troféu e/ou certificado correspondente.</li>
            </ul>
            <Par>Parágrafo único. O não cumprimento de quaisquer das obrigações previstas no caput deste artigo resultará na desclassificação da prática para fins de premiação oficial, podendo o Comitê Executivo realizar a sucessão da honraria para a prática subsequente no ranking técnico.</Par>
          </Art>
          <Art>
            Art. 25. Uma prática que tenha sido premiada em categorias de fluxo regular (Grande Prêmio, Destaque Regional ou Destaque Municipal) em edição imediatamente anterior do Prêmio Infosfera não poderá ser objeto de nova premiação na edição subsequente.
            <Par>§ 1º. Para fins de nova candidatura à premiação, deverá ser observado um interstício mínimo de 01 (uma) edição de intervalo.</Par>
            <Par>§ 2º. A restrição de que trata o caput não impede que a prática permaneça ativa e disponível na Plataforma Infosfera do Boas Práticas para fins de consulta, disseminação e replicabilidade.</Par>
            <Par>§ 3º. A prática premiada em edição anterior poderá ser submetida novamente ao certame após o período de interstício, desde que o proponente demonstre, de forma inequívoca, que a iniciativa sofreu atualizações substanciais, melhorias incrementais ou expansão de impacto que justifiquem uma nova avaliação técnica.</Par>
            <Par>§ 4º. Casos de práticas que tenham recebido Menção Honrosa ou que tenham sido mapeadas como Referência em Boa Prática não se sujeitam à regra do interstício, podendo concorrer normalmente nas categorias principais na edição seguinte.</Par>
          </Art>
        </Sec>

        <Sec title="Ética e Propriedade">
          <Art>
            Art. 26. Os participantes declaram, no ato da confirmação de interesse (Fase II) mencionada no Artigo 22, a originalidade das informações e a inexistência de conflitos de interesse, assumindo total responsabilidade civil e administrativa pelo conteúdo apresentado.
            <Par>§ 1º. A responsabilidade de que trata o caput abrange, de forma integral, a garantia de que a prática não constitui plágio, omissão de autoria intelectual, cópia indevida, falsidade ideológica de informações ou violação de direitos de propriedade intelectual de terceiros.</Par>
            <Par>§ 2º. Caso a prática envolva tecnologias de terceiros ou parcerias público-privadas, o proponente deve possuir as autorizações necessárias para a publicidade e disseminação da solução na Plataforma Infosfera.</Par>
          </Art>
          <Art>
            Art. 27. A Comissão Organizadora reserva-se o direito de revogar, a qualquer tempo, premiações e distinções já concedidas, caso sejam descobertas irregularidades tardias que firam este Regulamento.
            <Par>§ 1º. A revogação ocorrerá mediante processo administrativo sumário, garantido o direito de manifestação do órgão envolvido.</Par>
            <Par>§ 2º. Em caso de revogação, o órgão será compelido a devolver o troféu e os certificados físicos, e a menção à prática será excluída do rol de vencedores nos canais oficiais, podendo a Comissão decidir pela ascensão da prática subsequente no ranking técnico.</Par>
          </Art>
          <Art>Art. 28. Ao se inscrever, o participante cede ao Prêmio Infosfera, de forma gratuita e definitiva, o direito de uso de som, imagem e voz captados durante o evento ou enviados no material de inscrição, para fins de divulgação, publicações técnicas e memória histórica, nos termos da Lei nº 9.610/1998.</Art>
        </Sec>

        <Sec title="Disposições Finais">
          <Art>Art. 29. A inscrição na Plataforma e a subsequente participação no Prêmio Infosfera 2026 implicam na concordância integral e irretratável com os termos deste Regulamento e com as normas de uso da Plataforma Infosfera de Boas Práticas.</Art>
          <Art>Art. 30. A participação no certame é de natureza gratuita e voluntária, não gerando qualquer direito a remuneração, prêmios em espécie, gratificações ou benefícios financeiros diretos aos participantes ou às instituições proponentes.</Art>
          <Art>Art. 31. A Comissão Julgadora detém plena autonomia técnica e soberania em suas decisões, podendo, inclusive, não conceder premiações em determinadas categorias (deixando-as desertas) caso as práticas inscritas não atinjam o patamar mínimo de excelência e qualidade exigido para o prestígio do Prêmio.</Art>
          <Art>Art. 32. A organização do Prêmio exime-se de qualquer responsabilidade por inscrições não concluídas dentro do prazo regulamentar, independentemente do motivo, incluindo, mas não se limitando a: falhas técnicas em equipamentos ou conexões de internet por parte do proponente; interrupções no fornecimento de energia elétrica ou instabilidades em serviços de telecomunicações; erros no preenchimento do formulário ou ausência de documentos obrigatórios para o Status Ouro.</Art>
          <Art>Art. 33. O Comitê Executivo reserva-se o direito de alterar o cronograma do Prêmio (datas de inscrição, avaliação e cerimônia), mediante ampla divulgação nos canais oficiais, por motivo de força maior ou conveniência administrativa.</Art>
          <Art>
            Art. 34. Os casos omissos neste Regulamento, bem como as dúvidas interpretativas surgidas no decorrer do processo, serão resolvidos de forma soberana pelo Comitê Executivo.
            <Par>Parágrafo Único. Das decisões de mérito proferidas pela Comissão Julgadora e pelo Comitê Executivo não caberá recurso administrativo, em face da natureza técnica e discricionária do julgamento.</Par>
          </Art>
        </Sec>

        <Divider className={styles.divider} />

        <Sec title="Anexo I – Temas">
          <Box sx={{overflowX:'auto',mt:1}}>
            <Box component="table" sx={{width:'100%',borderCollapse:'collapse',fontSize:'0.9rem'}}>
              <Box component="thead">
                <Box component="tr" sx={{background:'var(--luz-nevoa-2)'}}>
                  {['Categoria','Descrição do Escopo','Temas Relacionados (Exemplos)'].map(h => (
                    <Box key={h} component="th" sx={{padding:'0.75rem 1rem',textAlign:'left',borderBottom:'2px solid var(--luz-tinta)',fontWeight:700,color:'var(--luz-tinta)'}}>{h}</Box>
                  ))}
                </Box>
              </Box>
              <Box component="tbody">
                {[
                  ['A. Governança Digital e Eficiência Administrativa','Foco na transformação digital como ferramenta de desburocratização e economia. Inclui a modernização da máquina pública, otimização de processos e melhoria na comunicação interinstitucional.','Governança Eletrônica; Interoperabilidade; Transformação Digital; Inovação em Serviços Públicos.'],
                  ['B. Gestão Estratégica da Informação','Abrange desde a estruturação de dados até o uso de tecnologias avançadas (IA) para extrair insights, apoiar decisões fundamentadas e criar políticas públicas baseadas em evidências.','Inteligência de Dados Públicos; Observatório de Dados; Gestão do Conhecimento; Inteligência Artificial e Ética no Setor Público.'],
                  ['C. Transparência e Integridade Governamental','Iniciativas que promovem a publicidade das ações governamentais, o acesso democrático à informação e o fortalecimento do controle social e da participação cidadã.','Transparência Digital; Inclusão Digital e Acessibilidade; Compliance e Integridade Digital.'],
                  ['D. Preservação Digital e Memória Institucional','Metodologias e sistemas dedicados à salvaguarda do patrimônio informacional público digital, garantindo acesso a longo prazo a registros de valor histórico e probatório.','Preservação da Memória Institucional; Curadoria Digital de Acervos Públicos; Gestão de Documentos Arquivísticos Digitais.'],
                  ['E. Privacidade, Segurança e Resiliência Informacional','Proteção do ecossistema público contra ameaças e incidentes. Foco na integridade, confidencialidade e disponibilidade dos dados, além de estratégias de mitigação de riscos, incluindo aspectos de privacidade e proteção de dados.','Segurança Cibernética; Confidencialidade e Integridade; Gestão de Documentos Digitais; Segurança, Privacidade e Proteção de dados'],
                  ['F. Outros Temas Correlatos','Projetos que apresentem aderência aos objetivos do Prêmio Infosfera 2026, mas que não estejam explicitamente listados nas categorias anteriores.','Inovação em Processos; Transparência Ativa; Tecnologias Emergentes; Cidades Inteligentes; Sustentabilidade Digital; e outras propostas de gestão da informação na esfera pública.'],
                ].map(([cat, desc, ex]) => (
                  <Box key={cat} component="tr" sx={{'&:hover':{background:'var(--luz-nevoa)'},borderBottom:'1px solid var(--luz-linha)'}}>
                    <Box component="td" sx={{padding:'0.75rem 1rem',fontWeight:600,verticalAlign:'top',minWidth:'180px'}}>{cat}</Box>
                    <Box component="td" sx={{padding:'0.75rem 1rem',color:'var(--luz-texto)',verticalAlign:'top'}}>{desc}</Box>
                    <Box component="td" sx={{padding:'0.75rem 1rem',color:'var(--luz-texto-suave)',verticalAlign:'top',fontSize:'0.85rem'}}>{ex}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Sec>

        <Sec title="Anexo II – Cronograma / Datas importantes">
          <Box sx={{overflowX:'auto',mt:1}}>
            <Box component="table" sx={{width:'100%',borderCollapse:'collapse',fontSize:'0.9rem'}}>
              <Box component="thead">
                <Box component="tr" sx={{background:'var(--luz-nevoa-2)'}}>
                  {['Marco Temporal','Atividade Principal'].map(h => (
                    <Box key={h} component="th" sx={{padding:'0.75rem 1rem',textAlign:'left',borderBottom:'2px solid var(--luz-tinta)',fontWeight:700,color:'var(--luz-tinta)'}}>{h}</Box>
                  ))}
                </Box>
              </Box>
              <Box component="tbody">
                {[
                  ['01 de Abril a 31 de Julho','Período de submissão e cadastramento na Plataforma Infosfera.'],
                  ['01 a 15 de Agosto','Período de Análise de Admissibilidade e Validação de interesse'],
                  ['1 a 30 de Agosto','Avaliação de Mérito por pela Comissão Julgadora.'],
                  ['10/09/2026','Data limite para a Divulgação dos Resultados Oficiais e comunicação oficial aos finalistas.'],
                  ['25/09','Data limite para confirmação de participação presencial'],
                  ['05 a 09 de Outubro','Fase de Aclamação Pública em ambiente digital.'],
                  ['05 de Novembro','Sessão de Apresentação de Boas Práticas e Cerimônia de Premiação em Goiânia/GO.'],
                ].map(([marco, atividade]) => (
                  <Box key={marco} component="tr" sx={{'&:hover':{background:'var(--luz-nevoa)'},borderBottom:'1px solid var(--luz-linha)'}}>
                    <Box component="td" sx={{padding:'0.75rem 1rem',fontWeight:600,verticalAlign:'top',minWidth:'180px',color:'var(--luz-tinta)'}}>{marco}</Box>
                    <Box component="td" sx={{padding:'0.75rem 1rem',color:'var(--luz-texto)',verticalAlign:'top'}}>{atividade}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Sec>

      </Box>
    </Box>
    <CtaVerde />
    </>
  );
};

export default RegulamentoIntegra;
