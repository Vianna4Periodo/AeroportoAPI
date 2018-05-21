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
      var cliente = await Cliente.findOne({
        id: inputs.id
      }).populate('voos');

      if (!cliente) {
        return exits.notFound();
      }

      return exits.success(cliente);
    } catch (error) {
      return exits(error);
    }

  }


};
