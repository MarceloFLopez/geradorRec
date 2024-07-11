
$(document).ready(function () {


  // Base de Dados Inicio
  const dadosPacientes = [
    {
      nomePaciente: "Oliver Ordonhes",
      idade: 12,
      endereco: "Rua Aurora Filgueira",
      num_endereco: 648
    },
    {
      nomePaciente: "Davi Ludmer Moreira",
      idade: 85,
      endereco: "Alameda Francisco",
      num_endereco: 679
    },
    {
      nomePaciente: "Fábio Teixeira",
      idade: 60,
      endereco: "Rua Maria Flor Tavares",
      num_endereco: 316
    },
    {
      nomePaciente: "Rafael Rocha Jr.",
      idade: 32,
      endereco: "Travessa João Luca",
      num_endereco: 236
    },
    {
      nomePaciente: "Sra. Deneval Paes",
      idade: 51,
      endereco: "Rua Pedro Lucas Marques",
      num_endereco: 562
    },
    {
      nomePaciente: "Kauê Gonçalves",
      idade: 51,
      endereco: "Viela Vitor Hugo Oliveira",
      num_endereco: 164
    },
    {
      nomePaciente: "Marcos Mendanha Filho",
      idade: 67,
      endereco: "Avenida Maya",
      num_endereco: 349
    },
    {
      nomePaciente: "Lara Novaes",
      idade: 72,
      endereco: "Rua Tomás Ribeiro",
      num_endereco: 407
    },
    {
      nomePaciente: "Clarice Porteira",
      idade: 33,
      endereco: "Rua Roberta",
      num_endereco: 984
    },
    {
      nomePaciente: "Sr. Maria Helena Caseira",
      idade: 26,
      endereco: "Avenida Raul Aparício",
      num_endereco: 499
    },
    {
      nomePaciente: "Clarice Freitas",
      idade: 33,
      endereco: "Rua Fábio Limeira",
      num_endereco: 712
    },
    {
      nomePaciente: "Ofélia Barroso",
      idade: 80,
      endereco: "Alameda Hugo Pinheira",
      num_endereco: 628
    },
    {
      nomePaciente: "Noah Ramalho",
      idade: 81,
      endereco: "Rua Célia Araújo",
      num_endereco: 333
    },
    {
      nomePaciente: "Emanuel Quarteira Neto",
      idade: 42,
      endereco: "Avenida Danilo Dorneles",
      num_endereco: 927
    },
    {
      nomePaciente: "Francisco Ribeiro",
      idade: 83,
      endereco: "Alameda Vicente Madeira",
      num_endereco: 682
    },
    {
      nomePaciente: "Dr. Davi Luca Jaques",
      idade: 45,
      endereco: "Rua Henrique Xavier",
      num_endereco: 712
    },
    {
      nomePaciente: "Miguel da Rocha",
      idade: 10,
      endereco: "Viela Clarice Simões",
      num_endereco: 792
    },
    {
      nomePaciente: "Lucca Carneiro",
      idade: 10,
      endereco: "Rua Dalila Assumpção",
      num_endereco: 192
    },
    {
      nomePaciente: "Nataniel Bentes",
      idade: 60,
      endereco: "Viela Nicolas Peixoto",
      num_endereco: 947
    },
    {
      nomePaciente: "Paulo Palhares",
      idade: 8,
      endereco: "Avenida Hélio",
      num_endereco: 616
    },
    {
      nomePaciente: "Bento Barreira",
      idade: 11,
      endereco: "Rua Fabrício",
      num_endereco: 1015
    },
    {
      nomePaciente: "Aurora da Paz",
      idade: 72,
      endereco: "Alameda Morgana Munhoz",
      num_endereco: 868
    },
    {
      nomePaciente: "Isis Brum Jr.",
      idade: 51,
      endereco: "Ponte Louise Esteves",
      num_endereco: 746
    },
    {
      nomePaciente: "Henry Leiria Neto",
      idade: 18,
      endereco: "Rua Pietro",
      num_endereco: 542
    },
    {
      nomePaciente: "Malu Freitas",
      idade: 4,
      endereco: "Avenida Benjamin Videira",
      num_endereco: 773
    },
    {
      nomePaciente: "Levi Raia",
      idade: 55,
      endereco: "Travessa Gustavo",
      num_endereco: 75
    },
    {
      nomePaciente: "Breno Limeira",
      idade: 49,
      endereco: "Rua Raul Araújo",
      num_endereco: 665
    },
    {
      nomePaciente: "Fabrícia Pires",
      idade: 64,
      endereco: "Ponte Félix Caseira",
      num_endereco: 438
    },
    {
      nomePaciente: "João Guilherme Marques",
      idade: 30,
      endereco: "Alameda Noah",
      num_endereco: 763
    },
    {
      nomePaciente: "Maria Clara Brum",
      idade: 83,
      endereco: "Travessa Karla",
      num_endereco: 266
    },
    {
      nomePaciente: "Sr. Bárbara Soeira",
      idade: 56,
      endereco: "Travessa Luiz Felipe Simão",
      num_endereco: 275
    },
    {
      nomePaciente: "Ana Beatriz Teles",
      idade: 29,
      endereco: "Rua Heloísa",
      num_endereco: 886
    },
    {
      nomePaciente: "Vinicius da Aldeia",
      idade: 35,
      endereco: "Avenida Danilo Simões",
      num_endereco: 353
    },
    {
      nomePaciente: "Hugo Palmeira",
      idade: 66,
      endereco: "Rua Natália",
      num_endereco: 473
    },
    {
      nomePaciente: "Vinícius da Madureira",
      idade: 81,
      endereco: "Viela Thiago",
      num_endereco: 640
    },
    {
      nomePaciente: "João Pedro Garcez Neto",
      idade: 68,
      endereco: "Ponte Pedro Tobias da Madureira",
      num_endereco: 128
    },
    {
      nomePaciente: "Sirineu Porto",
      idade: 86,
      endereco: "Rua Isabela Martins",
      num_endereco: 408
    },
    {
      nomePaciente: "Felipe Almada",
      idade: 19,
      endereco: "Ponte Milena",
      num_endereco: 652
    },
    {
      nomePaciente: "Alessandro Tavares",
      idade: 8,
      endereco: "Viela Amanda",
      num_endereco: 686
    },
    {
      nomePaciente: "João Oliveira",
      idade: 32,
      endereco: "Travessa Luana Rodrigues",
      num_endereco: 890
    },
    {
      nomePaciente: "João da Fontoura",
      idade: 19,
      endereco: "Rua Alessandro",
      num_endereco: 758
    },
    {
      nomePaciente: "Nathan Chaves",
      idade: 31,
      endereco: "Alameda Lorraine",
      num_endereco: 222
    },
    {
      nomePaciente: "Fabiano Godins Filho",
      idade: 65,
      endereco: "Rua Lara Carreira",
      num_endereco: 847
    },
    {
      nomePaciente: "Arthur Henrique de Oliveira",
      idade: 62,
      endereco: "Rua João Garcês",
      num_endereco: 560
    },
    {
      nomePaciente: "Davi Miguel Banheira",
      idade: 43,
      endereco: "Rua Davi Luca Monteiro",
      num_endereco: 183
    },
    {
      nomePaciente: "Benjamin da Cunha",
      idade: 38,
      endereco: "Rua Kléber Roriz",
      num_endereco: 294
    },
    {
      nomePaciente: "Vitória Ramires",
      idade: 74,
      endereco: "Rua Amanda",
      num_endereco: 845
    },
    {
      nomePaciente: "Henrique Grotas",
      idade: 25,
      endereco: "Rua Sofia",
      num_endereco: 691
    },
    {
      nomePaciente: "Nicolas Lagoa",
      idade: 9,
      endereco: "Alameda Laura",
      num_endereco: 729
    },
    {
      nomePaciente: "Ana Vitória Lavra",
      idade: 20,
      endereco: "Rua Abreu",
      num_endereco: 956
    },
    {
      nomePaciente: "Leandro Lins",
      idade: 84,
      endereco: "Rua Beatriz",
      num_endereco: 882
    },
    {
      nomePaciente: "Nathan Mafra",
      idade: 82,
      endereco: "Viela Antônio",
      num_endereco: 362
    },
    {
      nomePaciente: "Matheus Quarteira",
      idade: 89,
      endereco: "Avenida Mateus",
      num_endereco: 209
    },
    {
      nomePaciente: "Luan Tomás Alcântara",
      idade: 19,
      endereco: "Ponte Francisco Júnior",
      num_endereco: 295
    },
    {
      nomePaciente: "Enzo Lucena",
      idade: 77,
      endereco: "Avenida Maria do Carmo",
      num_endereco: 895
    },
    {
      nomePaciente: "Vicente Palhares",
      idade: 86,
      endereco: "Travessa Raul Araújo",
      num_endereco: 544
    },
    {
      nomePaciente: "Elisa Henrique Simas",
      idade: 86,
      endereco: "Rua Carolina",
      num_endereco: 605
    },
    {
      nomePaciente: "Nicolas Godoy",
      idade: 39,
      endereco: "Alameda Amanda",
      num_endereco: 528
    },
    {
      nomePaciente: "Vicente Mafra",
      idade: 21,
      endereco: "Rua Ester",
      num_endereco: 769
    },
    {
      nomePaciente: "Eduarda Cruz",
      idade: 29,
      endereco: "Travessa Davi",
      num_endereco: 872
    },
    {
      nomePaciente: "Melissa Godins",
      idade: 83,
      endereco: "Rua Amanda Ferreira",
      num_endereco: 120
    },
    {
      nomePaciente: "Sophia Paes",
      idade: 11,
      endereco: "Alameda Natália Almeida",
      num_endereco: 287
    },
    {
      nomePaciente: "André Porto",
      idade: 59,
      endereco: "Viela Francisco Pinto",
      num_endereco: 868
    },
    {
      nomePaciente: "Murilo Lins",
      idade: 85,
      endereco: "Avenida Milena",
      num_endereco: 838
    },
    {
      nomePaciente: "Luiz Otávio Batista",
      idade: 43,
      endereco: "Rua Maria Flor",
      num_endereco: 392
    },
    {
      nomePaciente: "Melissa Melo",
      idade: 78,
      endereco: "Rua Eduarda",
      num_endereco: 935
    },
    {
      nomePaciente: "Luiz Gustavo Alves",
      idade: 61,
      endereco: "Alameda Gabriela",
      num_endereco: 928
    },
    {
      nomePaciente: "Fernando Guedes",
      idade: 52,
      endereco: "Travessa Isaac",
      num_endereco: 408
    },
    {
      nomePaciente: "Kauê Lemos",
      idade: 29,
      endereco: "Rua Pedro Palmeira",
      num_endereco: 886
    },
    {
      nomePaciente: "Srta. Clarice Melo",
      idade: 79,
      endereco: "Alameda Maria Elisa",
      num_endereco: 118
    },
    {
      nomePaciente: "Enzo Neto",
      idade: 17,
      endereco: "Viela Henrique",
      num_endereco: 353
    },
    {
      nomePaciente: "Aurora Barreira",
      idade: 73,
      endereco: "Rua Raul Cunha",
      num_endereco: 117
    },
    {
      nomePaciente: "Luiz Miguel Correia",
      idade: 60,
      endereco: "Avenida Thiago",
      num_endereco: 908
    },
    {
      nomePaciente: "Isabella Henriques",
      idade: 69,
      endereco: "Rua Cecília",
      num_endereco: 948
    },
    {
      nomePaciente: "Antônio Ramalho",
      idade: 74,
      endereco: "Travessa Ana Vitória",
      num_endereco: 305
    },
    {
      nomePaciente: "Pedro Cavalcanti",
      idade: 41,
      endereco: "Alameda Rafael",
      num_endereco: 492
    },
    {
      nomePaciente: "Luiza Tavares",
      idade: 90,
      endereco: "Rua Benjamin",
      num_endereco: 437
    },
    {
      nomePaciente: "Antônio Bessa",
      idade: 67,
      endereco: "Viela Matheus Lucas",
      num_endereco: 688
    },
    {
      nomePaciente: "Joaquim de Andrade",
      idade: 48,
      endereco: "Avenida Arthur",
      num_endereco: 146
    },
    {
      nomePaciente: "Lívia Pereira",
      idade: 41,
      endereco: "Rua Tânia",
      num_endereco: 548
    },
    {
      nomePaciente: "Caio Lima",
      idade: 82,
      endereco: "Travessa Sophia",
      num_endereco: 279
    },
    {
      nomePaciente: "Sophia Vieira",
      idade: 69,
      endereco: "Alameda Amanda",
      num_endereco: 872
    },

    {
      nomePaciente: "Thiago Bulhões Filho",
      idade: 86,
      endereco: "Marginal Lucas Gabriel da Gama",
      num_endereco: 1008
    },
    {
      nomePaciente: "Olívia Viveiros",
      idade: 57,
      endereco: "Marginal Letícia Araújo",
      num_endereco: 359
    },
    {
      nomePaciente: "Igor de Lara",
      idade: 39,
      endereco: "Marginal Bárbara Vidal",
      num_endereco: 154
    },
    {
      nomePaciente: "André Crespo Jr.",
      idade: 20,
      endereco: "Ponte Gustavo",
      num_endereco: 450
    },
    {
      nomePaciente: "Pietra Assumpção",
      idade: 67,
      endereco: "Travessa Eloah Custódio",
      num_endereco: 896
    },
    {
      nomePaciente: "Kléber Castanheira",
      idade: 6,
      endereco: "Alameda Maria Valentina",
      num_endereco: 199
    },
    {
      nomePaciente: "Lucas Goulart",
      idade: 47,
      endereco: "Rua Agatha",
      num_endereco: 326
    },
    {
      nomePaciente: "Ricardo Conceição",
      idade: 9,
      endereco: "Avenida Lavínia Dorneles",
      num_endereco: 693
    },
    {
      nomePaciente: "João Luca Conceição",
      idade: 74,
      endereco: "Avenida Bárbara Sales",
      num_endereco: 204
    },
    {
      nomePaciente: "Lavínia Sá",
      idade: 9,
      endereco: "Alameda Luiz Henrique Teixeira",
      num_endereco: 79
    },
    {
      nomePaciente: "Pablo Carneiro",
      idade: 44,
      endereco: "Rua Vitor Hugo",
      num_endereco: 296
    },
    {
      nomePaciente: "Luna Carneiro",
      idade: 74,
      endereco: "Avenida Isabelly Pereira",
      num_endereco: 287
    },
    {
      nomePaciente: "Ana Cecília Rêgo",
      idade: 66,
      endereco: "Alameda Isabella Vieira",
      num_endereco: 665
    },
    {
      nomePaciente: "Dra. Ayla Custódio",
      idade: 79,
      endereco: "Rua Alessandro Mendanha",
      num_endereco: 325
    },
    {
      nomePaciente: "Antônio Soeira",
      idade: 36,
      endereco: "Viela Maria Alice",
      num_endereco: 322
    },
    {
      nomePaciente: "Rodrigo Guedes Neto",
      idade: 31,
      endereco: "Ponte Maria",
      num_endereco: 652
    },
    {
      nomePaciente: "Fernanda Araújo",
      idade: 35,
      endereco: "Ponte Ana Luiza Marques",
      num_endereco: 745
    },
    {
      nomePaciente: "Luiz Miguel Bentes Jr.",
      idade: 60,
      endereco: "Avenida Elísio",
      num_endereco: 1002
    },
    {
      nomePaciente: "Laura Viana",
      idade: 28,
      endereco: "Rodovia Felícia Garcez",
      num_endereco: 658
    },
    {
      nomePaciente: "Sra. Júlio dos Reis",
      idade: 5,
      endereco: "Alameda Pedro",
      num_endereco: 291
    },
    {
      nomePaciente: "Dra. Manuela Vimaranes",
      idade: 11,
      endereco: "Avenida Sarah Nunes",
      num_endereco: 249
    },
    {
      nomePaciente: "Morgana Veloso",
      idade: 44,
      endereco: "Ponte Isaac Álvares",
      num_endereco: 493
    },
    {
      nomePaciente: "Dr. Luiz Otávio Dantas",
      idade: 36,
      endereco: "Rodovia Giovanna Lima",
      num_endereco: 362
    },
    {
      nomePaciente: "Yango Vasques",
      idade: 25,
      endereco: "Travessa Ana Hernandes",
      num_endereco: 688
    },
    {
      nomePaciente: "Dra. Calebe Arriaga",
      idade: 57,
      endereco: "Marginal Caio",
      num_endereco: 265
    },
    {
      nomePaciente: "João Guilherme Modesto",
      idade: 5,
      endereco: "Ponte Vitor Hugo",
      num_endereco: 899
    },
    {
      nomePaciente: "Melissa Madeira",
      idade: 81,
      endereco: "Marginal Aurora",
      num_endereco: 636
    },
    {
      nomePaciente: "Srta. Davi Ludmer Pinheira",
      idade: 48,
      endereco: "Viela Laís Veloso",
      num_endereco: 1019
    },
    {
      nomePaciente: "Valentina Geraldes",
      idade: 61,
      endereco: "Rua Fábio",
      num_endereco: 430
    },
    {
      nomePaciente: "Sra. Bento da Bandeira",
      idade: 8,
      endereco: "Alameda Bruno",
      num_endereco: 546
    },
    {
      nomePaciente: "Carlos Eduardo Franco",
      idade: 22,
      endereco: "Rodovia Leonardo Melo",
      num_endereco: 89
    },
    {
      nomePaciente: "Nathan Roseira",
      idade: 13,
      endereco: "Marginal Luiz Miguel Passarinho",
      num_endereco: 901
    },
    {
      nomePaciente: "João Felipe Carreira",
      idade: 44,
      endereco: "Avenida Emanuelly Moura",
      num_endereco: 291
    },
    {
      nomePaciente: "José Veloso",
      idade: 66,
      endereco: "Rodovia João",
      num_endereco: 927
    },
    {
      nomePaciente: "Bento Castro",
      idade: 47,
      endereco: "Rodovia João Felipe",
      num_endereco: 623
    }
  ];

  const dadosClinicas = [
    {
      nomeClinica: "Clinica Amaral",
      endereco: "Rua Amaral 123",
      telefone: "(11) 9999-9999"
    },
    {
      nomeClinica: "Clinica Flores",
      endereco: "Rua Flores 456",
      telefone: "(11) 8888-8888"
    },
    {
      nomeClinica: "Clinica São Francisco",
      endereco: "Rua São Francisco 789",
      telefone: "(11) 7777-7777"
    }
  ];

  const dadosMedicos = [
    {
      nomeMedico: "Doutor Now",
      crm: "11111",
      especialidade: "Clinico Geral"
    },
    {
      nomeMedico: "Doutor Who",
      crm: "22222",
      especialidade: "Pediatra"
    },
    {
      nomeMedico: "Doutor House",
      crm: "33333",
      especialidade: "Obstetra"
    },
    
    {
      nomeMedico: "Doutora Kudy",
      crm: "44444",
      especialidade: "Pediatra"
    },
    {
      nomeMedico: "Doutor Snoop Dog",
      crm: "55555",
      especialidade: "Pneumologista"
    },
  ]

  // organizador de dados
  dadosPacientes.sort((a, b) => a.idade - b.idade);
  dadosMedicos.sort((a, b) => a.especialidade.localeCompare(b.especialidade));

  // Base dados Fim

  // Carrega a lista de pacientes na página inicial
  const listaPacientes = $('#listaPacientes');
  dadosPacientes.forEach((paciente, index) => {
    listaPacientes.append(`
        <option value="${index}">${paciente.idade} Nome: ${paciente.nomePaciente} </option>
      `);
  });

  // Carrega a lista de clinicas na página inicia
  const listaClinicas = $('#listaClinicas');
  dadosClinicas.forEach((clinica, index) => {
    listaClinicas.append(`
        <option value="${index}">${clinica.nomeClinica}</option>
      `);
  });

  // Carrega a lista de medicos na página inicia
  const listaMedicos = $('#listaMedicos');
  dadosMedicos.forEach((medico, index) => {
    listaMedicos.append(`
        <option value="${index}">${medico.especialidade} - Nome: ${medico.nomeMedico} - CRM: ${medico.crm} </option>
      `);
  });

  // Manipulação do formulário de receitas
  $('#receitaForm').submit(function (event) {
    event.preventDefault();

    // Captura o índice do paciente selecionado
    const pacienteIndex = $('#listaPacientes').val();
    const pacienteSelecionado = dadosPacientes[pacienteIndex];

    // Captura o índice do clinicas selecionado
    const clinicaIndex = $('#listaClinicas').val();
    const clinicaSelecionada = dadosClinicas[clinicaIndex];

    // Captura o índice do medicos selecionado
    const medicoIndex = $('#listaMedicos').val();
    const medicoSelecionado = dadosMedicos[medicoIndex];

    // Captura dos valores dos inputs
    const medicamento = $('#medicamento').val();
    const posologia = $('#posologia').val();
    const intervalo = $('#intervalo').val();
    const qtd = $('#qtd').val();
    const apresentacao = $('#apresentacao').val();

    // Armazena os dados em localStorage para serem acessíveis na próxima página
    const dadosPrescricao = {
      medicamento: medicamento,
      qtd: qtd,
      intervalo: intervalo,
      apresentacao: apresentacao,
      receitas: [] // Inicia com um array vazio para armazenar as receitas
    };

    // Armazena os dados do paciente selecionado em localStorage
    localStorage.setItem('dadosPaciente', JSON.stringify(pacienteSelecionado));
    localStorage.setItem('dadosClinica', JSON.stringify(clinicaSelecionada));
    localStorage.setItem('dadosMedico', JSON.stringify(medicoSelecionado));
    localStorage.setItem('dadosPrescricao', JSON.stringify(dadosPrescricao));

    // Redireciona para a página de visualização
    window.location.href = 'visualizar.html';

  });
});
