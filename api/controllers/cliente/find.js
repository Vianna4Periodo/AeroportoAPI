module.exports = {


  friendlyName: 'Find',


  description: 'Find cliente.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    try {
      var clientes = await Cliente.find();
      return exits.success(clientes);
    } catch (error) {
      return exits.error(error);
    }

  }


};
