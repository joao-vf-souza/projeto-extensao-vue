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
        url: getTccFileURL('monografia', 'alex_cassinelli_2025.pdf')
      },
      { 
        label: 'Apresentação', 
        url: getTccFileURL('apresentacao', 'alex_cassinelli_apresentacao_2025.pdf')
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

