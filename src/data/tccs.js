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

