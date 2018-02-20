// https://www.npmjs.com/package/shelljs
const shell = require('shelljs');
const waitPeriod = 1000 * 60; // 1 min

const getStuffFromCLI = (address) => {
  return new Promise((resolve, reject) => {
    shell.echo(`Do some sync shell stuff to retrieve the data for this one address: ${shell.echo('Error: Git commit failed')}`);
    const data = { thing: 'thang' };
    resolve(data);
  });
};

const runUpdateer = async (app) => {
  console.log('Running Updater');

  // The below is is sudo code, but is in the right direction.

  // const smartNodes = await app.service('smart-nodes').find();
  // const getInfoPromises = smartNodes.data.map(node => {
  //   return getStuffFromCLI(node.address);
  // });
  // const infoFromCLIforAllAdds = await Promise.all(getInfoPromises);
  // const updateDBPromises = infoFromCLIforAllAdds.map(info => {
  //   return app.service('smart-nodes').update(info.id, info);
  // });
  // await Promise.all(updateDBPromises);
  console.log(`Updater complete. Waiting ${waitPeriod / 1000} seconds before running again`);
  return setTimeout(runUpdateer, waitPeriod);
};

module.exports = function (app) {
  runUpdateer(app);
};