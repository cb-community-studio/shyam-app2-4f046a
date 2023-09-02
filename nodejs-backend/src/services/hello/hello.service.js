const { Hello } = require('./hello.class');
const createModel = require('../../models/hello.model');
const hooks = require('./hello.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/hello', new Hello(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hello');

  service.hooks(hooks);
};