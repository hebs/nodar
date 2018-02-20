const smartNode = require('./smart-node/smart-node.service.js');
const users = require('./users/users.service.js');
const transactions = require('./transactions/transactions.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(smartNode);
  app.configure(users);
  app.configure(transactions);
};
