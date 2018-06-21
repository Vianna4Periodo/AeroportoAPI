module.exports = {


  friendlyName: 'Cancelar passagem',


  description: '',


  inputs: {
    idPassagem: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    // await Passagem.destroy({
    //   id: inputs.idPassagem
    // });

    await Passagem.destroy({ id: inputs.idPassagem });

    return exits.success();

  }


};
