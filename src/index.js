/* eslint-disable no-console */
const logger = require('winston');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () => {

  logger.info('Feathers application started on http://%s:%d', app.get('host'), port);

  app.service('smart-node').get({ _id: '5a70d116f347c136050520b3'})
    .then(data => console.log(JSON.stringify(data, null, 2)));

}
);
