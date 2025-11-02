// Dados dos Trabalhos de Conclusão de Curso - BCC e BSI 2025
// Para adicionar um novo TCC, basta incluir um novo objeto no array seguindo a estrutura abaixo
// Cada TCC deve ter apenas dois links: Monografia e Apresentação
// Cursos: BCC (Bacharelado em Ciência da Computação) e BSI (Bacharelado em Sistemas de Informação)

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
        url: '/files/monografias/alex_cassinelli_2025.pdf'
      },
      { 
        label: 'Apresentação', 
        url: '/files/apresentacoes/alex_cassinelli_apresentacao_2025.pdf'
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

