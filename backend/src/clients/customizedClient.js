const axios = require('axios');

const createCustomizedClient = () => {
  client = {};
  client.createCompletion = async (params) => {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci/completions',
      {
        prompt: params.prompt,
      }
    );
    return response;
  };
  client.createChatCompletion = async (params) => {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci/completions',
      {
        mesages: params.messages || [],
      }
    );
    return response;
  };
  return client;
};

module.exports = {
  createCustomizedClient,
};
