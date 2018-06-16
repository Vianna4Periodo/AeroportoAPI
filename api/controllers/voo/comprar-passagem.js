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
      count: {
          type: 'number',
          required: true
      }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

  }

};
