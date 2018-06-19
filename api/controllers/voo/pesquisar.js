module.exports = {


  friendlyName: 'Pesquisar',


  description: 'Pesquisar voo.',


  inputs: {
    destino: {
      type: 'string',
      required: true,
      isNotEmptyString: true
    },
    origem: {
      type: 'string',
      required: true,
      isNotEmptyString: true
    },
    valor: {
      type: 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var valor = inputs.valor == null ? 10000 : inputs.valor;

    var voos = await Voo.find({
      origem: {
        "contains": inputs.origem
      },
      destino: {
        "contains": inputs.destino
      },
      valor: {
        "<=": valor
      }
    }).populate("aeronave");
    return exits.success(voos);

  }


};
