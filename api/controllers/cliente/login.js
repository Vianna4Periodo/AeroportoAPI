module.exports = {


  friendlyName: 'Login',


  description: 'Login cliente.',


  inputs: {
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
    notFound: {
      responseType: "notFound"
    }
  },


  fn: async function (inputs, exits) {
    var cliente = await Cliente.findOne({
      email: inputs.email,
      password: inputs.password
    }).populate("passagens.aeronave");

    if (cliente == null) {
      return exits.notFound();
    }

    return exits.success({ "cliente": cliente });

  }


};
