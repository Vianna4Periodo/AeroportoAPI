/**
 * Voo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    dataSaida: {
      type: 'string',
      required: true,
      columnType: 'datetime'
    },
    dataChegada: {
      type: 'string',
      required: true,
      columnType: 'datetime'
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
    capacidadeMaxima: {
      type: 'number',
      required: true
    },
    valor: {
      type: 'number',
      columnType: 'double',
      required: true
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    aeronave: {
      model: "aeronave"
    },
    passagens: {
      collection: 'passagem',
      via: 'voo'
    }
  },

};
