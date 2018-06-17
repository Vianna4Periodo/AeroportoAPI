module.exports = {


  friendlyName: 'Comprar passagem',


  description: '',


  inputs: {
      idVoo: {
        type: 'number',
        required: true
      },
      idCliente: {
          type: 'number',
          required: true
      },
      quantidade: {
          type: 'number',
          required: true
      }
  },


  exits: {
    notFound: {
      responseType: "notFound"
    }
  },


  fn: async function (inputs, exits) {
    var voo = await Voo.findOne({ id: inputs.idVoo }).populate("passagens");
    var cliente = await Cliente.findOne({ id: inputs.idCliente });

    if (voo == null) {
      return exits.serverError("O voo informado não existe.");
    } else if (cliente == null) {
      return exits.serverError("O cliente informado não existe.");
    }

    var vagasDisponiveis = voo.capacidadeMaxima - voo.passagens.lenght;

    if (vagasDisponiveis <= 0) {
      return exits.success(400, "Não existem mais vagas disponíveis.");
    } else if (vagasDisponiveis < inputs.quantidade) {
      return exits.success(400, "Não existem vagas disponíveis para a quantidade que você precisa.");
    }

    var passagens = [];

    for (let index = 0; index < inputs.quantidade; index++) {
      var novaPassagem = await Passagem.create({
        cliente: inputs.idCliente,
        voo: inputs.idVoo
      }).fetch();

      passagens.push(novaPassagem);
    }

    return exits.success(passagens);

  }

};
