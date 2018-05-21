module.exports = {


  friendlyName: 'Save',


  description: 'Save voo.',


  inputs: {
  	dataSaida: {
      type: 'string',
      required: true,
      isNotEmptyString: true
    },
    dataChegada: {
      type: 'string',
      required: true,
      isNotEmptyString: true
    },
    destino: {
      type: 'string',
      required: true,
      isNotEmptyString: true
    },
    origem: {
      type: 'string',
      required: true,
      isNotEmptyString: true
    },
    quantidadeLugares: {
      type: 'number',
      required: true
    },
    valor: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

  	try {
  		var voo = Voo.create(inputs).fetch();
  		return exits.success(voo);
  	} catch(error) {
  		return exits.error(error);
  	}

  }


};
