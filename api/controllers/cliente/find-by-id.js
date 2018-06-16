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
      responseType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {

  	try {
      var cliente = await Cliente.findOne({
        id: inputs.id
      }).populate('passagens');

      if (cliente == null) {
        return exits.notFound();
      }

      return exits.success(cliente);
    } catch (error) {
      return exits(error);
    }

  }


};
