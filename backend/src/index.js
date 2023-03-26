require('dotenv').config();
const express = require("express");
const cors = require('cors');
const {
  createOpenaiClient,
  createCustomizedClient,
} = require('./clients');

const client = process.env.CLIENT === 'openai' ? createOpenaiClient() : createCustomizedClient();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post('/completion', async (req, res) => {
  try {
    const response = await client.createCompletion(req.body);
    res.status(response.status);
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

app.post('/chat', async (req, res) => {
  try {
    const response = await client.createChatCompletion(req.body);
    res.status(response.status);
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
