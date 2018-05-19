module.exports = {


  friendlyName: 'Find',


  description: 'Find voo.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

  	var voos = await Voo.find();
    return exits.success(voos);

  }


};
