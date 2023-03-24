require('dotenv').config();

const express = require("express");
const axios = require('axios');
const cors = require('cors');
const fetch = require('node-fetch');

const OPENAI_API_KEY = process.env.CHAT_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post('/chat', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    // const response = await axios.post(OPENAI_API_URL, {
      // message: [
      //   {
      //     role: "user",
      //     content: prompt,
      //   }
      // ],
      // temperature: 0.7,
      // model: "gpt-3.5-turbo",
    // }, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${OPENAI_API_KEY}`
    //   }
    // });
    // const result = response.data.choices[0].text.trim();
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: prompt,
          }
        ],
        temperature: 0.7,
        model: "gpt-3.5-turbo",
      })
    })
    res.status(response.status);
    response.body.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
