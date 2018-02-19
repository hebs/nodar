const smartNode = require('./smart-node/smart-node.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(smartNode);
  app.configure(users);
};
