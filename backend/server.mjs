import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS to allow requests from your frontend
app.use(cors({ origin: 'portfolio-v3-z1yp.vercel.app/' }));
app.use(bodyParser.json());

// Endpoint to send messages to Discord
app.post('/send-to-discord', async (req, res) => {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  const messageContent = req.body;

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageContent)
    });

    if (response.ok) {
      res.status(200).send('Message sent successfully');
    } else {
      const errorText = await response.text();
      console.error('Failed to send message:', errorText);
      res.status(response.status).send('Failed to send message');
    }
  } catch (error) {
    console.error('Error sending message to Discord:', error);
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});