const axios = require('axios');

// smart cash uses `/api` and `/ext` extensions befor certain calls
const api = axios.create({
  baseURL: 'https://explorer.smartcash.cc'
});

// Strip the headers, config, etc from responses
// only return the pertinent "data" info from a res or err
const transformResponse = (func) => {
  return (...args) => {
    return func(...args)
      .then(response => response.data)
      .catch(err => {
        throw err.response.data;
      });
  };
};

const smartCash = {
  getAddress: transformResponse((address) => {
    return api.get(`/ext/getaddress/${address}`);
  }),
};

module.exports = smartCash;