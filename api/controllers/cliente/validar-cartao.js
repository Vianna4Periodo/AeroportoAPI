module.exports = {


  friendlyName: 'Validar cartao',


  description: '',


  inputs: {
    cartao: {
      type: 'string',
      required: true,
      isCreditCard: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var invalidCards = [
      "5358593643358584",
      "5259079135810969",
      "5287293058591540"
    ];

    invalidCards.forEach(function (card) {
      if (card == inputs.cartao) {
        return exits.success({ "isValid": false });
      }
    });

    return exits.success({ "isValid": true });

  }


};
