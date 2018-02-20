// Initializes the `smartNode` service on path `/smart-node`
const createService = require('feathers-mongoose');
const createModel = require('../../models/smart-nodes.model');
const hooks = require('./smart-nodes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'smart-nodes',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/smart-nodes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('smart-nodes');

  service.hooks(hooks);
};
