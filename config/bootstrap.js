/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {

  await Aeronave.destroy({});

  await Aeronave.createEach([
    { nome: 'MiG-21' },
    { nome: 'Ercoupe' },
    { nome: 'Consolidated B-24 Liberator' },
    { nome: 'Mitsubishi Zero' },
    { nome: 'Eclipse 500' },
    { nome: 'Lancair Columbia/Cessna Corvalis' }
  ]);

  return done();

};
