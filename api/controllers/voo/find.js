module.exports = {


  friendlyName: 'Find',


  description: 'Find voo.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    try {
      var voos = await Voo.find();
      return exits.success(voos);
    } catch (error) {
      return exits.erro(error);
    }

  }


};
