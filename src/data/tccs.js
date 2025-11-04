// Dados dos Trabalhos de Conclusão de Curso - BCC e BSI 2025
// Para adicionar um novo TCC, basta incluir um novo objeto no array seguindo a estrutura abaixo
// Cada TCC deve ter apenas dois links: Monografia e Apresentação
// Cursos: BCC (Bacharelado em Ciência da Computação) e BSI (Bacharelado em Sistemas de Informação)

import { getTccFileURL } from '../utils/urls.js';

export const tccs2025 = [
  {
    id: 1,
    titulo: 'Em busca da aplicação de protocolos de roteamento para evitar ataques do tipo Buraco Negro',
    autor: 'Alex Luiz Domingues Cassinelli',
    orientador: 'Prof. Dr. Kelton Augusto Pontara da Costa',
    curso: 'BCC',
    descricao: `O Ataque Buraco Negro é um tipo de ataque cibernético que ocorre em uma Rede Móvel Ad hoc (MANET),
    onde um nó malicioso se comporta de forma cooperativa durante o processo de descoberta de rotas, mas descarta
    silenciosamente todos os pacotes de dados recebidos. Este trabalho investiga a implementação de protocolos de
    roteamento seguros para mitigar esse tipo de ataque em redes MANETs.`,
    palavrasChave: ['MANET', 'Segurança de Redes', 'Protocolos de Roteamento', 'Ataque Buraco Negro'],
    dataDefesa: '2025-12-10',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'alex_cassinelli_2025.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'alex_cassinelli_apresentacao_2025.pdf')
      }
    ]
  },
  {
    id: 2,
    titulo: 'IDENTIFICAÇÃO BIOMÉTRICA DE PESSOAS POR MEIO DO RECONHECIMENTO FACIAL UTILIZANDO VISION TRANSFORMERS',
    autor: 'Arthur Francisco Ramos',
    orientador: 'Dr Aparecido Nilceu Marana',
    curso: 'BCC',
    descricao: `A biometria se tornou uma das formas mais seguras na tarefa de reconhecimento de indivíduos, sendo o reconhecimento facial um dos problemas clássicos na área da visão computacional. Proposto pela primeira vez há 50 anos, os sistemas de reconhecimento automático de rostos passaram por diversas mudanças ao longo do tempo, desde algoritmos tradicionais até o uso de aprendizado de máquina profundo, com destaque nas redes neurais convolucionais, que hoje predominam as pesquisas na área. Visando novas alternativas de métodos para a tarefa de reconhecimento facial, este trabalho propôs avaliar o desempenho de uma arquitetura baseada em transformadores e autoatenção com foco em imagens, o Vision Transformer, em ambientes controlados e não controlados, além do desenvolvimento de uma aplicação completa para analisar o funcionamento do modelo de forma prática. Para atingir tal objetivo, a metodologia aplicada consiste no uso de técnicas de detecção e alinhamento facial, para aperfeiçoar o treinamento e validação do modelo de reconhecimento, em conjunto com métodos de análise comuns a sistemas de identificação e verificação, a fim de mensurar o desempenho da arquitetura proposta na resolução do problema de reconhecimento facial. Os resultados demonstraram que o Vision Transformer é capaz de desempenhar a função de reconhecimento com eficácia, todavia apresentando algumas limitações em ambientes com maior instabilidade de iluminação e variações de expressões faciais, principalmente devido ao tamanho limitado das bases de dados de imagens utilizadas, mas não prejudicando a experiência do usuário e a confiabilidade do aplicativo desenvolvido.`,
    palavrasChave: ['Biometria', 'Reconhecimento Facial', 'Vision Transformer'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'arthur_ramos_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'arthur_ramos_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 3,
    titulo: 'ABORDAGEM DE APRENDIZADO PROFUNDO PARA CLASSIFICAÇÃO DE PARKINSON POR MEIO DE SINAIS DE VOZ',
    autor: 'Andre Luiz da Silva Junior',
    orientador: 'Prof. Dr. Clayton Reginaldo Pereira',
    curso: 'BCC',
    descricao: `A doença de Parkinson é um distúrbio neurológico progressivo que afeta o cérebro. O desenvolvimento de sistemas especializados capazes de diagnosticar automaticamente e com alta precisão estágios iniciais da Doença de Parkinon com base em sinais de fala representaria uma contribuição importante para o setor de saúde. Para isso, foram analisados modelos de machining learning como a regressão logistica, support vector machine, K-Neightbors, Random Forest, Decion Tree, Naive Bayes e XGBoost, além disso foi utilizado técnicas de deep learning como a Rede Neural Convolucional e a Rede Neural Recorrente. Essas abordagens foram aplicadas a três conjuntos de dados com caracteristicas próprias para um mais amplo estudo dos casos. Dois desses conjuntos de dados foram analisados com o uso de machining learning, e um com a utilização de deep learning com séries temporais, após o treino o modelo com o melhor desempenho foi selecionado. Os resultados revelaram que o modelo de teve um desempenho melhor nos dois conjunto de dados que utilizaram machining learning foi a Regressão Linear, e no deep learning foi a Rede Neural Convolucional. Os resultados obtidos revelaram uma acurácia de classificação de 92.31% e 86.84% para os dois conjuntos de dados, o que evidencia a capacidade de obter resultados excelentes mesmo com um conjunto limitado de dados. Além disso, foram observadas precisões de 91.43% e 86.72%, recalls de 100.00% e 97.37%, e F1-Scores de 95.52% e 91.74%. Esses valores corroboram a qualidade dos resultados alcançados. Por sua vez, a Rede Neural Convolucional apresentou uma acurácia de classificação de 86.69%, precisão de 86.83%, recall de 88.20% e F1-Score de 87.51%, mesmo com um número reduzido de épocas de treinamento. Isso evidencia a eficácia desse modelo como uma alternativa valiosa para a classificação. Esses resultados indicam que as classificações terão um papel significativo no avanço do setor médico. É importante ressaltar a relevância de uma análise cuidadosa na escolha do modelo a ser utilizado, pois diferentes conjuntos de dados podem apresentar resultados mais favoráveis em modelos distintos.`,
    palavrasChave: ['Parkinson', 'Sinais de Voz', 'Classificação'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'andre_junior_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'andre_junior_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 4,
    titulo: 'AUXÍLIO AO DIAGNÓSTICO DE DOENÇA NEURODEGENERATIVA UTILIZANDO EXPRESSÕES FACIAIS',
    autor: 'Arissa Yoshida',
    orientador: 'Prof. Assoc. João Paulo Papa',
    curso: 'BCC',
    descricao: `O diagnóstico precoce da Esclerose Lateral Amiotrófica (ELA) é fundamental para a determinação do início dos tratamentos, auxiliando tanto no aumento da expectativa de vida quanto na melhora da qualidade de seus pacientes. A análise de movimentos faciais fornece informações importantes para o reconhecimento dos sintomas iniciais da ELA; entretanto, detectar esses sinais não é uma tarefa fácil. Com o advento da visão computacional e dos modelos de aprendizado de máquina, métodos computacionais de auxílio a diagnóstico de doenças neurodegenerativas por meio de vídeos vêm se tornando uma realidade, gerando diferentes abordagens para detecção dos biomarcadores da ELA. Por utilizarem métodos interpretativos, grande parte dos estudos acabam por não explorar a dimensão temporal durante o processo de classificação. Este trabalho propõe introduzir modelos sequenciais de Redes Neurais Recorrentes (Recurrent Neural Network - RNN) em dados sequenciais (vídeos) de tal forma que seja investigada a relevância da dinâmica temporal das unidades de ação (Action Units - AUs) na identificação da ELA. Concluindo com o desenvolvimento de uma ferramenta de auxílio ao diagnóstico por computador (computer-aided diagnosis, CAD).`,
    palavrasChave: ['Esclerose Lateral Amiotrófica', 'Expressões Faciais', 'Redes Neurais Recorrentes', 'Doença Neurodegenerativa'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'arissa_yoshida_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'arissa_yoshida_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 5,
    titulo: 'IMPLEMENTAÇÃO DO DEVOPS PARA GERENCIAMENTO DE RISCOS DE SEGURANÇA NA NUVEM',
    autor: 'Artur Kyung Min Lee',
    orientador: 'Prof. Dr. Kleber Rocha de Oliveira',
    curso: 'BCC',
    descricao: `A conjuntura do mundo da tecnologia nos últimos anos permitiu com que a computação em nuvem progredisse de forma exponencial por ter diversos benefícios como a velocidade, a escalabilidade, o custo, a disponibilidade e outros. Porém, assim como novas tecnologias de nuvem foram surgindo, ameaças cibernéticas também foram aumentando. Hoje, tornou-se necessário que todo ambiente em \textit{cloud} tenha ferramentas que sejam capazes de manter a integridade, confiabilidade e disponibilidade das aplicações nesse ambiente. Entende-se que uma das principais funções das ferramentas de segurança é de detectar falhas ou ações suspeitas que devem ser bloqueadas em prol da proteção da aplicação. Por conta disso, é vital que as tecnologias de segurança sejam implementadas com um estudo prévio para que possam incorporar-se ao fluxo da aplicação sem anular os principais benefícios da nuvem. Esse trabalho propõe integrar ferramentas de segurança de maneira que as mesmas não interfiram de negativamente no fluxo da aplicação. Seguindo as melhores práticas do DevOps, será criado uma aplicação/programa na nuvem (AWS) que tenha fluxo de integração e entrega contínuas onde serão integradas as ferramentas responsáveis por trazer segurança e visibilidade ao ambiente.`,
    palavrasChave: ['DevOps', 'Segurança na Nuvem', 'Gerenciamento de Riscos'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'artur_lee_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'artur_lee_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 6,
    titulo: 'CRIAÇÃO DE UM MAPEADOR OBJETO-GRAFO PARA OTIMIZAÇÃO E SIMPLIFICAÇÃO NO GERENCIAMENTO DE BANCOS DE DADOS BASEADOS EM GRAFOS EM AMBIENTES DE BIG DATA: UMA ANÁLISE COMPARATIVA COM MAPEADORES OBJETO-RELACIONAL E OUTROS BANCOS DE DADOS',
    autor: 'Cassiano Henrique A Rodrigues',
    orientador: 'Prof. Assoc. Aparecido Nilceu Marana',
    curso: 'BCC',
    descricao: `O trabalho visou criar um mapeador objeto-grafo (OGM) para melhorar a manipulação e recuperação de dados em ambientes de big data. Em cenários de grande amplitude de da- dos, é crucial escolher soluções eficientes, uma vez que a complexidade desses ambientes pode impactar negativamente o desempenho. Portanto introduziu-se uma camada de abstração por meio dos OGMs para simplificar a interação com bancos de dados baseados em grafos. O projeto concentrou-se na estruturação, implementação e avaliação do mapeador. Testes exaustivos foram realizados para capturar métricas e indicadores, demonstrando a eficiên- cia do mapeador em otimizar a manipulação e recuperação de dados, proporcionando uma experiência simplificada para os desenvolvedores e validando sua capacidade de aprimorar a eficácia na manipulação de dados e fornecer uma interface intuitiva para o desenvolvi- mento de aplicações.`,
    palavrasChave: ['Mapeador Objeto-Grafo', 'Big Data', 'Bancos de Dados em Grafos', 'Objeto-Relacional', 'Otimização', 'Simplificação'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'cassiano_rodrigues_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'cassiano_rodrigues_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 7,
    titulo: 'ANÁLISE DO IMPACTO DA SEGURANÇA VIÁRIA NA MOBILIDADE ATIVA',
    autor: 'Danilo Alves Siqueira',
    orientador: 'Prof. Dr. Higor Amario de Souza',
    curso: 'BCC',
    descricao: `O presente trabalho tem como proposta aplicar técnicas de ciência de dados com python para analisar e visualizar dados tabulares e geolocalizados com o objetivo de entender o impacto do cenário atual da segurança viária sobre a mobilidade ativa na cidade de São Paulo. As análises buscam entender o panorama referente a quantidade de acidentes envolvendo ciclistas e pedestres, a distribuição desses, além de características dos acidentes e acidentados. Visa-se também entender a influência da segurança das infraestruturas cicloviárias sobre os acidentes e o gasto gerado ao sistema de saúde público para atendimento das vítimas.`,
    palavrasChave: ['Segurança Viária', 'Mobilidade Ativa', 'Ciência de Dados', 'Python', 'Acidentes'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'danilo_siqueira_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'danilo_siqueira_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 8,
    titulo: 'ESTUDO SOBRE FRAUDES DIGITAIS E O DESENVOLVIMENTO DE APLICATIVO PARA SMARTPHONES ANDROID E IOS PARA USO EM PALESTRAS DE SENSIBILIZAÇÃO E ESCLARECIMENTO',
    autor: 'Gabriel Carvalho Polido',
    orientador: 'Prof. Assoc. Eduardo Martins Morgado',
    curso: 'BCC',
    descricao: `Golpes e fraudes digitais são uma ameaça em constante evolução, principalmente quando utilizam três estratégias de ataque: Phishing, Spoofing e Engenharia Social. Durante a pesquisa, foi destacada a natureza sofisticada dessas ameaças, que visam enganar os usuários e obter acesso a informações confidenciais. O estudo forneceu uma análise aprofundada de cada estratégia, explorando exemplos de casos e técnicas de mitigação. Além disso, foram estudadas as estratégias de ataque que são utilizadas atualmente para que seja possível enfrentar com êxito essas ameaças. tais estratégias de ataque tem o intuito de roubar informações e recursos, visando posteriormente utilizar tais informações para aplicar golpes e fraudes elaboradas na vítima. Assim sendo, foi enfatizada a importância da conscientização e da educação como estratégias cruciais para proteger indivíduos e organizações contra essas ameaças digitais em um ambiente cada vez mais interconectado, dependente da tecnologia e em constante evolução. Foi desenvolvido um aplicativo informático que incentiva as pessoas a tomarem medidas mais proativas para combater eficazmente os golpes e fraudes digitais, garantindo um ambiente cibernético mais seguro.`,
    palavrasChave: ['Fraudes Digitais', 'Golpes Digitais', 'Phishing', 'Spoofing', 'Engenharia Social', 'Segurança da Informação'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'gabriel_polido_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'gabriel_polido_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 9,
    titulo: 'APLICATIVO GAMIFICADO PARA ORGANIZAÇÃO DE TAREFAS E ROTINAS ACADÊMICAS',
    autor: 'Gabriel Henrique Garcia Ticianeli',
    orientador: 'Profª. Me. Juliana da Costa Feitosa',
    curso: 'BCC',
    descricao: `O ingresso na faculdade é um momento de mudanças drásticas no estilo de vida dos estudantes. Ele marca uma transição onde o aluno deve se adaptar a novas responsabilidades que muitas vezes causam uma sobrecarga de trabalho. Esse aumento na demanda pode ser esmagador para aqueles que estão despreparados. Dessa forma, manejar o pouco tempo disponível de maneira efetiva torna-se essencial para o sucesso acadêmico. Como solução para o problema mencionado, o trabalho objetivou desenvolver um aplicativo mobile gamificado para organização de tarefas e rotinas, chamado de “Guilda dos Universitários”. Gamificação é a utilização de elementos de design de jogos em aplicações que não são jogos puros, visando aumentar a interatividade e o engajamento do usuário. Utilizando esta estratégia, o sistema foi projetado para fornecer uma maneira mais envolvente e motivadora de gerenciar a carga de trabalho acadêmica e criar bons hábitos. Por ser o sistema operacional mais usado pelos smartphones, foi escolhido o Android como plataforma para o programa, e a construção do trabalho foi feita na Unity Engine. O aplicativo resultante possui as funções de cadastrar tarefas (tanto únicas quanto repetíveis), contabilizar hábitos diários e formar grupos de usuários para compartilharem dos mesmos afazeres. As ferramentas são complementadas por mecânicas de progressão e recompensas, e os grupos possuem uma tabela de classificação para estimular a competitividade. Os resultados obtidos de uma comparação deste projeto com outros disponíveis no mercado de aplicativos mostra que existem poucas opções para organização de tarefas que aplicam a gamificação, e dentre estes, não há a presença de sistemas cooperativos entre os usuários.`,
    palavrasChave: ['Aplicativo Gamificado', 'Organização de Tarefas', 'Rotinas Acadêmicas', 'Gamificação', 'Unity'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'gabriel_ticianeli_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'gabriel_ticianeli_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 10,
    titulo: 'QUALIDADE DE SOFTWARE: ANÁLISE DE DESEMPENHO DE FERRAMENTAS DE AUTOMAÇÃO EM TESTES E2E',
    autor: 'Geovanna Carolina F V T Brandao',
    orientador: 'Prof. Dr Kleber Rocha de Oliveira',
    curso: 'BCC',
    descricao: `O presente trabalho tem como tema a análise de desempenho de ferramentas de automação de testes de ponta-a-ponta. Onde o objetivo é abordar esse estudo de caso a partir do modelo ISSO 25010, aliado aos critérios ortogonais de classificação da abordagem de localização de objetos em tela. Ademais, é realizada uma análise do parecer da indústria de tecnologia em relação a essa categoria de testes. A escolha deste tema é impulsionada pela crescente complexidade dos sistemas de software, a necessidade da redução de custos e aumento da dependência social na tecnologia da informação.`,
    palavrasChave: ['Qualidade de Software', 'Testes E2E', 'Automação de Testes', 'Desempenho de Ferramentas'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'geovanna_brandao_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'geovanna_brandao_apresentacao_2023.pdf')
      }
    ]
  }
];

// Função para buscar TCCs por palavra-chave
export function buscarTccsPorPalavraChave(palavraChave) {
  return tccs2025.filter(tcc =>
    tcc.palavrasChave.some(palavra =>
      palavra.toLowerCase().includes(palavraChave.toLowerCase())
    )
  );
}

// Função para buscar TCC por ID
export function buscarTccPorId(id) {
  return tccs2025.find(tcc => tcc.id === id);
}

// Função para buscar TCCs por orientador
export function buscarTccsPorOrientador(orientador) {
  return tccs2025.filter(tcc =>
    tcc.orientador.toLowerCase().includes(orientador.toLowerCase())
  );
}

