const axios = require('axios');
const keys = require("../config/keys");

async function generateChatCompletion(prompt) {
  const url = 'https://api.openai.com/v1/completions';
  const model = "";

  try {
    const response = await axios.post(url, {
      model: model,
      prompt: prompt,
      max_tokens: 3000, // Adjust the number of tokens based on your needs
      temperature: 0.7, // Adjust the temperature based on your needs
      n: 1, // Adjust the number of completions you want
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${keys.openai}`,
      },
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('OpenAI API request failed:', error.response.data);
    throw error;
  }
}

module.exports = {
  generateChatCompletion,
};