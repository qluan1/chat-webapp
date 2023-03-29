const { createOpenaiClient } = require('./openaiClient');
const { createCustomizedClient } = require('./customizedClient');

module.exports = {
  createOpenaiClient,
  createCustomizedClient,
};
