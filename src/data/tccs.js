// Dados dos Trabalhos de Conclusão de Curso - BCC e BSI 2025
// Para adicionar um novo TCC, basta incluir um novo objeto no array seguindo a estrutura abaixo
// Cada TCC deve ter apenas dois links: Monografia e Apresentação
// Cursos: BCC (Bacharelado em Ciência da Computação) e BSI (Bacharelado em Sistemas de Informação)

import { getTccFileURL } from '../utils/urls.js';

export const tccs2025 = [
  {
    id: 202501,
    titulo: 'EM BUSCA DA APLICAÇÃO DE PROTOCOLOS DE ROTEAMENTO PARA EVITAR ATAQUES DO TIPO BURACO NEGRO',
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
    id: 202301,
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
    id: 202302,
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
    id: 202303,
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
    id: 202304,
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
    id: 202305,
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
    id: 202306,
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
    id: 202307,
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
    id: 202308,
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
    id: 202309,
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
  },

  {
    id: 202310,
    titulo: 'USO DE APRENDIZADO DE MÁQUINA PARA DETECÇÃO DE ATAQUES DDOS',
    autor: 'Gustavo Amaral Duarte Rego',
    orientador: 'Prof. Dr. Kelton Augusto P da Costa',
    curso: 'BCC',
    descricao: `A Segurança Cibernética é um tema que possui muita relevância nos dias atuais, uma vez que a sociedade depende cada vez mais do mundo digital e de suas ferramentas. Ataques nesse meio são comuns de diversas formas, mas um dos mais ameaçadores para um serviço é o Distributed Denial of Service, ou, Ataque de negação de serviço distribuído, que tem por objetivo esgotar recursos do host. Aprendizado de Máquina pode ser definido como uma ramificação da inteligência artificial, que foca no uso de dados e algoritmos para imitar a forma como humanos aprendem. Por ser altamente eficiente no reconhecimento de padrões, é possível utilizar algoritmos desse tipo para auxiliar no reconhecimento de ataques cibernéticos. Nesse trabalho são abordados estudos e implementações sobre o uso desses algoritmos para verificar sua acurácia e viabilidade utilizando conjuntos de dados de tráfego de rede`,
    palavrasChave: ['Aprendizado de Máquina', 'Detecção de Ataques', 'DDoS', 'Segurança Cibernética'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'gustavo_rego_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'gustavo_rego_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 202311,
    titulo: 'USO DE APRENDIZADO DE MÁQUINA PARA DETECÇÃO DE FACES FALSAS GERADAS POR INTELIGÊNCIA ARTIFICIAL',
    autor: 'João Pedro Vieira Rodrigues',
    orientador: 'Prof. Dr. Kelton Augusto P da Costa',
    curso: 'BCC',
    descricao: `O avanço no campo da inteligência artificial, especialmente na área de aprendizado profundo, possibilitou a criação de rostos humanos por meio de modelos de redes neurais, como a Generative Adversarial Network (GAN). Entretanto, esse avanço levantou preocupações significativas em relação à segurança, especialmente nos contextos de biometria e autenticação digital. Diante desse problema, este trabalho concentra-se na aplicação de uma técnica específica de aprendizado de máquina conhecida como Capsule Neural Network (CapsNet). Esta abordagem se mostrou promissora para o processamento de imagens e será comparada a outras técnicas, como Local Binary Pattern, Res-Net e Gram-Net. A análise detalhada desses métodos permitirá uma compreensão mais aprofundada de suas capacidades e limitações, contribuindo para o desenvolvimento de sistemas mais seguros e eficazes no contexto da inteligência artificial e suas aplicações práticas. A avaliação crítica dessas técnicas é essencial para aprimorar a segurança e a autenticidade em sistemas que dependem de reconhecimento facial e autenticação digital.`,
    palavrasChave: ['Aprendizado de Máquina', 'Detecção de Faces Falsas', 'Inteligência Artificial', 'Capsule Neural Network', 'Generative Adversarial Network'],
    dataDefesa: '2023-10',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'joao_rodrigues_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'joao_rodrigues_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 202312,
    titulo: 'APLICAÇÃO DE SOLID EM UM SISTEMA WEB PARA INTERMEDIAÇÃO DE COMPRA E VENDA DE COMIDA NA UNESP',
    autor: 'Julio Cesar Benelli Varella',
    orientador: 'Prof. Dr. Higor Amario de Souza',
    curso: 'BCC',
    descricao: `A venda de alimentos por estudantes universitários tem se mostrado uma prática recorrente e vital para a manutenção financeira e suporte de projetos acadêmicos. Diante das dificuldades enfrentadas pelos estudantes para sustentar-se durante o curso, somado à necessidade de financiamento para projetos de extensão, o desenvolvimento de um sistema unificado para a comercialização de alimentos emerge como uma solução estratégica. Este trabalho propõe a criação de um sistema Web para facilitar e otimizar a venda de alimentos no campus da UNESP-Bauru, fornecendo um ponto de encontro virtual entre compradores e vendedores. Além disso, o sistema é desenvolvido com ênfase em práticas de codificação limpa e padrões de projeto, utilizando princípios SOLID e o padrão MVC para assegurar um código organizado, manutenível e expansível. A escolha do framework Symfony e do Bootstrap proporciona a funcionalidade e responsividade necessárias ao sistema. A disponibilização do código como open-source reforça a intenção de contribuir para a comunidade acadêmica, permitindo evolução contínua do projeto. Este trabalho, portanto, não só atende uma necessidade prática, mas também promove a manutenibilidade, a extensibilidade do sistema e a prática colaborativa dentro do ambiente universitário.`,
    palavrasChave: ['Sistema Web', 'Compra e Venda de Comida', 'UNESP', 'SOLID', 'MVC', 'Symfony', 'Bootstrap'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'julio_varella_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'julio_varella_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 202313,
    titulo: 'DETECÇÃO DE FAKE NEWS EM PORTUGUÊS UTILIZANDO INFERÊNCIA DE LINGUAGEM NATURAL',
    autor: 'Larissa Mayumi Barela Hondo',
    orientador: 'Prof. Assoc. Aparecido Nilceu Marana',
    curso: 'BCC',
    descricao: `Com o advento da Internet, é possível obter informações a partir de quaisquer fontes sobre eventos ao redor do mundo, inclusive informações imprecisas e até mesmo falsas, sendo estas chamadas de fake news. A divulgação e a proliferação de fake news podem causar prejuízos e danos seríssimos para as pessoas e para a sociedade de modo geral, salientando a extrema importância de sua identificação. Isso pode ser feito com o uso do Processamento de Linguagem Natural, que abrange técnicas computacionais para a análise automática e à representação de linguagens antropológicas. Por exemplo, a detecção de fake news pode ser feita com a Inferência de Linguagem Natural, uma sub-área do Processamento de Linguagem Natural focada na verificação da implicação ou contradição em um par de sentenças, que pode ser utilizada neste contexto considerando notícias já confirmadas como sendo verdadeiras como a premissa e uma notícia suspeita como a hipótese, dessa forma, caso haja contradição entre a hipótese e a premissa, a notícia suspeita é considerada falsa, caso contrário, ela é rotulada como verdadeira. Visto isso, o objetivo deste trabalho é propor um método de detecção automática de fake news para a língua portuguesa utilizando a Inferência de Linguagem Natural. Como não há uma base de dados em português que utilize a Inferência de Linguagem Natural para esta aplicação, é possível traduzir dados já existentes para este idioma, em vista disso, neste trabalho utilizou-se a base de dados em inglês denominada FNID-FakeNewsNet. Com base nos resultados obtidos para o conjunto de teste, observa-se um desempenho melhor quando a premissa é utilizada junto à hipótese. Além disso, de modo geral, é possível observar que os resultados não foram afetados significativamente pela tradução dos dados em inglês para o português.`,
    palavrasChave: ['Fake News', 'Inferência de Linguagem Natural', 'Processamento de Linguagem Natural', 'Detecção Automática', 'FNID', 'FakeNewsNet'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'larissa_hondo_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'larissa_hondo_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 202314,
    titulo: 'CONSTRUÇÃO DE UM MÓDULO QUÂNTICO PARA O CLASSIFICADOR BASEADO EM FLORESTA DE CAMINHOS ÓTIMOS',
    autor: 'Maria Angélica Krüger Miranda',
    orientador: 'Prof. Assoc. João Paulo Papa',
    curso: 'BCC',
    descricao: `O interesse pela computação quântica tem experimentado um aumento constante, impulsionado principalmente pelas recentes inovações tecnológicas anunciadas por empresas renomadas, como a IBM e a Google. Essas inovações têm o potencial de solucionar desafios significativos em diversos setores, como financeiro, médico, físico, farmacêutico, químico, entre outros. Esse potencial advém da capacidade da computação quântica de resolver problemas que eram anteriormente considerados inviáveis. Concomitantemente a esse crescimento, o campo do aprendizado de máquina tem se destacado como uma ferramenta computacional crucial para o desenvolvimento de novas soluções e tecnologias. Desta forma, o trabalho tem por interesse implementar e avaliar um módulo quântico para o classificador baseado em floresta de caminhos ótimos para explorar a abordagem híbrida do aprendizado de máquina quântico. Os experimentos conduzidos revelaram desafios a serem superado, no entanto, a implementação demonstrou ser promissora devido à sua viabilidade, além de representar o primeiro estudo sobre a aplicação da computação quântica neste classificador em específico.`,
    palavrasChave: ['Computação Quântica', 'Aprendizado de Máquina Quântico', 'Floresta de Caminhos Ótimos', 'Classificador Quântico'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'maria_miranda_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'maria_miranda_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 202315,
    titulo: 'DESENVOLVIMENTO DE UMA APLICAÇÃO INTEGRADA PARA GERENCIAMENTO DE PROJETOS E RECURSOS PARA PROGRAMADORES',
    autor: 'Matheus dos Santos Ribeiro Silva',
    orientador: 'Profª. Me. Juliana da Costa Feitosa',
    curso: 'BCC',
    descricao: `A área de Desenvolvimento de Software experimentou um crescimento exponencial nas últimas décadas, impulsionando uma revolução tecnológica que tem tido um impacto significativo na vida cotidiana de bilhões de pessoas. Esse avanço se traduz em benefícios notáveis em setores como Educação, Medicina, Engenharia, Matemática, Indústria, entre outros. Em consonância com a crescente demanda, houve um aumento substancial na quantidade de profissionais de desenvolvimento de software. No contexto da programação no Brasil, modalidades de emprego mais flexíveis, a exemplo o trabalho como pessoa jurídica, oferece vantagens atrativas, como salários superiores e benefícios fiscais. No entanto, a gestão de projetos em diversas empresas, em múltiplos projetos e com uma variedade de tecnologias pode ser desafiadora, resultando na dispersão da atenção dos programadores, o que prejudica sua eficiência e desempenho. Com o advento e a disseminação do acesso às Inteligências Artificiais Generativas (IAG) para um público mais amplo, observou-se a integração de serviços e conjuntos de software com Inteligência Artificial (IA), unificando funcionalidades e dados para melhorar a eficiência e o desempenho dos usuários. Grandes empresas, como Microsoft e Google, buscam cada vez mais integrar seus diversos serviços e ambientes de trabalho com IAs, como o ChatGPT da OpenAI ou o Bart da Google, com o objetivo de disponibilizar produtos úteis para seus usuários e otimizar seus lucros por meio da melhoria contínua de suas ferramentas. Nesse contexto, este projeto propõe a criação de uma dashboard integrada que utiliza uma Application Programing Interface (API) do ChatGPT e do Google Workspace. Essa plataforma visa centralizar o gerenciamento de códigos e anotações em projetos de desenvolvimento, com o propósito de aprimorar a eficiência e a produtividade dos desenvolvedores de software.`,
    palavrasChave: ['Gerenciamento de Projetos', 'Desenvolvimento de Software', 'Inteligência Artificial Generativa', 'ChatGPT', 'Google Workspace', 'Dashboard Integrada'],
    dataDefesa: '2023-03-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'matheus_silva_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'matheus_silva_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 202316,
    titulo: 'DETECÇÃO DE IMAGENS DEEPFAKE: UM ESTUDO COMPARATIVO',
    autor: 'Miguel Cesar Correa',
    orientador: 'Prof. Dr. Leandro A Passos Junior',
    curso: 'BCC',
    descricao: `Com o avanço acelerado da inteligência artificial, os deepfakes - vídeos ou imagens manipulados de maneira convincente - emergiram como uma preocupação significativa na era digital. Essas falsificações hiper-realistas têm o potencial de enganar indivíduos, disseminar desinformação e comprometer a autenticidade da informação, representando uma ameaça real à segurança digital e à integridade informativa. Este trabalho aborda a necessidade de desenvolver métodos eficazes para a detecção de deepfakes, uma ferramenta essencial na luta contra a desinformação, apresentando os conceitos fundamentais da área. Este trabalho comparou três métodos estado-da-arte de detecção de imagens falsas, apresentando resultados satisfatórios, com o método que emprega medidas contra o sobre-ajuste tendo o melhor desempenho.`,
    palavrasChave: ['Deepfake', 'Detecção de Imagens Falsas', 'Inteligência Artificial', 'Segurança Digital', 'Desinformação'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'miguel_correa_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'miguel_correa_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 202317,
    titulo: 'ANÁLISE DE DADOS DA SAÚDE PARA MELHORIAS EM POLÍTICAS PÚBLICAS',
    autor: 'Nathan Del Grande Souza',
    orientador: 'Prof. Dr. Higor Amario de Souza',
    curso: 'BCC',
    descricao: `O campo da saúde pública enfrenta desafios complexos. Questões de desigualdade na distribuição de médicos e alto deslocamento de pacientes para internações têm implicações profundas na eficiência e equidade do SUS (Sistema Único de Saúde). Este trabalho tem como objetivo investigar esses desafios críticos por meio de análises geoespaciais, gráficas e correlacionais. Visa-se avaliar a distribuição de médicos, o deslocamento de pacientes e a possível relação entre esses fatores. Além disso, busca-se fornecer uma base sólida para melhorar as políticas públicas de saúde no estado de São Paulo. O estudo empregou análises geoespaciais para mapear a distribuição de médicos, gráficos de dispersão para explorar relações entre variáveis-chave, como renda per capita e deslocamento de pacientes, e análises correlacionais com o método de Pearson para quantificar essas relações. As análises revelaram disparidades significativas na distribuição de médicos e desafios relacionados ao deslocamento de pacientes. Correlações importantes foram identificadas, mas a complexidade das variáveis sugere que há fatores adicionais a serem considerados.`,
    palavrasChave: ['Saúde Pública', 'Análise de Dados', 'Políticas Públicas', 'Desigualdade na Saúde', 'Geoespacial'],
    dataDefesa: '2023-16-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'nathan_souza_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'nathan_souza_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 202318,
    titulo: 'DIAGNÓSTICO AUTOMÁTICO DE AVC PÓS-TRAUMA COM BASE NA FACE DE PACIENTES UTILIZANDO REDES NEURAIS EM GRAFOS',
    autor: 'Nícolas Barbosa Gomes',
    orientador: 'Prof. Assoc. João Paulo Papa',
    curso: 'BCC',
    descricao: `O acidente vascular cerebral (AVC) pode causar danos significativos aos neurônios, resultando em várias sequelas que afetam negativamente a capacidade do paciente de realizar atividades diárias essenciais, como mastigar, engolir e se comunicar verbalmente. Portanto, é importante que pacientes com essas dificuldades passem por um processo de tratamento e sejam monitorados durante sua execução para avaliar a melhora de sua condição de saúde. O uso de ferramentas computadorizadas e algoritmos que podem detectar rapidamente e de maneira acessível tais sequelas é útil para auxiliar na recuperação do paciente. Devido à morte das células internas do cérebro, um AVC frequentemente leva à paralisia facial, resultando em assimetria entre os dois lados do rosto. Esta monografia se concentra na análise desta assimetria usando um método de aprendizado profundo sem aplicar cálculos de características manuais, introduzindo o modelo “Facial Point Graphs” (FPG), uma abordagem inovadora que se destaca na aprendizagem de informações geométricas e no tratamento eficaz de variações, além do escopo dos cálculos manuais. O FPG permite que o modelo detecte de forma eficaz os distúrbios orofaciais causados por um AVC, a partir de imagens do paciente. A abordagem proposta atingiu acurácias superiores a 90% no conjunto de dados Toronto Neuroface, apontando para avanços substanciais neste domínio.`,
    palavrasChave: ['Acidente Vascular Cerebral', 'Redes Neurais em Grafos', 'Diagnóstico Automático', 'Assimetria Facial', 'Facial Point Graphs'],
    dataDefesa: '2023-16-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'nicolas_gomes_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'nicolas_gomes_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 202319,
    titulo: 'DESENVOLVIMENTO DE UMA APLICAÇÃO PARA ANÁLISE DE DESEMPENHO DE GRANDES MODELOS DE LINGUAGEM',
    autor: 'Nicole Barbosa Gomes',
    orientador: 'Prof. Assoc. João Paulo Papa',
    curso: 'BCC',
    descricao: `A linguagem é uma necessidade humana desde sua origem. Com métodos mais rudimentares ou mais rebuscados, o ser humano encontra maneiras de se comunicar. A partir do surgimento dos computadores e das mudanças proporcionadas por eles, um novo desafio também chegou: descobrir como gerar conversações com as máquinas. Os estudos a esse respeito levaram a invenções importantes que provocaram ideias antes consideradas impossíveis. A área de aprendizado de máquina foi responsável pela maior parte desses avanços e, graças ao ramo, modelos de redes neurais artificiais foram cada vez mais explorados. Como um dos resultados, os large language models, caracterizados por serem compostos por essas redes, apresentaram resultados admiráveis ao produzir textos muito parecidos com os escritos por humanos. O sucesso desses modelos despertou o interesse de empresas que passaram a desenvolver suas próprias versões. A partir disso, cresce a demanda por entender quais deles são mais apropriados para certas aplicações, e outras questões de desempenho. Com esse propósito, o projeto buscou desenvolver um site que pudesse reunir large language models a fim de que gerassem respostas baseadas em instruções do usuário. Além disso, a aplicação deveria ser capaz de receber feedbacks sobre o melhor texto para uma instrução específica e, dessa maneira, possibilitar análises dos dados coletados para descobrir os pontos fracos e fortes de cada modelo. No final do desenvolvimento, esses objetivos foram atingidos e o site se tornou uma ferramenta intuitiva, para atender a um grande público, e proveitosa para captura de informações relevantes e estudo dos retornos recebidos.`,
    palavrasChave: ['Grandes Modelos de Linguagem', 'Aprendizado de Máquina', 'Redes Neurais Artificiais', 'Análise de Desempenho', 'Processamento de Linguagem Natural'],
    dataDefesa: '2023-16-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'nicole_gomes_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'nicole_gomes_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 202320,
    titulo: 'RECONHECIMENTO DE MARCHA HUMANA UTILIZANDO POSES 3D ESTIMADAS DE MÚLTIPLAS POSES 2D',
    autor: 'Pedro Luiz Cason Caldato',
    orientador: 'Prof. Assoc. Aparecido Nilceu Marana',
    curso: 'BCC',
    descricao: `O reconhecimento biométrico de indivíduos é um campo de estudo amplamente explorado nos dias atuais, impulsionado pelos avanços recentes na computação e pela necessidade premente de reforçar a segurança em diversas configurações, incluindo vigilância e processos de autenticação em aplicativos como bancos e gerenciamento de documentos. Dentre as diversas abordagens biométricas desenvolvidas, destacam-se o reconhecimento facial, análise de impressões digitais, leitura da íris e reconhecimento de voz. No entanto, esses métodos geralmente exigem interação direta com os indivíduos, equipamentos especializados (no caso do reconhecimento de impressões digitais) ou imagens de alta resolução (no caso do reconhecimento facial ou de íris). Em situações que demandam reconhecimento biométrico indireto, a análise da marcha se mostra valiosa. Essa abordagem envolve a avaliação do padrão de caminhada de um indivíduo, bem como a análise de medidas relacionadas ao comprimento dos membros, como braços e pernas, a fim de identificar a pessoa comparando-a com um banco de dados existente. Este projeto tem como objetivo estabelecer uma abordagem de reconhecimento biométrico com base na marcha, utilizando representações tridimensionais de poses humanas extraídas de múltiplas imagens bidimensionais. Uma das vantagens notáveis dessa abordagem é sua maior resistência a oclusões, juntamente com um aumento na precisão do reconhecimento da marcha, alcançado por meio da incorporação de um conjunto mais abrangente de dados correlacionados provenientes de diferentes fontes de câmeras. O método proposto faz uso de uma Rede Neural Convolucional (CNN) para calcular um vetor descritivo por meio da agregação temporal das poses tridimensionais estimadas a partir de múltiplas imagens bidimensionais. A eficácia desse método foi avaliada usando as bases de dados CASIA GAIT-A e CASIA GAIT-B, resultando em taxas de precisão de 90,00% e 86,10%, respectivamente.`,
    palavrasChave: ['marca humana', 'biometria', 'poses 3D', 'redes neurais convolucionais', 'reconhecimento de padrões', 'poses 2D'],
    dataDefesa: '2023-14-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'pedro_caldato_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'pedro_caldato_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 202321,
    titulo: 'ANÁLISE DO DESEMPENHO DE HONEYPOTS E ALGORITMOS DE MACHINE LEARNING EM TAREFAS DE DETECÇÃO DE INTRUSÃO',
    autor: 'Renato Leite Camilo',
    orientador: 'Prof. Dr. Kelton Augusto P da Costa',
    curso: 'BCC',
    descricao: `A cibersegurança é uma área de grande interesse na computação. A capacidade de detectar e lidar com invasores em ambientes digitais é uma preocupação para muitas pessoas e empresas. Em contrapartida, os mecanismos que proporcionam essa capacidade nem sempre são totalmente confiáveis, falhando em algumas ocasiões e causando prejuízos inimagináveis para seus usuários. Como resolução para esse problema, muito se propõe o uso de machine learning. Esse projeto emprega dois algoritmos de clustering: K-Means e DBSCAN. O objetivo é analisar seu impacto quando usados em conjuntos com outros classificadores baseados em três algoritmos de aprendizado de máquina: Support Vector Machines, Multilayer Perceptron e K-Nearest Neighbors. Além disso, é empregado o conceito de honeypots para analisar sua usabilidade como receptáculo de informações a respeito de ataques para providenciar dados aos modelos preditivos. Tudo que chega a um honeypot é considerando um ataque e esse tipo de informação pode ser aproveitado por modelos de aprendizado de máquina.`,
    palavrasChave: ['Cibersegurança', 'Ciberataques', 'Honeypots', 'Machine Learning', 'Clustering'],
    dataDefesa: '2023-12',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'renato_camilo_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'renato_camilo_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 202322,
    titulo: 'MINERAÇÃO DE REPOSITÓRIOS PARA ANÁLISE DE CICLOS DE SOFTWARE',
    autor: 'Ronaldo Rubens Gesse Junior',
    orientador: 'Prof. Dr. Higor Amario de Souza',
    curso: 'BCC',
    descricao: `Em um cenário tecnológico em constante evolução, a análise para escolha dos componentes e tecnologias de forma assertiva desempenha um papel crucial no sucesso de qualquer projeto de software. Frameworks e bibliotecas são componentes essenciais que oferecem funcionalidades ao código e agilizam o processo de desenvolvimento, auxiliando times a entregar um resultado de forma mais eficiente ao usuário final. A mineração de repositórios surgiu como uma forma valiosa de obter informações sobre os códigos-fonte desses softwares, possibilitando análises que visualizem seus ciclos de vida e entendam seu estado atual. Neste trabalho foram analisados 85 softwares com métricas de tendências e correlações para os seguintes dados: número de commits e autores dos seus respectivos repositórios de código e nível do interesse relativo, com base nos dados do Google Trends para medir engajamento dos desenvolvedores. A partir disso foi possível analisar os resultados e entender se determinado projeto é realmente viável em seu estado atual de vida, se ele ainda é constantemente atualizado, tem as manutenções devidas e é procurado pela comunidade. Portanto, a aplicação da mineração de repositórios representa um passo importante em direção a um desenvolvimento mais informado e eficaz, alinhado com as necessidades do mercado.`,
    palavrasChave: ['Mineração de repositórios', 'Frameworks', 'Bibliotecas', 'Ciência de dados', 'Tendências de software', 'Análise de ciclos de software', 'Correlação de dados', 'Análise'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'ronaldo_gesse_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'ronaldo_gesse_apresentacao_2023.pdf')
      }
    ]
  },
  {
    id: 202323,
    titulo: 'ESTUDO DA EFICÁCIA DE MODELOS DE ESTIMATIVA DE IRRADIAÇÃO SOLAR NA REGIÃO DO CENTRO DE SÃO PAULO',
    autor: 'Virgilio Santinho Tagliavini',
    orientador: 'Prof. Assoc. João Eduardo Machado Perea Martins',
    curso: 'BCC',
    descricao: `A irradiação solar incidente na superfície terrestre é uma variável importante em diversas aplicações científicas e comerciais assim a capacidade de estimar e prever a irradiação solar global é necessária em diversos cenários, por isso existem diversos modelos para a estimar mas nenhum modelo é efetivo para toda a superfície terrestre. Assim, este trabalho tem como objetivo avaliar o desempenho de três modelos numéricos para estimar a irradiação solar diária para a região do centro do estado de São Paulo. Para isso foram utilizados dados meteorológicos de sete cidades do centro do estado de São Paulo disponibilizados pelo INMET para executar e registrar os resultados dos modelos estudados, então seus resultados foram comparados com os dados reais registrados utilizando medidas estatísticas e estocásticas. Os resultados inicialmente obtidos indicaram que apenas o modelo de Hargreaves e Samani é efetivo em estimar a irradiação solar incidente na região porque os resultados dos demais modelos apresentaram baixos índices de concordância com os dados reais. Para aumentar a precisão dos modelos estudados foi adicionado um coeficiente de ajuste para cada cidade e modelo, isso resultou em estimativas adequadas em todos os modelos, com altos valores nas medidas de avaliação utilizadas, mas o modelo de Hargreaves e Samani permaneceu como o modelo de maior precisão para todas as cidades estudadas, com exceção de Barra Bonita onde é o segundo modelo mais preciso. Assim, estes modelos são apropriados para a estimativa da irradiação solar na região do centro do estado de São Paulo.`,
    palavrasChave: ['Irradiação Solar', 'Modelos Numéricos', 'Estimativa', 'Centro de São Paulo', 'Avaliação de Desempenho'],
    dataDefesa: '2023-11',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'virgilio_tagliavini_2023.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'virgilio_tagliavini_apresentacao_2023.pdf')
      }
    ]
  },


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

