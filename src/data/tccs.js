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
    id: 202201,
    titulo: 'INVESTIGAÇÃO DE TÉCNICAS DE OTIMIZAÇÃO PARA ALGORITMOS DE APRENDIZAGEM DE MÁQUINA',
    autor: 'André Libório de Barros Ferraz',
    orientador: 'Prof. Dr. João Paulo Papa',
    curso: 'BCC',
    descricao: `Tendo em vista as inovações tecnológicas da última década, este trabalho busca, por meio de técnicas como vetorização utilizando AVX-512 e arcabouços computacionais para arquiteturas paralelas como o Galois, modificar algoritmos de aprendizado de máquina baseados em grafos, neste caso em particular, o OPF (Optimum‐Path Forest) com a finalidade de melhorar o seu tempo de execução.Resultados apresentam ganhos significativos com o uso da tecnologia AVX-512, particularmente nas configurações com 1 thread de até 26,84% se comparado a versão com uso de AVX2 e 112,83% se comparado a versão não vetorizada.Quanto ao Galois, fora realizado um estudo inicial que avaliou o desempenho do MST (Minimum Spanning Tree) e os resultados preliminares apontam um speedup de até 6x com o dataset Epinions. No futuro, esperase complementar a implementação do Galois para outros algoritmos de grafos baseados no OPF.`,
    palavrasChave: ['Computação de alto desempenho', 'Redes neurais', 'Informática'],
    dataDefesa: '2022-07',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'andre_liborio_2022.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'andre_liborio_apresentacao_2022.pdf')
      }
    ]
  },

  {
    id: 202202,
    titulo: 'SISTEMA PARA GERENCIAMENTO DE DESPENSA COM UTILIZAÇÃO DE DATA VISUALIZATION',
    autor: 'Karen Aya Murakawa',
    orientador: 'Profª. Drª. Simone das Graças Domingues Prado',
    curso: 'BCC',
    descricao: `Com a geração e o armazenamento de crescentes volumes de dados, têm-se destacado a aplicação de conceitos e técnicas provenientes de diferentes áreas do conhecimento com o propósito de auxiliar na análise e na compreensão de tais elementos, os quais têm adquirido relevância estratégica nos mais diversos contextos. Considerando-se o potencial da visualização de dados no apoio à análise e à transmissão de informações de maneira precisa e simples, assim como os desafios existentes em relação à gestão de estoques de alimentos tanto nos ambientes residencial como corporativo, este trabalho teve como propósito o desenvolvimento de um protótipo de um aplicativo móvel voltado para o gerenciamento de despensas, com foco residencial, em que fosse possível, através da consulta a representações visuais dos dados, o acompanhamento e a avaliação de ações efetuadas com relação à aquisição, uso ou consumo, e descarte de alimentos, buscando-se subsidiar futuras tomadas de decisões. Para o desenvolvimento do sistema, foram utilizadas como principais tecnologias, dentre outras, os frameworks Ionic e Angular, e a biblioteca Chart.js.`,
    palavrasChave: ['Gerenciamento de estoques de alimentos', 'Visualização de dados', 'Aplicativo móvel'],
    dataDefesa: '2022-08-03',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'karen_aya_2022.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'karen_aya_apresentacao_2022.pdf')
      }
    ]
  },

  {
    id: 202203,
    titulo: 'AUXÍLIO AO DIAGNÓSTICO DE ELA E AVC ATRAVÉS DE EXPRESSÃO FACIAL',
    autor: 'Leonardo Silva de Oliveira',
    orientador: 'Profª. Drª. Simone das Graças Domingues Prado',
    curso: 'BCC',
    descricao: `O presente trabalho foca em verificar a possibilidade do auxílio ao diagnóstico de pessoas que possuem ou não doenças neurológicas através do estudo das expressões faciais. O trabalho utiliza a ferramenta de extração de Action Units (py-feat) para extrair informações de alguns vídeos, para serem analisados onde nesses vídeos voluntários realizaram algumas tarefas de fala ou movimento olhando para a câmera. Através desses actions units extraídos, uma análise exploratória foi feita dos dados extraídos e alguns testes de predição de classificação de algoritmos específicos de aprendizado de máquina para classificar quais dos pacientes possuíam ou não algum tipo de doença. Por fim, o trabalho apresenta a conclusão com base nos resultados que apresentaram pontuações altas para tarefas e algoritmos específicos e depois alguns possíveis trabalhos futuros.`,
    palavrasChave: ['Aprendizado Artificial', 'Reconhecimento Facial', 'Diagnóstico de doenças neurológicas', 'Actions Units', 'Inteligência Artificial', 'Ciência de Dados'],
    dataDefesa: '2022-07',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'leonardo_silva_2022.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'leonardo_silva_apresentacao_2022.pdf')
      }
    ]
  },

  {
    id: 202204,
    titulo: 'RESOLUÇÃO DO PROBLEMA DE ESCALONAMENTO DE ENFERMEIROS EM HOSPITAL UTILIZANDO SIMULATED ANNEALING',
    autor: 'Lucas Henrique Russo do Nascimento',
    orientador: 'Profª. Drª. Andréa Carla Gonçalves Vianna',
    curso: 'BCC',
    descricao: `O Problema de Escalonamento de Enfermeiros se baseia em definir em quais dias e turnos cada enfermeiro trabalhará respeitando a demanda do hospital. Geralmente, nas instituições hospitalares, essa escala é definida manualmente por uma pessoa responsável a cada mês. Como a quantidade de combinações possíveis é muito grande, encontrar uma escala adequada pode levar muito tempo, além de demandar muita experiência da pessoa encarregada. Este trabalho propõe a resolução do problema utilizando a metaheurística Simulated Annealing para determinar uma solução do Problema de Escalonamento de Enfermeiros. Os resultados são apresentados de forma a avaliar a qualidade da solução obtida. Foram feitos diversos testes computacionais comprovando a viabilidade da metaheurística proposta.`,
    palavrasChave: ['Problema de Escalonamento de Enfermeiros','Metaheurísticas', 'Simulated Annealing', 'Otimização Matemática'],
    dataDefesa: '2022-08',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'lucas_henrique_2022.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'lucas_henrique_apresentacao_2022.pdf')
      }
    ]
  },

  {
    id: 202205,
    titulo: 'DETECÇÃO DE ESTEGANOGRAFIA EM IMAGENS UTILIZANDO APRENDIZADO DE MÁQUINA',
    autor: 'Matheus Esquinelato Polachini',
    orientador: 'Prof. Dr. Kelton Augusto Pontara da Costa',
    curso: 'BCC',
    descricao: `Esteganografia em imagens se refere ao processo de incorporação de uma mesagem secreta em um arquivo de imagem sem causar mudança visual perceptível a quem tenha acesso a essa imagem. Devido ao contínuo desenolvimento de novas técnicas de esteganografia, há a necessidade de desenvolvimento de novas formas de detecção dessas técnicas. Este trabalho buscou investigar a eficiência do uso de aprendizado de máquina na detecção das técnicas de esteganografia LSB, PVD e JSteg em imagens utilizando a técnica de aprendizado de máquina Support Vector Machine e características por métricas de qualidade da imagem.`,
    palavrasChave: ['Esteganografia', 'Aprendizado de Máquina', 'Sistemas de Segurança', 'Support Vector Machine'],
    dataDefesa: '2022-08-03',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'matheus_esquinelato_2022.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'matheus_esquinelato_apresentacao_2022.pdf')
      }
    ]
  },

  {
    id: 202206,
    titulo: 'FERRAMENTA DE COLETA E ANÁLISE DE DADOS DE LICITAÇÕES PÚBLICAS',
    autor: 'Matheus Yuichi Yamashiro',
    orientador: 'Prof. Dr. Kelton Augusto Pontara da Costa',
    curso: 'BCC',
    descricao: `O mundo conectado atual vêm causando grandes mudanças no dia-a-dia das pessoas. Uma delas é a quantidade de informações consumidas e produzidas. Isso vêm crescendo de maneira tão alarmante que já não é mais possível analisar essas informações de maneira manual. É necessário automatizá-las. Contudo, a maneira que as pessoas pensam e se comunicam, seja pessoalmente ou por meios informatizados (pela internet), é fundamentalmente diferente da maneira que os computadores o fazem. Assim, é necessário gerar métodos e interfaces para que os computadores, capazes de processar um volume de dados muito maior que os humanos, entendam e utilizem os dados gerados pelas pessoas. A área de pesquisa de Processamento de Linguagem Natural (PLN) é justamente isso, desenvolver técnicas para que os computadores processem dados textuais gerados por- humanos-para-humanos de maneira automática. Neste trabalho, foi realizado um estudo sobre esta área de pesquisa, algumas técnicas implementadas e aplicadas em dados de licitações públicas da Prefeitura de Bauru, e desenvolvida uma interface web para a visualização dos resultados obtidos.`,
    palavrasChave: ['Processamento de Linguagem Natural', 'Desenvolvimento web', 'Licitações Públicas'],
    dataDefesa: '2022-08',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'matheus_yuichi_2022.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'matheus_yuichi_apresentacao_2022.pdf')
      }
    ]
  },

  {
    id: 202207,
    titulo: 'CRIPTOWATCHER: ROBÔ DE INVESTIMENTO EM CRIPTOMOEDAS UTLIZANDO ALGORITMO DE ARBITRAGEM TRIANGULAR',
    autor: 'Maurício Sugimoto Polloni',
    orientador: 'Prof. Dr. Kleber Rocha de Oliveira',
    curso: 'BCC',
    descricao: `Por possuírem alta volatilidade, criptomoedas, como Bitcoin, Ethereum, Dogecoin em um curto espaço de tempo e em alta frequência, tem expressiva variação de preços. O processo de negociações, envolvendo o atos de compra ou venda destas criptomoedas, denominado trade, pode se mostrar ineficiente e inseguro se executado de forma manual. Neste cenário, foi produzido um robô de investimentos para executar estas negociações de forma automática, ininterrupta e que conseguisse acompanhar a volatilidade das criptomoedas. Este robô foi desenvolvido utilizando a linguagem de programação Python e alocado na plataforma de computação em nuvem AWS. Nele foi implementado o algoritmo de arbitragem triangular, com objetivo de ganho tanto na alta, quanto na baixa. Como resultado foi feito um protótipo para monitorar os preços e executar ações de trade através da API da corretora de investimentos em criptomoedas Binance.`,
    palavrasChave: ['Criptomoedas', 'Algoritmo de Arbitragem', 'Arbitragem Triangular', 'Licitações Públicas'],
    dataDefesa: '2022-07',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'mauricio_sugimoto_2022.pdf')
      },
      {
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'mauricio_sugimoto_apresentacao_2022.pdf')
      }
    ]
  },

  {
    id: 202208,
    titulo: 'SEGURANÇA EM WEB3 : VULNERABILIDADES EM CARTEIRAS DIGITAIS BASEADAS EM NAVEGADORES',
    autor: 'Caio Castilho Donato Regal',
    orientador: 'Prof. Me. Luiz Felipe de Camargo',
    curso: 'BCC',
    descricao: `A aplicação de carteira de criptomoedas mais utilizada da rede Ethereum, Metamask, possui uma brecha que pode ser manipulada para ter acesso não permitido a uma conta. É apresentada essa falha, assim como é feito uma apresentação sobre os processos envolvidos com a chave privada e a chave publica utilizadas pela Blockchain, como elas são geradas e armazenadas pela aplicação de navegadores Metamask, além de expor métodos de criptografia como a criptografia de curva elíptica e a criptografia assimétrica. São propostas mudanças na aplicação para reparar esse problema de segurança, como o uso do endereço MAC do computador para ser usado na criptografia, apesar de conseguir fazer uma prova do conceito o resultado não é o suficiente para ser implementado na aplicação real.`,
    palavrasChave: ['Ethereum', 'Metamask', 'Navegadores', 'Sandbox', 'Segurança da informação', 'Criptografia', 'Criptografia de curva elíptica'],
    dataDefesa: '2023-01-30',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'caio_castilho_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'caio_castilho_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202209,
    titulo: 'MÓDULO DE RECONHECIMENTO DE GESTOS PARA AMBIENTES DE REALIDADE AUMENTADA',
    autor: 'Davi Augusto Neves Leite',
    orientador: 'Prof. Dr. Antonio Carlos Sementille',
    curso: 'BCC',
    descricao: `A Realidade Aumentada pode ser definida como a área responsável por enriquecer o mundo real por meio da combinação de objetos gerados por computador. Por conta disso, a Realidade Aumentada possui grande potencial para ser aplicada nas mais diversas áreas, como Educação, Medicina, Marketing e Área Industrial, uma vez que beneficia qualquer tarefa que necessite de acesso a uma informação que não teria normalmente. Contudo, a dificuldade na utilização da interatividade natural nas soluções recentes de Head-Mounted Displays voltadas para smartphones tem sido um dos principais obstáculos para a acessibilidade e popularização da Realidade Aumentada. Desta forma, era de interesse do projeto estruturar, implementar e avaliar um módulo reconhecedor de gestos de mão para ambientes de Realidade Aumentada. Os experimentos propostos consistiam na realização de ações diretas e indiretas do usuário, com relação aos objetos virtuais, em diferentes cenários da Realidade Aumentada, baseados em tarefas. Os resultados obtidos mostraram a viabilidade do módulo em aplicações de Realidade Aumentada com o uso de Head-Mounted Displays Video See-Through baseados em smartphones para tarefas em que a precisão não é um requisito fundamental.`,
    palavrasChave: ['Realidade Aumentada', 'Interação por Gestos de Mão', 'Head-Mounted Displays', 'MediaPipe Hands', 'Vuforia'],
    dataDefesa: '2023-01-19',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'davi_augusto_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'davi_augusto_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202210,
    titulo: 'APLICAÇÃO DE TÉCNICAS DE ENSEMBLE LEARNING NA DETECÇÃO ESTÁTICA E DINÂMICA DE MALWARES',
    autor: 'Denis Henrique dos Santos',
    orientador: 'Prof. Dr. Kelton Augusto Pontara da Costa',
    curso: 'BCC',
    descricao: `Com o constante aumento do uso de tecnologia no dia a dia a importância da segurança da informação cresce drasticamente, levando à existência de malwares ser uma ameaça ao funcionamento de sistemas e dados importantes, requisitando formas de combatê-los. Modelos de ensemble learning são modelos de aprendizado de máquina que utilizam vários algoritmos para chegar a resultados de um determinado problema. Este trabalho propõe um sistema de detecção de malware utilizando modelos ensemble learning dos tipos bagging, boosting e stacking, usando o conjunto de dados Malevis para análise estática e o conjunto de dados Top-1000 PE Imports para análise dinâmica. Os modelos foram treinados e os resultados foram comparados com outro sistema de detecção de malware. Os resultados obtidos foram satisfatórios, especialmente os da análise dinâmica, com modelos do tipo bagging e stacking mostrando maior desempenho em ambos os cenários, enquanto que os modelos do tipo boosting apresentaram maior dificuldade em chegar a resultados mais eficazes com os conjuntos de dados usados.`,
    palavrasChave: ['Malware', 'Aprendizado de máquina', 'Ensemble learning'],
    dataDefesa: '2023-01',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'denis_henrique_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'denis_henrique_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202211,
    titulo: 'JOGO SÉRIO PARA SIMULAÇÃO E CONSCIENTIZAÇÃO DE PROBLEMAS RELACIONADOS À MOBILIDADE URBANA',
    autor: 'Eduardo Antonio Comerão Stecca Almeida',
    orientador: 'Profª. Me. Juliana da Costa Feitosa',
    curso: 'BCC',
    descricao: `Conforme a criação e o aperfeiçoamento de novas tecnologias, dispositivos móveis capazes de executar softwares que demandam muito poder computacional atingiram grande destaque na nossa sociedade, atuando hoje em áreas fundamentais da nossa economia, como: transporte, alimentação e hospedagem. Pode-se, também, utilizar tais dispositivos para melhorar a qualidade de vida, a educação e o acesso à informação. Uma das maneiras de facilitar tais processos é a utilização de jogos sérios no compartilhamento de informações sobre problemas de difícil compreensão. O trabalho aqui apresentado, trata-se de um jogo sério desenvolvido para simular e expor alguns dos muitos problemas de acessibilidade urbana. O jogo: “WheelChair Simulator “, utiliza ferramentas atuais de desenvolvimento de jogos multiplataformas, como também aplica conceitos de imersão, simulação e experiência do usuário. Voltado para adolescentes e jovens adultos que possuem acesso a um dispositivo móvel, com objetivo de melhorar a compreensão e a inclusão social. Utilizando uma área pouco explorada da Computação na divulgação de tais problemas e incentivar mais pesquisas nessa área de estudo no ramo de tecnologia da informação.`,
    palavrasChave: ['Jogos Sérios', 'Acessibilidade Urbana', 'Simulação, Dispositivos Móveis'],
    dataDefesa: '2023-01-17',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'eduardo_antonio_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'eduardo_antonio_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202212,
    titulo: 'INTELIGÊNCIA ARTIFICIAL EXPLICÁVEL COM LIME E SHAP APLICADA À REDE NEURAL CONVOLUCIONAL',
    autor: 'Fabricio Steinle Amoroso',
    orientador: 'Prof. Dr. Clayton Reginaldo Pereira',
    curso: 'BCC',
    descricao: `Modelos de inteligência artificial estão presentes na vida cotidiana nos mais diversos contextos, como sistemas médicos para auxílio na detecção de doenças e motores de busca, estando, por vezes, presentes até de maneira transparente aos usuários como no caso de algoritmos de recomendação de produtos. Ao passo que a adoção de IA cresce, a complexidade dos sistemas de inteligência artificial também aumenta, tornando mais desafiadora a tarefa de compreender como foi obtido determinado resultado. Refere-se a estes modelos complexos como caixa-preta, devido à sua dificuldade de interpretação. Inteligência artificial explicável pode ser utilizada para compreender como os modelos complexos, como redes neurais convolucionais, que são amplamente aplicados, chegam a seus resultados. É proposto neste projeto de conclusão de curso, implementar técnicas de inteligência artificial explicável utilizando duas das ferramentas mais populares neste contexto: LIME e SHAP, ambas aplicadas a um modelo de rede neural convolucional utilizado para classificar imagens de exames médicos de escrita, pertencentes a um grupo de indivíduos saudáveis e outro grupo de pacientes de Parkinson. Através dos resultados obtidos foi possível obter explicações sobre o modelo descrito que podem ser interpretadas por seres humanos.`,
    palavrasChave: ['Inteligência Artificial Explicável', 'LIME', 'Parkinson', 'Rede Neural Convolucional', 'SHAP'],
    dataDefesa: '2023-01',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'fabricio_steinle_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'fabricio_steinle_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202213,
    titulo: 'TRABALHANTE : REDE SOCIAL PARA FACILITAR TURNOVER EM TRABALHOS ROTATIVOS',
    autor: 'Felipe Kroitor Cara Modena',
    orientador: 'Prof. Dr. Kleber Rocha de Oliveira',
    curso: 'BCC',
    descricao: `O turnover é uma medida usada para avaliar a rotatividade de funcionários em uma empresa, ou seja, o número de funcionários que deixam a empresa em um determinado período de tempo. É considerado um indicador importante da saúde e da cultura organizacional de uma empresa, pois pode indicar problemas como falta de satisfação no trabalho, baixa remuneração ou falta de oportunidades de crescimento. A proposta apresentada é de desenvolver uma rede social, onde os usuários podem criar perfis, se conectar com outros profissionais e compartilhar suas experiências de trabalho. Os usuários também podem avaliar as empresas e funcionários com os quais trabalharam, informando o nível de satisfação no trabalho, a remuneração e o nível de oportunidades de crescimento oferecidas. Com essas informações, o software cria uma base de dados completa e atualizada sobre as empresas e funcionários avaliados, permitindo que outros profissionais vejam as avaliações e tomem decisões informadas sobre suas carreiras. Além disso, as empresas também podem acessar o software e ver as avaliações de seus funcionários, o que as ajuda a entender melhor os pontos fortes e fracos de sua cultura organizacional e a tomar medidas para melhorar a satisfação no trabalho de seus funcionários.`,
    palavrasChave: ['rotatividade profissional', 'software', 'empresas', 'inteligência de negócios', 'contratação', 'rede social', 'recomendação profissional', 'inovação'],
    dataDefesa: '2023-01',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'felipe_kroitor_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'felipe_kroitor_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202214,
    titulo: 'SOFTWARE PARA GESTÃO DE INVENTÁRIO DE CRÉDITO DE CARBONO VISANDO A COMPENSAÇÃO DA EMISSÃO DE GASES DE EFEITO ESTUFA',
    autor: 'Gabriel Dadamos Rossetto',
    orientador: 'Prof. Dr. Kleber Rocha de Oliveira',
    curso: 'BCC',
    descricao: `A redução das emissões de gases com efeito de estufa é fundamental na luta contra as alterações climáticas, uma vez que estas as emissões contribuem para o aquecimento global e têm uma série de impactos negativos no meio ambiente e na saúde humana. Os créditos de carbono são uma ferramenta importante para alcançar reduções de emissões, pois fornecem um incentivo financeiro para que as empresas reduzam suas emissões, permitindo-lhes venderem créditos por cada tonelada de dióxido de carbono que reduzem ou removem da atmosfera. Ao usar créditos de carbono para recompensar pelas reduções de emissões, governos e empresas podem encorajar o desenvolvimento e implementação de tecnologias e práticas limpas, assim ajudando a reduzir o nível geral de emissões de gases do efeito estufa. Este projeto de software visa ajudar as empresas a rastrear e controlar suas emissões de gases do efeito estufa, a fim de cumprir os requisitos regulamentares e reduzir o seu impacto ambiental. Usando o método de linha de base, o software calcula o saldo de créditos de carbono aos quais uma empresa tem direito com base em suas reduções de emissões. Além disso, o software gera relatórios sobre o desempenho da empresa referente as emissões que podem ser submetidas aos órgãos reguladores. Ao fornecer uma interface fácil de usar para o rastreamento e geração de relatórios de emissões, este software visa facilitar com que empresas possam demonstrar seu compromisso com a sustentabilidade e cumprir suas metas de redução de emissões.`,
    palavrasChave: ['Crédito de Carbono', 'Gas do Efeito Estufa', 'Aquecimento Global', 'Sustentabilidade'],
    dataDefesa: '2023-01-17',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'gabriel_dadamos_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'gabriel_dadamos_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202215,
    titulo: 'USO DA COMPUTAÇÃO GRÁFICA PARA ENSINO DE ASTRONOMIA: DESENVOLVIMENTO DE UM SOFTWARE EDUCACIONAL UTILIZANDO UNITY',
    autor: 'Gabriel Francisco Sahm Gallo',
    orientador: 'Profª. Me. Juliana da Costa Feitosa',
    curso: 'BCC',
    descricao: `Com o passar do tempo, percebeu-se que os alunos estão cada vez mais tecnológicos, porém o modo de ensinar e as ferramentas utilizadas pelos docentes não estão acompanhando essa mudança, principalmente na área de Astronomia. Durante o ensino de Astronomia, alguns temas são explicados de modo que o aluno consiga entender, porém nos assuntos complexo, tais como a comparação de tamanho dos planetas não é possível ter um total entendimento. Para resolver tal problema, este trabalho apresenta um software educativo que tem o objetivo de simular o Sistema Solar para auxiliar os docentes à explicarem e apresentarem conceitos de Astronomia, tais como as escalas, velocidades, movimentos e órbitas dos objetos celestiais.`,
    palavrasChave: ['Astronomia', 'Ensino', 'Softwares educativos', 'Simulador'],
    dataDefesa: '2023-01',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'gabriel_francisco_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'gabriel_francisco_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202216,
    titulo: 'UMA APLICAÇÃO WEB PARA ANÁLISE COMPARATIVA DE META-HEURISTICAS DE OTIMIZAÇÃO',
    autor: 'Giovani Candido',
    orientador: 'Prof. Dr. João Paulo Papa',
    curso: 'BCC',
    descricao: `Nas últimas décadas, a demanda por uma melhor administração de recursos como tempo e dinheiro tem crescido na sociedade, fazendo com que problemas de otimização sejam cada vez mais estudados por áreas como pesquisa operacional e ciência da computação. No entanto, as técnicas tradicionais de otimização não são eficientes para lidar com os problemas desafiadores encontrados no mundo real. Nesse cenário, as meta-heurísticas se apresentam como uma alternativa interessante, uma vez que são capazes de encontrar soluções satisfatórias para inúmeros problemas. Logo, faz-se necessário o desenvolvimento de uma ferramenta que traga as mais populares entre essas abundantes técnicas, acompanhadas de distintos problemas artificiais de teste que traduzam suas performances, viabilizando a rápida realização de análises comparativas. Neste trabalho, estudou-se as meta-heurísticas e as funções de teste mais empregadas na literatura, visando a criação de um ambiente web. Dentre as funcionalidades dessa aplicação, pode-se citar o ajuste de parâmetros de execução, a apresentação do progresso das tarefas em tempo real, a persistência dos dados de execução, a apresentação dos resultados juntamente com dados estatísticos e a produção de gráficos de convergência.`,
    palavrasChave: ['Aplicação Web', 'Análise Comparativa', 'Meta-heurísticas', 'Funções de Teste', 'Otimização Matemática'],
    dataDefesa: '2023-01',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'giovani_candido_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'giovani_candido_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202217,
    titulo: 'APLICAÇÃO DE ALGORITMO GENÉTICO PARA ROTEIRIZAÇÃO E CARREGAMENTO DE VEÍCULO',
    autor: 'Giulia Rossatto Rocha',
    orientador: 'Profª. Drª. Márcia A Zanoli Meira e Silva',
    curso: 'BCC',
    descricao: `A globalização é responsável pelo surgimento de um maior número de clientes exigentes quanto à prazos e qualidade de entrega de mercadorias. Nesse sentido, a capacidade em atender às necessidades dos clientes, com qualidade e com baixo custo despendido é uma urgência no contexto de concorrência entre empresas de transporte, distribuição e coleta. A logística e a gestão apresentam-se como estratégias para realizar a organização e planejamento dos recursos empresariais de forma a maximizar a execução de pedidos. No entanto, no âmbito da gestão de transportes há dificuldades no planejamento e roteirização dos veículos envolvidos de modo a determinar o melhor percurso, com menor gasto de tempo e recursos operacionais. O presente trabalho teve por objetivo a construção de um software capaz de realizar a roteirização de um veículo que percorra a menor distância possível entre as localidades pré-definidas por um usuário, considerando uma possível limitação de carga do veículo e uma cidade inicial que servirá como depósito. Foram utilizados Algoritmos Genéticos que são meta-heurísticas baseadas no conceito de evolução dos seres vivos e no processo de seleção natural, visto que o Problema de Roteirização de Veículos Capacitados (PRVC) e que o Problema do Caixeiro Viajante (PCV) são chamados de problemas NP-difícil e, portanto, não são capazes de gerar uma solução ótima em tempo computacional viável com algoritmos polinomiais ou técnicas tradicionais da pesquisa operacional. O software desenvolvido consiste em uma aplicação web, desenvolvida em Python, com a utilização do micro framework Flask e do framework Bootstrap para estilização das páginas. Finalmente, o algoritmo desenvolvido foi submetido a diversos testes, alterando alguns parâmetros como o processo de seleção, cruzamento e mutação. Verificou-se que o algoritmo genético se apresenta como uma ótima alternativa para a solução do problema, pois permite a utilização de variedades de parâmetros, apresentando ótimos resultados em um tempo positivo. Por fim, verificou-se que o operador de mutação SM não apresentou bons resultados para obtenção da menor distância possível, enquanto os operadores que se destacaram foram os operadores de cruzamento OX e PMX e os operadores de mutação EM, SIM e DM, tanto em questão de tempo quanto em melhor solução obtida.`,
    palavrasChave: ['Meta-heurística', 'Algoritmo Genético', 'Roteamento de veículos'],
    dataDefesa: '2023-01-17',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'giulia_rossatto_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'giulia_rossatto_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202218,
    titulo: 'SISTEMA DE GERENCIAMENTO DE UMA FAZENDA',
    autor: 'Guilherme Vieira Siena Martins',
    orientador: 'Profª. Drª. Andréa Carla Gonçalves Vianna',
    curso: 'BCC',
    descricao: `O agronegócio é um dos principais setores da economia brasileira, chegando a compor 27,4% do PIB nacional em 2021, porém mesmo com essa grande quantidade de dinheiro circulando muitas propriedades rurais estão atrasadas no requisito tecnológico, sendo que 70% delas não possuem conexão com a internet. Mesmo com tamanha importância, essas propriedades ainda são gerenciadas e tem seus processos feitos de maneira muito informal e isso acaba gerando problemas. Um termo que resume a necessidade de tecnologia no campo é agricultura 4.0, também conhecida como agricultura digital. Para resolver o problemas como esses foi modelado um banco de dados relacional, um modelo de otimização para produção de ração englobados por uma interface gráfica utilizando a linguagem python. Os conceitos utilizados no desenvolvimento do trabalho envolvem o processo de criação de um produto real com a possibilidade de ser comercializável. A interface é simples facilitando o uso dos fazendeiros.`,
    palavrasChave: ['Agropecuária', 'Python', 'Tecnologia da Informação'],
    dataDefesa: '2023-01-16',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'guilherme_vieira_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'guilherme_vieira_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202219,
    titulo: 'PARALELIZAÇÃO DA TÉCNICA DE EXTRAÇÃO DE PONTOS DE INTERESSE FOAGDD UTILIZANDO A ARQUITETURA CUDA',
    autor: 'Gustavo Henrique Stahl',
    orientador: 'Prof. Dr. Antonio Carlos Sementille',
    curso: 'BCC',
    descricao: `Consoante com o desenvolvimento tecnológico atual que, cada vez mais, solicita abordagens que conectem o meio analógico e digital de maneira interativa, ou seja, funcionando em tempo real, o presente trabalho busca auxiliar nesse cenário ao acelerar uma das técnicas de extração de pontos de interesse em imagem presente no estado da arte da categoria, uma vez que são densamente utilizadas em áreas como realidade aumentada, veículos autônomos, robôs de serviço, reconstrução 3D, e diversas outras que necessitam produzir resultados rápidos e frequentes. O método escolhido para o aperfeiçoamento é o extrator de cantos FOAGDD (First-order Anisotropic Gaussian Direction Derivative) e seu processo de otimização se sustentou na massiva paralelização possibilitada pela arquitetura CUDA (Compute Unified Device Architecture) da NVIDIA. Os resultados obtidos com a melhoria proposta se mostraram promissores. Primeiramente, a saída produzida pela implementação original do método e a paralelizada em CUDA se mostraram muito similares, após serem testadas e comparadas em um conjunto de 28 imagens. Por último, o código proposto trouxe um Speed-up no tempo de execução de aproximadamente 3190 (66,03 segundos → 20,70 milisegundos) em relação à implementação original do FOAGDD, utilizando como base uma imagem padronizada de resolução 512 × 512 pixels.`,
    palavrasChave: ['Computação de alto desempenho', 'NVIDIA CUDA', 'Extrator de pontos de interesse'],
    dataDefesa: '2023-01-24',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'gustavo_henrique_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'gustavo_henrique_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202220,
    titulo: 'SOBRE DETECÇÃO DE INTRUSÃO COM APRENDIZADO DE MÁQUINA: ESTUDO DA APLICAÇÃO DE ENSEMBLE LEARNING E CLUSTERIZAÇÃO NA MELHORIA DE DESEMPENHO',
    autor: 'Inaê Soares de Figueiredo',
    orientador: 'Prof. Dr. Kelton Augusto Pontara da Costa',
    curso: 'BCC',
    descricao: `Sistemas de detecção de intrusão em redes de computadores têm uma grande importância na manutenção da segurança de uma rede e são foco constante de pesquisas que buscam aprimorar IDSs já existentes ou desenvolver novos ainda melhores. Este trabalho apresenta um estudo dos modelos de aprendizado de máquina autoencoder e Restricted Boltzmann Machine, comprovadamente efetivos na detecção de intrusão. Os modelos são comparados e busca-se melhorá-los por meio da aplicação de técnicas de clusterização e ensemble learning (majority-voting). As métricas mostraram-se pouco afetadas pela aplicação das técnicas de melhoria individualmente, mas bons resultados foram obtidos ao combiná-las, alçando 84,71% de acurácia e 91,31% F1-score no dataset KDD99.`,
    palavrasChave: ['Sistema de detecção de intrusão', 'aprendizado de máquina', 'redes de computadores'],
    dataDefesa: '2023-01',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'inae_soares_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'inae_soares_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202221,
    titulo: 'DESENVOLVIMENTO DE UM SISTEMA DE SIMULAÇÃO COMPUTACIONAL DE OCORRÊNCIA DE CHUVAS',
    autor: 'João Pedro Olimpio',
    orientador: 'Prof. Dr. João Eduardo Machado Perea Martins',
    curso: 'BCC',
    descricao: `O presente trabalho objetiva o desenvolvimento de um sistema de simulação computacional que seja capaz de representar o regime de chuvas para a cidade de Bauru, São Paulo. Para tanto, serão considerados dois aspectos do fenômeno precipitação: a possibilidade de sua ocorrência em determinado dia e a probabilidade de acontecer em certa intensidade. A possibilidade de ocorrência será gerada a partir do uso do conceito de cadeia de Markov, que é uma sequência finita de estados, na qual a transição a um estado presente apenas depende do estado que imediatamente o antecede. Neste trabalho, cada estado representa um dia do ano, que possui uma probabilidade de transição para o dia seguinte calculada com base no padrão de chuvas dos dados analisados. Já a intensidade de chuva será determinada por uma distribuição de probabilidades em classes de magnitude, de forma que cada classe possua uma condição de entrada que, se satisfeita, irá determinar em qual faixa de magnitude a chuva do dia ocorrerá. Os intervalos de tempo analisados, para gerar os valores de probabilidade, serão variados com o objetivo de validar a hipótese de que, ao se utilizar períodos menores, maior é a fidelidade do modelo de simulação ao sistema real e melhor é o resultado simulado, em termos de sua assertividade.`,
    palavrasChave: ['sistema de simulação', 'chuva', 'cadeia de Markov'],
    dataDefesa: '2023-01',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'joao_pedro_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'joao_pedro_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202222,
    titulo: 'PROGRAMAÇÃO DAS BOMBAS HIDRÁULICAS PARA OTIMIZAÇÃO ENERGÉTICA EM SISTEMAS DE ABASTECIMENTO DE ÁGUA UTILIZANDO PYTHON E O SOFTWARE EPANET',
    autor: 'Larissa de Castro Bonadio',
    orientador: 'Profª. Drª. Edilane Martins Soler',
    curso: 'BCC',
    descricao: `A água é um recurso natural e essencial que garante o bem-estar e saúde da população. Para a população humana usufruir desse recurso é fundamental a utilização dos sistemas de abastecimento de água. Em diversas etapas de seu funcionamento a energia elétrica é usada, principalmente pelas bombas hidráulicas, as quais são empregadas para viabilizar a transferência de água de um ponto inferior para um superior, contudo esse processo apresenta um alto custo energético. Neste contexto, para auxiliar o desenvolvimento do planejamento da operação das bombas hidráulicas, os modelos e métodos de otimização e simuladores hidráulicos são utilizados como ferramenta. Desse modo, esse trabalho desenvolveu um software, em linguagem de programação Python, que verifica a aplicabilidade da solução obtida pelo modelo matemático de otimização energética desenvolvido por Parras (2020), de forma a analisar a solução proposta por ele, e simulá-la no simulador hidráulico EPANET.`,
    palavrasChave: ['Otimização', 'Sistema de Abastecimento de Água', 'EPANET', 'Python'],
    dataDefesa: '2023-01-16',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'larissa_bonadio_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'larissa_bonadio_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202223,
    titulo: 'VISUALIZAÇÃO DE DADOS E ANÁLISE DO MERCADO DE AÇÕES BRASILEIRO',
    autor: 'Luciano Eiji Tanaka',
    orientador: 'Prof. Dr. João Pedro Albino',
    curso: 'BCC',
    descricao: `O mercado de ações é uma das áreas mais populares dentro do mercado financeiro, hoje em dia, através da popularização da internet, da mídia e da democratização da informação, tornou-se uma das formas mais comuns de obtenção de renda alternativa. A previsão do preço das ações sempre foi muito pesquisada, mas devido à sua natureza dinâmica e volátil, é considerada uma das tarefas mais difíceis no campo da matemática e da ciência da computação. O mercado é afetado por vários fatores macroeconômicos, como políticas governamentais, relações internacionais, cenário econômico, expectativas e psicologia dos investidores, etc. O presente trabalho busca combinar sistemas inteligentes para prever os preços finais das ações do índice Bovespa, que são as mais consolidadas e negociadas no mercado. Conceitos sobre mercado financeiro, aprendizado de máquina e visualização de dados serão estudados para dar suporte ao projeto. Foram propostos modelos para analisar e encontrar padrões nos preços das ações, bem como indicar tendências de longo prazo, e por fim a implementação do projeto para uso geral. Para as análises foram utilizados os dados de janeiro de 2012 a julho de 2022, disponíveis na seção de cotações históricas diretamente do site da B3. O estudo foi desenvolvido utilizando redes neurais e uma máquina de vetores de suporte utilizando dados do preço de fechamento das ações negociadas na bolsa de valores.`,
    palavrasChave: ['Redes neurais', 'redes neurais artificiais', 'máquina de vetor de suporte', 'mercado de ações', 'LSTM', 'previsão de valores', 'ciência de dados'],
    dataDefesa: '2023-01',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'luciano_eiji_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'luciano_eiji_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202224,
    titulo: 'SISTEMA DE RECONHECIMENTO BIOMÉTRICO DE MÚLTIPLAS PESSOAS BASEADO EM MÉTODOS DE ESTIMAÇÃO DE POSE E RASTREAMENTO DE OBJETOS',
    autor: 'Luís Henrique Morélli',
    orientador: 'Prof. Dr. Aparecido Nilceu Marana',
    curso: 'BCC',
    descricao: `A biometria se tornou uma importante ferramenta para identificação de indivíduos nas mais diversas áreas, usada para evitar fraudes e aumentar a segurança dos cidadãos na sociedade. A marcha tem sido proposta como característica biométrica, visto que humanos possuem formas distintas de caminhar. Ela é particularmente importante para a identificação de pessoas à distância. Na maioria das pesquisas encontradas na literatura, os métodos de reconhecimento de marcha limitam-se a cenários em que há apenas um indivíduo caminhando, quando, em situações mais realistas, é comum existirem várias pessoas. Os métodos atuais de reconhecimento de marcha não podem ser aplicados em cenários multimarcha. Sendo um problema mais desafiador, para atingir tal objetivo, são necessários métodos de detecção e rastreamento de pessoas. O DeepSORT é um método de rastreamento de múltiplos objetos que utiliza métricas de associação profunda e vem obtendo bons resultados na tarefa. Este trabalho propõe a construção de um sistema biométrico capaz de identificar pessoas através de sua marcha e das medidas antropométricas, empregando métodos de estimação de poses e rastreamento e reidentificação de objetos. Para tal efeito, um método de reconhecimento de múltiplas pessoas é proposto. O método foi implementado e avaliado em duas bases de dados públicas, a CASIA Gait Dataset-A e a SMVDU-Multi-Gait, além de uma base de dados privada, coletada para validação do sistema biométrico que foi construído incorporando o método proposto. Os resultados obtidos mostram que essa abordagem é adequada em cenários de caminhada individual e em grupo, apresentando bom desempenho na identificação de indivíduos e robustez para configurar como solução de baixo orçamento em sistemas visuais inteligente.`,
    palavrasChave: ['Biometria', 'Estimação de Poses', 'Rastreamento e Reidentificação de Objetos', 'Reconhecimento de Marcha', 'Medidas Antropométricas'],
    dataDefesa: '2023-01-19',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'luis_henrique_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'luis_henrique_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202225,
    titulo: 'UMA APLICAÇÃO WEB PARA ANÁLISE COMPARATIVA DE SELEÇÃO DE CARACTERÍSTICAS BASEADAS EM META-HEURISTICAS',
    autor: 'Luiz Fernando Merli de Oliveira Sementille',
    orientador: 'Prof. Dr. João Paulo Papa',
    curso: 'BCC',
    descricao: `Nos dias atuais, é notório o crescimento da importância que as técnicas de aprendizado de máquina têm tido em virtude da massiva quantidade de dados presentes na Internet. Dentre as situações em que o aprendizado de máquina pode ser empregado, pode-se citar a detecção de tumores em exames médicos, a identificação de perfis de consumo e a detecção de intrusões em redes de computadores. Diante desse contexto, uma das etapas mais importantes para que um sistema de aprendizado tenha desempenhos satisfatórios é a seleção de aracterísticas. Esta etapa envolve aplicar algoritmos ao vetor de características, com a finalidade de encontrar um subconjunto deste vetor tal que aumente a acurácia na classificação e reduza a complexidade do modelo de aprendizado, podendo assim ser compreendida como um problema de otimização NPDifícil. Deste modo, a utilização de métodos determinísticos não apresenta bom desempenho, tornando as meta-heurísticas, técnicas que se baseiam em comportamentos ótimos encontrados na natureza, excelentes candidatas para esse tipo de problema. Assim sendo, o presente projeto visa o desenvolvimento e implementação de uma aplicação web cujo objetivo é permitir a comparação de tarefas de seleção de características baseadas em técnicas meta-heurísticas.`,
    palavrasChave: ['Aplicação Web', 'Seleção de Características', 'Meta-Heurística'],
    dataDefesa: '2023-01',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'luiz_fernando_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'luiz_fernando_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202226,
    titulo: 'ANÁLISE DO CRESCIMENTO DA INDÚSTRIA DOS JOGOS DIGITAIS',
    autor: 'Michel Marques Mbakirtzis',
    orientador: 'Prof. Dr. João Pedro Albino',
    curso: 'BCC',
    descricao: `Este trabalho possui como objetivo entender o contexto que tem levado ao expressivo crescimento histórico da indústria de jogos digitais ao redor do mundo, partindo de pesquisas bibliográficas sobre as características dessa indústria, este trabalho se propõe a identificar elementos mercadológicos, tecnológicos, sociais e pandêmicos que contribuíram positivamente para o aumento do faturamento e crescimento da base de usuários. Após realizada a abordagem das principais características do mercado de jogos, este trabalho apresenta um modelo de visualização em Dashboard desenvolvido em Power BI, apresentando de modo dinâmico e interativo o progresso dos números obtidos pelo setor de jogos digitais desde seus primórdios.`,
    palavrasChave: ['Jogos Digitais', 'Dashboard', 'Power BI'],
    dataDefesa: '2023-01',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'michel_marques_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'michel_marques_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202227,
    titulo: 'ORGANIZADOR DE ROTINAS DINÂMICO',
    autor: 'Rafael Kawagoe Gomes Muller',
    orientador: 'Profª. Drª. Simone das Graças Domingues Prado',
    curso: 'BCC',
    descricao: `A Agenda é uma aplicação mobile que permite aos usuários gerenciar e organizar seus eventos e tarefas de maneira dinâmica. Ela foi desenvolvida usando o Flutter, um popular framework de código aberto para a criação de aplicativos móveis cross-platform. Para garantir a qualidade e a manutenção da base de código, utilizou-se várias técnicas de engenharia de software, como boas práticas na nomenclatura de variáveis, métodos e classes, e a aplicação dos conceitos de SOLID. Essas práticas ajudaram a identificar e corrigir bugs, bem como evitar o surgimento de novos. O aplicativo de Agenda possui uma interface amigável e intuitiva ao usuário. Ele foi desenvolvido para ser usado em dispositivos Android. No geral, o desenvolvimento do aplicativo de agenda usando Flutter e técnicas de engenharia de software resultou em uma ferramenta confiável e eficaz para gerenciar tarefas, e que foi feita em um projeto escalável e de fácil manutenção.`,
    palavrasChave: ['Aplicativo Mobile', 'Engenharia de Software', 'Flutter', 'Clean Code', 'Clean Architecture'],
    dataDefesa: '2023-01-16',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'rafael_kawagoe_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'rafael_kawagoe_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202228,
    titulo: 'DASHBOARD PARA ANÁLISE DE DADOS CLIMÁTICOS DE BAURU',
    autor: 'Rafael Mendes Costa',
    orientador: 'Prof. Dr. João Pedro Albino',
    curso: 'BCC',
    descricao: `A energia elétrica pode ser comercializada pelo mercado livre ou pelo mercado regulado pelo governo, onde os consumidores não possuem a liberdade de escolha de fornecedor nem negociação. Já no mercado livre consumidores e fornecedores de energia podem interagir através das comercializadoras para negociar energia elétrica. Isso acontece através da compra de energia do fornecedor pelo comercializador e a venda dessa energia para o consumidor. No Brasil a matriz energética depende de 70% de energia gerada por hidrelétricas e na região de Bauru existe a hidrelétrica de Iacanga. Sistemas para Análise de Dados Climáticos são importantes para a comercialização de energia e commodities no mercado. O painel de controle para análise de dados em Bauru permite que o usuário tenha acesso aos dados climáticos da região de Bauru, dando mais segurança nas negociações de energia gerada pela hidrelétrica de Iacanga feitas pelos comercializadores de energia. A aplicação foi desenvolvida usando React, Javascript, Python e Pandas. Além disso, o projeto foi desenvolvido seguindo técnicas de boas práticas adotadas por cada um das linguagens e princípiosSOLID.`,
    palavrasChave: ['Previsão de temperatura', 'Previsão de chuva', 'Análise de dados', 'Dashboard'],
    dataDefesa: '2023-01-17',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'rafael_mendes_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'rafael_mendes_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202229,
    titulo: 'CAMINHO ÓTIMO EM MALHA DINÂMICA BIDIMENSIONAL',
    autor: 'Rafael Nunes Caseiro',
    orientador: 'Profª.Drª. Simone das Graças Domingues Prado',
    curso: 'BCC',
    descricao: `Dado um meio físico ou virtual, a busca por um caminho ótimo entre dois ou mais pontos é uma problemática muito estudada na computação, possuindo uma série de soluções já validadas, como o algoritmo de Dijkstra e A. O problema é relevante para um vasto espectro de aplicações, incluindo tráfego de redes, planejamento robótico, simulações e jogos de computador. No entanto, cada aplicação possui um conjunto de requisitos e restrições particular, tornando necessária a adaptação de soluções a cada caso específico. No caso de malhas dinâmicas bidimensionais o algoritmo A é comumente utilizado, fornecendo a solução de forma ágil e precisa, e sendo fácil de adaptar. Este trabalho traz uma análise teórica sobre o problema do caminho ótimo, partindo de uma perspectiva generalizada, a qual é, então, restringida a uma malha dinâmica bidimensional, a ser percorrida por um agente virtual, utilizando o algoritmo A*.`,
    palavrasChave: ['Caminho ótimo', 'Malha dinâmica', 'Dijkstra', 'A*'],
    dataDefesa: '2023-01-20',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'rafael_nunes_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'rafael_nunes_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202230,
    titulo: 'GAMIFICAÇÃO DE EXERCÍCIOS FÍSICOS COM LOUSA INTELIGENTE',
    autor: 'Rafael Ragozoni Conrado',
    orientador: 'Profª. Me. Juliana da Costa Feitosa',
    curso: 'BCC',
    descricao: `Realizar atividades físicas são importantes para uma vida saudável e equilibrada. Existem muitos exercícios físicos elaborados de forma a estimular diferentes aspectos do corpo, como o sistema cardiovascular ou cada um dos tecidos musculares, a fim de buscar otimizar seus benefícios. Porém, é possível observar certa resistência a sua realização rotineira tendo em vista sua natureza monótona e repetitiva. Com o objetivo de superar essa barreira presente em diversas tarefas, pode-se recorrer a gamificação, que usa elementos típicos de jogos, sobretudo digitais, para tornar mais interessante quaisquer atividades. Foram utilizados conceitos de gamificação aplicados no contexto de exercício físico para buscar estimular a realização de atividade física entre adultos, e contribuir para a manutenção de uma vida ativa entre os usuários. Isso foi feito por meio de um software gamificado feito na plataforma Unity para ser usado na lousa inteligente Huawei IdeaHub que conta com um sistema operacional Windows e uma câmera. O software possui um menu com estatísticas, conquistas e exercícios com descrição da atividade. Com isso, o usuário realiza exercícios providenciados pelo software, visualizando informações sobre a atividade e com a câmera do IdeaHub, capturando os movimentos para contar os exercícios.`,
    palavrasChave: ['Gamificação', 'Lousa Inteligente', 'Exercícios Físicos'],
    dataDefesa: '2023-01',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'rafael_ragozoni_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'rafael_ragozoni_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202231,
    titulo: 'UMA ESTRATÉGIA DE FUTEBOL DE ROBÔS BASEADA EM APRENDIZADO POR REFORÇO',
    autor: 'Rodrigo Cesar Barboza Rossetti',
    orientador: 'Prof. Dr. Renê Pegoraro',
    curso: 'BCC',
    descricao: `O uso de técnicas de aprendizado de máquina se popularizou muito nos últimos anos com avanços em diversas áreas como carros autônomos, geração de imagens e texto. O futebol de robôs, onde vários agentes interagem, é um ambiente propício para aplicação e verificação de técnicas de aprendizado. Neste trabalho foi aplicado técnicas de aprendizado por reforço para treinar uma estratégia de futebol de robôs completamente autônoma para mitigar os problemas da estratégia baseada em autômatos finitos determinísticos. Para tal, o ambiente do futebol de robôs do time Carrossel Caipira foi adaptado como um problema padronizado de aprendizado por reforço utilizando a biblioteca Gym e então treinado com o algoritmo Soft Actor-Critic com implementação da biblioteca Stable Baselines 3, por ser ideal para problemas com espaços de ação contínuos. Inicialmente, o goleiro foi treinado junto ao volante e atacante da estratégia anterior para fins de testes antes de continuar o treinamento junto ao volante e atacante atuais ao se constatar que o ambiente estava funcionando e o goleiro aprendendo. As recompensas obtidas durante o treinamento foram salvas e analisadas graficamente junto ao comportamento dos jogadores observado durante o treinamento. Para o goleiro, ele aprendeu a defender o gol conforme o aprendizado progrediu, mas para o volante e atacante é necessário mais tempo de treinamento para aprenderem bem suas posições. Também foi possível observar a tendência de posicionamento dos robôs em certas posições do campo para maximizar suas recompensas. O trabalho foi desenvolvido com base nas regras da competição IEEE Very Small Size Soccer da qual participa a equipe Carrossel Caipira.`,
    palavrasChave: ['Aprendizado profundo', 'Aprendizado por reforço', 'Futebol de Robôs'],
    dataDefesa: '2023-01-16',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'rodrigo_cesar_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'rodrigo_cesar_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202232,
    titulo: 'UM SISTEMA DE TELEMETRIA COM TECNOLOGIAS GSM/GPRS PARA A ÁREA AMBIENTAL',
    autor: 'Samuel Cabral',
    orientador: 'Prof. Dr. João Eduardo Machado Perea Martins',
    curso: 'BCC',
    descricao: `O monitoramento ambiental remoto é importante sob o ponto de vista social, ecológico e agrícola, pois oferece melhor visualização do estado de um ambiente e, consequentemente, providencia o melhor controle dele. A fim de criar uma maneira de monitorar um parâmetro físico ambiental à distância, mesmo sem rede Wi-Fi, este trabalho propõe e detalha o desenvolvimento de um sistema de monitoramento ambiental remoto utilizando rede GSM e GPRS. Os dados de temperatura e umidade relativa do ar são lidos através de sensores, verificados e analisados pela placa Arduino UNO, e transmitidos para um servidor na web através de rede GPRS, podendo ser exibidos e analisados através de um front-end composto de páginas na web. O sistema utiliza um serviço de hospedagem na web para armazenamento dos arquivos das páginas, scripts e sistema de gerenciamento de banco de dados. Além da transmissão de dados através da Internet, caso os valores das medições físicas ultrapassem limites definidos, o usuário é automaticamente notificado através de mensagens alerta de SMS em seu telefone, utilizando a tecnologia de rede GSM.`,
    palavrasChave: ['Internet das Coisas', 'Arduino', 'Redes de dados', 'Sensores'],
    dataDefesa: '2023-01',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'samuel_cabral_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'samuel_cabral_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202233,
    titulo: 'ACESSIBILIDADE WEB: METODOLOGIA DE DIAGNÓSTICO E IMPLEMENTAÇÃO DE SITES ACESSÍVEIS',
    autor: 'Sarah Rodrigues Campos',
    orientador: 'Profª. Drª. Simone das Graças Domingues Prado',
    curso: 'BCC',
    descricao: `A medida de isolamento social adotada por vários países como forma de contenção do coronavírus implicou diretamente no aumento de usuários da internet. Para muitas pessoas, o uso dessa ferramenta se tornou imprescindível para trabalhos, estudos e até mesmo para socialização. Levando-se em conta que cerca de 24% da população brasileira possui algum tipo de deficiência, é necessário garantir que informações por meio da web sejam o mais abrangente possível. Para isso, esta pesquisa propõe a criação de um guia simplificado sobre acessibilidade na internet para auxiliar desenvolvedores e designers a criar aplicações web inclusivas. Após um levantamento bibliográfico, foram feitas adaptações em um site da UNESP, validadas por meio de testes com pessoas portadoras de diferentes deficiências. O guia foi construído a partir da análise destes dados e do levantamento bibliográfico.`,
    palavrasChave: ['acessibilidade', 'web', 'manual', 'desenvolvimento', 'design'],
    dataDefesa: '2023-01-18',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'sarah_rodrigues_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'sarah_rodrigues_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202234,
    titulo: 'SMART CAMPUS: UM ESTUDO SOBRE VISÃO COMPUTACIONAL PARA DETECÇÃO DE PESSOAS EM FILAS',
    autor: 'Thiago Esteves La Scala',
    orientador: 'Prof. Me. Luiz Felipe de Camargo',
    curso: 'BCC',
    descricao: `Considerando as previsões futuras para a área de Internet das Coisas e as facilidades geradas por aplicações de visão computacional utilizando aprendizado de máquina, este trabalho visa a detecção de pessoas em imagens usando o modelo de aprendizado de máquina para detecção de objetos YOLO. Para os testes foram utilizadas modificações do conjunto de dados COCO, composto por diversos tipos de imagens rotuladas, e foram obtidos resultados promissores demonstrados através das métricas índice mAP que alcançou 98,8% e pontuação F1 que alcançou 97%. Os testes desenvolvidos permitiram a análise da aplicabilidade do modelo para a detecção de pessoas, visando o futuro esenvolvimento de uma aplicação para acompanhamento de filas em um Smart Campus.`,
    palavrasChave: ['Internet das Coisas', 'Visão Computacional', 'Aprendizado de Máquina', 'Detecção de Pessoas'],
    dataDefesa: '2023-01-18',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'thiago_esteves_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'thiago_esteves_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202235,
    titulo: 'DETECÇÃO DE PÁGINAS DE PHISHING UTILIZANDO APRENDIZADO DE MÁQUINA',
    autor: 'Vinicius Machado Coutinho',
    orientador: 'Prof. Dr. Kelton Augusto Pontara da Costa',
    curso: 'BCC',
    descricao: `Com o avanço da Internet e o aumento de serviços digitais, tentativas de fraudes online, como o phishing, se tornaram um problema cada vez maior. Devido ao contínuo aumento e evolução desses ataques, há a necessidade do desenvolvimento e aprimoramento de métodos para detecção deles. Neste trabalho, foi criado um sistema de detecção de páginas de phishing, utilizando técnicas de aprendizado de máquina como Árvore de Decisão, Floresta Aleatória, Árvores Extremamente Aleatórias e XGBoost. Os modelos foram desenvolvidos com um conjunto de dados de 88.647 entradas e mediu-se suas efetividades através de métricas já estabelecidas na área de aprendizado de máquina. Os resultados obtidos foram promissores, com o modelo XGBoost apresentando o melhor resultado, mostrando-se eficaz para a detecção de páginas da internet falsas.`,
    palavrasChave: ['Aprendizado de máquinas', 'Inteligência Artificial', 'Fraude na Internet', 'Árvores de Decisão'],
    dataDefesa: '2023-01',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'vinicius_machado_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'vinicius_machado_apresentacao_2022.pdf')
      }*/
    ]
  },

  {
    id: 202236,
    titulo: 'TÉCNICAS DE INTELIGÊNCIA ARTIFICIAL PARA DIAGNÓSTICO DE ACIDENTE VASCULAR CEREBRAL ATRAVÉS DE IMAGENS E DADOS TEXTUAIS SOBRE POSSÍVEIS VÍTIMAS',
    autor: 'Vinicius de Paula Pilan',
    orientador: 'Prof. Dr. Clayton Reginaldo Pereira',
    curso: 'BCC',
    descricao: `O Acidente Vascular Cerebral (AVC) é uma das doenças que mais matam e incapacitam no mundo todo e quanto mais tardio é o seu diagnóstico, maiores podem ser os prejuízos para a vítima. Portanto, formas de agilizar e auxiliar o processo de diagnóstico da doença podem ser bastante relevantes e benéficas. Este trabalho abordou essa questão, aplicando técnicas de Aprendizado de Máquina e Aprendizagem Profunda, sendo ambas subáreas da Inteligência Artificial, a qual vem sendo amplamente aplicada em diversos segmentos na busca de otimizar tarefas, principalmente no diagnóstico de doenças. Modelos classificadores de fatores de risco foram criados a partir da aplicação dos modelos de Regressão Logística e Floresta Aleatória, assim como uma Rede Neural Convolucional (CNN) para classificação de imagens de tomografia computadorizada da região cerebral.`,
    palavrasChave: ['Inteligência Artificial', 'Acidente Vascular Cerebral', 'Aprendizado de Máquina', 'Aprendizagem Profunda', 'Rede Neural Convolucional'],
    dataDefesa: '2023-01-27',
    links: [
      {
        label: 'Monografia',
        url: getTccFileURL('monografia', 'vinicius_pilan_2022.pdf')
      },
      /*{
        label: 'Apresentação',
        url: getTccFileURL('apresentacao', 'vinicius_pilan_apresentacao_2022.pdf')
      }*/
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

