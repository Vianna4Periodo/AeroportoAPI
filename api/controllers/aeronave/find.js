module.exports = {


  friendlyName: 'Find',


  description: 'Find aeroporto.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

  	var aeronaves = await Aeronave.find()
  	.populate('voo');
  	
    return exits.success(aeronaves);

  }


};
