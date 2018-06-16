module.exports = {


  friendlyName: 'Find',


  description: 'Find aeroporto.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

  	try {
      var aeronaves = await Aeronave.find();
      return exits.success(aeronaves);
    } catch (error) {
      return exits.error(error);
    }

  }


};
