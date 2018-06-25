module.exports = {


  friendlyName: 'Passagens',


  description: 'Passagens cliente.',


  inputs: {
  	id: {
  		type: 'number',
  		required: true
  	}
  },


  exits: {

  },


  fn: async function (inputs, exits) {

  	var passagens = await Passagem.find({
  		cliente: inputs.id
  	}).populate("voo").populate("voo.aeronave");

    return exits.success({ "passagens": passagens });

  }


};
