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
    pagamento: {
      type: 'number',
      required: true
    },
    quantidade: {
      type: 'number',
      required: true,
      min: 1
    }
  },


  exits: {
    serverError: {
      responseType: "serverError"
    },
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

    var totalPagamento = inputs.quantidade * voo.valor;

    if (inputs.pagamento < totalPagamento) {
      return exits.success("O pagamento informado(" + inputs.pagamento + ") está abaixo do valor referente a " + inputs.quantidade + " passagen(s) que é " + totalPagamento);
    } else if (inputs.pagamento > totalPagamento) {
      return exits.success("O pagamento informado(" + inputs.pagamento + ") está acima do valor referente a " + inputs.quantidade + " passagens que é " + totalPagamento);
    }

    var vagasDisponiveis = voo.capacidadeMaxima - voo.passagens.length;

    if (vagasDisponiveis <= 0) {
      return exits.success("Não existem mais vagas disponíveis.");
    } else if (vagasDisponiveis < inputs.quantidade) {
      return exits.success("Não existem vagas disponíveis para a quantidade que você precisa.");
    }

    var passagens = [];

    for (let index = 0; index < inputs.quantidade; index++) {
      var novaPassagem = await Passagem.create({
        cliente: inputs.idCliente,
        voo: inputs.idVoo
      }).fetch();

      var fullPassagem = await Passagem.findOne({
        id: novaPassagem.id
      }).populate("voo").populate("cliente");

      passagens.push(fullPassagem);
    }

    return exits.success({ "passagens": passagens });
  }

};
