module.exports = {


  friendlyName: 'Save',


  description: 'Save cliente.',


  inputs: {
  	nome: {
  		type: 'string',
  		required: true
  	},
  	email: {
  		type: 'string',
  		required: true,
  		isEmail: true
    },
    password: {
  		type: 'string',
      required: true,
      isNotEmptyString: true
  	}
  },


  exits: {

  },


  fn: async function (inputs, exits) {

  	try {
  		var cliente = await Cliente.create(inputs).fetch();
  		return exits.success(cliente);
  	} catch(error) {
  		return exits.error(error);
  	}

  }


};
