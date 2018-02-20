const smartCash = require('../../lib/smart-cash');
const { authenticate } = require('@feathersjs/authentication').hooks;

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

const checkStatus = async context => {
  context.result.data = context.result.data.map(node => {
    return Object.assign({}, node, {
      status: 'Enabled'
    });
  });
  return context;

  // Bad, because we are modifying references
  // context.result.data.forEach(node => {
  //   node.status = 'Enabled';
  // });
  // return context;

};

const nextFunc = async context => {
  // do stuff!!
  return context;
};

const ensureProperOwner = async context => {
  // do stuff!!
  return context;
};

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [ensureProperOwner],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [populateSmartCash, checkStatus, nextFunc],
    get: [populateSmartCash, checkStatus, nextFunc],
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
