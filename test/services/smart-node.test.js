const assert = require('assert');
const app = require('../../src/app');

describe('\'smartNode\' service', () => {
  it('registered the service', () => {
    const service = app.service('smart-node');

    assert.ok(service, 'Registered the service');
  });
});
