const express = require('express');
const bodyParser = require('body-parser');
const { MessagingResponse } = require('twilio').twiml;
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Configuración de OpenAI
const configuration = new Configuration({
  apiKey: 'YOUR_OPENAI_API_KEY',
});
const openai = new OpenAIApi(configuration);

// Ruta para el Webhook de Twilio
app.post('/whatsapp', async (req, res) => {
  const incomingMessage = req.body.Body;
  const from = req.body.From;

  try {
    // Llamar a la API de OpenAI
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: incomingMessage,
      max_tokens: 150,
    });

    const reply = response.data.choices[0].text.trim();

    const twiml = new MessagingResponse();
    twiml.message(reply);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
