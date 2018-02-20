const smartNodes = require('./smart-nodes/smart-nodes.service.js');
const users = require('./users/users.service.js');
const transactions = require('./transactions/transactions.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(smartNodes);
  app.configure(users);
  app.configure(transactions);
};
