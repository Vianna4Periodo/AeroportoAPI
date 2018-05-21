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
  		statusCode: '404'
  	}
  },


  fn: async function (inputs, exits) {

    try {
      var voo = await Voo.findOne({
        id: inputs.id
      }).populate('clientes');

      if (!voo) {
        return exits.notFound();
      }

      return exits.success(voo);
    } catch(error) {
      return extis.error(error);
    }

  }


};
