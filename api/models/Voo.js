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
    clientes: {
      collection: 'cliente',
      via: 'voos'
    }
  },

};
