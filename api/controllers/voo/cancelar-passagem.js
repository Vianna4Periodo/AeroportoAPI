module.exports = {


  friendlyName: 'Cancelar passagem',


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
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
