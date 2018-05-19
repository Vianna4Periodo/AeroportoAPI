module.exports = {


  friendlyName: 'Find',


  description: 'Find cliente.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

  	var clientes = await Cliente.find();
    return exits.success(clientes);

  }


};
