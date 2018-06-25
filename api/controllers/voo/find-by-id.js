module.exports = {


  friendlyName: 'Find by id',


  description: '',


  inputs: {
  	id: {
  		type: 'number',
  		required: true
  	}
  },


  exits: {
    notFound: {
      responseType: "notFound"
    }
  },


  fn: async function (inputs, exits) {

    try {
      var voo = await Voo.findOne({
        id: inputs.id
      }).populate("aeronave");

      if (voo ==  null) {
        return exits.notFound();
      }

      return exits.success({ "voo": voo });
    } catch(error) {
      return extis.error(error);
    }

  }


};
