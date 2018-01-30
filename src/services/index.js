const smartNode = require('./smart-node/smart-node.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(smartNode);
};
