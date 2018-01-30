const smartCash = require('../../lib/smart-cash');

const populateSmartCash = async context => {
  const smartNodes = context.result.data
    ? context.result.data
    : [context.result];
  const promises = smartNodes.map(node => smartCash.getAddress(node.address));
  return Promise.all(promises)
    .then(addresses => {
      context.result.data = smartNodes.map(node => {
        return Object.assign({}, node, {
          content: addresses.find(address => address.address === node.address)
        });
      });
      return context;
    });
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [populateSmartCash],
    get: [populateSmartCash],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
