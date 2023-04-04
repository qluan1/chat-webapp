const { Configuration, OpenAIApi } = require('openai');

const OPENAI_CHAT_MODEL = 'gpt-3.5-turbo';
const OPENAI_MODEL = 'text-davinci-003';
const OPENAI_MAX_TOKENS = 420;
const OPENAI_TEMPERATURE = 0.7;

const createOpenaiClient = () => {
    const configuration = new Configuration({
      apiKey: process.env.CHAT_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const client = {
      client: openai,
      createCompletion: async (params) => {
        const response = await openai.createCompletion({
          model: OPENAI_MODEL,
          prompt: params.prompt,
          max_tokens: OPENAI_MAX_TOKENS,
          temperature: OPENAI_TEMPERATURE,
        });
        const data = {
          message: { ...response.data.choices[0].message }
        }
        response.data = data;
        return response;
      },
      createChatCompletion: async (params) => {
        const response = await openai.createChatCompletion({
          model: OPENAI_CHAT_MODEL,
          messages: [
            ...(params.systemMessage || []),
            ...params.messages,
          ],
          max_tokens: OPENAI_MAX_TOKENS,
          temperature: OPENAI_TEMPERATURE,
        });
        const data = {
          message: { ...response.data.choices[0].message }
        }
        response.data = data;
        return response;
      },
    };
    return client;
}

module.exports = {
  createOpenaiClient,
};
