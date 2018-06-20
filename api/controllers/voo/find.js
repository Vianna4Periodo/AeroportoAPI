module.exports = {


  friendlyName: 'Find',


  description: 'Find voo.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    try {
      var voos = await Voo.find().populate("aeronave").populate("passagens");
      return exits.success({ "voos": voos });
    } catch (error) {
      return exits.erro(error);
    }

  }


};
